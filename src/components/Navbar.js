import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Airbnb</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Experiences</a></li>
        <li><a href="#">Online Experiences</a></li>
      </ul>
      <div className="user-menu">
        <a href="#">Login</a> / <a href="#">Signup</a>
      </div>
    </nav>
  );
}

export default Navbar;
