import React, { useState } from 'react';
import './css/contact.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://muxiye.pythonanywhere.com/submit_form',
        { name, email, message }
      );

      setSuccessMessage(response.data.message);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setSuccessMessage('An error occurred while submitting the form.');
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
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
