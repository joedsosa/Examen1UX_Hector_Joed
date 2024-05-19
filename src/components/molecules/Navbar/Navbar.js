import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">YouTube</div>
      <div className="navbar-search-container">
        <input type="text" className="navbar-search" placeholder="Buscar" />
        <button className="navbar-voice-search">🔊</button>
      </div>
      <div className="navbar-icons">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </nav>
  );
};

export default Navbar;
