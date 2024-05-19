import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="sidebar-toggle">&#9776;</div>
      
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar" />
        <button className="search-button">&#128269;</button>
        <button className="voice-button">&#128266;</button>
      </div>
      <div className="action-buttons">
        <button className="create-button">&#43;</button>
        <button className="profile-button">&#128100;</button>
      </div>
    </nav>
  );
};

export default Navbar;
