import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-search-container">
        <input type="text" className="navbar-search" placeholder="Buscar" />
        <button className="navbar-search-button">🔍</button>
        <button className="navbar-voice-search">🎤</button>
      </div>
      <div className="navbar-right">
        <button className="navbar-icon">➕</button>
        <button className="navbar-icon">🔔</button>
        <button className="navbar-icon">👤</button>
      </div>
    </nav>
  );
};

export default Navbar;
