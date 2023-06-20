import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/header.css';

const Header = () => {
  const location = useLocation();

  const toggleResponsiveClass = () => {
    setResponsiveClass(responsiveClass === 'navbar' ? 'navbar responsive' : 'navbar');
  };

  const [responsiveClass, setResponsiveClass] = React.useState('navbar');

  return (
    <div>
      <header className="header"></header>
      <div className={responsiveClass} id="myNavbar">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
        <Link to="#/" className="icon" onClick={toggleResponsiveClass}>
          &#9776;
        </Link>
      </div>
    </div>
  );
};

export default Header;
