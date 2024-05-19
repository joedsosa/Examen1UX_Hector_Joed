import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sección 1: Principal, Shorts, Suscripciones */}
      <div className="sidebar-section">
        <div className="section-title">Principal</div>
        <button className="sidebar-button">Principal</button>
        <button className="sidebar-button">Shorts</button>
        <button className="sidebar-button">Suscripciones</button>
      </div>
      {/* Línea divisoria */}
      <hr className="divider" />
      {/* Sección 2: Tu > */}
      <div className="sidebar-section">
        <div className="section-title">Tu &gt;</div>
        <button className="sidebar-button">Tu Canal</button>
        <button className="sidebar-button">Historial</button>
        <button className="sidebar-button">Playlists</button>
        <button className="sidebar-button">Tus videos</button>
        <button className="sidebar-button">Ver más tarde</button>
        <button className="sidebar-button">Videos que me gustan</button>
        <button className="sidebar-button">Tus clips</button>
      </div>
      {/* Línea divisoria */}
      <hr className="divider" />
      {/* Sección 3: Suscripciones */}
      <div className="sidebar-section">
        <div className="section-title bold">Suscripciones</div>
        <button className="sidebar-button">8cho</button>
        <button className="sidebar-button">Adrian Saenz</button>
        <button className="sidebar-button">Alec Hernandez</button>
        <button className="sidebar-button">Alex Meyers en Esp</button>
        <button className="sidebar-button">Angela Yelin</button>
      </div>
    </div>
  );
};

export default Sidebar;
