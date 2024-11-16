import React, { useState } from 'react';
import './css/contact.css';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      // Update this URL to your PythonAnywhere domain
      const response = await fetch('https://mohamed2025.pythonanywhere.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setErrorMessage('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Network error: Could not send message. Please try again later.');
    }
  };

  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
