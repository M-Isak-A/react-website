import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
<Routes>
  <Route path="/pizza-shop" element={<Home />} />
  <Route path="/pizza-shop/about" element={<About />} />
  <Route path="/pizza-shop/contact" element={<Contact />} />
</Routes>

  );
};

export default App;
