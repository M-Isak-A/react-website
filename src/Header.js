import React from 'react';
import './css/header.css';

function toggleResponsiveClass() {
  document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

const Header = () => {
  return (
    <div>
      <header className="header"></header>
      <div className="navbar" id="myNavbar">
        <a className="active" href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a className="icon" onClick={toggleResponsiveClass}>&#9776;</a>
      </div>
    </div>
  );
}

export default Header;
