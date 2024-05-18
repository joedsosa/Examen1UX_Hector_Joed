import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">YouTube</div>
      <input type="text" className="navbar-search" placeholder="Buscar" />
      <button className="navbar-voice-search">🔊</button>
      <div className="navbar-icons">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </nav>
  );
};

export default Navbar;
