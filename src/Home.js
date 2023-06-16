import React from 'react';
import './css/style.css';
import './css/header.css';
import Slideshow from './script/Slideshow';
import Header from './Header';
import Footer from './Footer';
import pizzaImage1 from './images/Capture3.png';
import pizzaImage2 from './images/Capture2.png';
import pizzaImage3 from './images/Capture1.png';
import pizzaImage4 from './images/Capture4.png';

const Home = () => {
  return (
    <div>
      <Header />
      <Slideshow />
      <section id="menu">
        <article>
          <img src={pizzaImage1} alt="Pizza" />
          <h2>Pepperoni Pizza</h2>
          <p>£10.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </article>
        <article>
          <img src={pizzaImage2} alt="Pizza" />
          <h2>Hawaiian Pizza</h2>
          <p>£12.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </article>
        <article>
          <img src={pizzaImage3} alt="Pizza" />
          <h2>Veggie Pizza</h2>
          <p>£9.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </article>
        <article>
          <img src={pizzaImage4} alt="Pizza" />
          <h2>Veggie Pizza</h2>
          <p>£11.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
