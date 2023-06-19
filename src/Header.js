import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React from 'react';
import './css/header.css';

function toggleResponsiveClass() {
  document.getElementsByClassName('navbar')[0].classList.toggle('responsive');
}

const Header = () => {
  const homeMatch = useMatch('/home');
  const aboutMatch = useMatch('/about');
  const contactMatch = useMatch('/contact');

  const homePath = useResolvedPath('/home');
  const aboutPath = useResolvedPath('/about');
  const contactPath = useResolvedPath('/contact');

  return (
    <div>
      <header className="header"></header>
      <div className="navbar" id="myNavbar">
        <Link to={homePath.href} className={homeMatch ? 'active' : ''}>
          Home
        </Link>
        <Link to={aboutPath.href} className={aboutMatch ? 'active' : ''}>
          About
        </Link>
        <Link to={contactPath.href} className={contactMatch ? 'active' : ''}>
          Contact
        </Link>
        <Link
          to="#/"
          className="icon"
          onClick={toggleResponsiveClass}
        >
          &#9776;
        </Link>
      </div>
    </div>
  );
};

export default Header;
