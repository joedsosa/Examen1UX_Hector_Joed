import React from 'react';
import './Sidebar.css';
import yutub from 'C:/Users/Hector/Documents/UNITEC - EDUARDO/Clases/2024/Clases Q2 - Abril a Junio 2024/Experiencia de Usuario/Examen1UX_Hector_Joed/src/assets/yutub.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={yutub} alt="YouTube Logo" />
        </div>
      {/* Sección 1: Principal, Shorts, Suscripciones */}
      <div className="sidebar-section">
      <div className="sidebar-toggle">&#9776;</div>
        <div className="section-title">Principal</div>
        <button className="sidebar-button">🏠 Principal</button>
        <button className="sidebar-button">📹 Shorts</button>
        <button className="sidebar-button">💬 Suscripciones</button>
      </div>
      {/* Línea divisoria */}
      <hr className="divider" />
      {/* Sección 2: Tu > */}
      <div className="sidebar-section">
        <div className="section-title">Tu &gt;</div>
        <button className="sidebar-button">📺 Tu Canal</button>
        <button className="sidebar-button">🕒 Historial</button>
        <button className="sidebar-button">🎶 Playlists</button>
        <button className="sidebar-button">🎬 Tus videos</button>
        <button className="sidebar-button">🕑 Ver más tarde</button>
        <button className="sidebar-button">❤️ Videos que me gustan</button>
        <button className="sidebar-button">📌 Tus clips</button>
      </div>
      {/* Línea divisoria */}
      <hr className="divider" />
      {/* Sección 3: Suscripciones */}
      <div className="sidebar-section">
        <div className="section-title bold">Suscripciones</div>
        <button className="sidebar-button">👥 8cho</button>
        <button className="sidebar-button">🎤 Adrian Saenz</button>
        <button className="sidebar-button">🎨 Alec Hernandez</button>
        <button className="sidebar-button">🎬 Alex Meyers en Esp</button>
        <button className="sidebar-button">🎮 Angela Yelin</button>
      </div>
      <hr className="divider" />
      {/* Sección 4: Explorar*/}
      <div className="sidebar-section">
        <div className="section-title">Explorar</div>
        <button className="sidebar-button">📈 Tendencias</button>
        <button className="sidebar-button">🎵 Musica</button>
        <button className="sidebar-button">🎮 Videojuegos</button>
        <button className="sidebar-button">⚽ Deportes</button>
        <button className="sidebar-button">📚 Aprendizaje</button>
      </div>
      {/* Línea divisoria */}
      <hr className="divider" />
      {/* Sección 5: Mas de Youtube*/}
      <div className="sidebar-section">
        <div className="section-title">Más de Youtube</div>
        <button className="sidebar-button">💎 Youtube Premium</button>
        <button className="sidebar-button">🎬 Youtube Studio</button>
        <button className="sidebar-button">🎵 Youtube Music</button>
        <button className="sidebar-button">👶 Youtube Kids</button>
      </div>
      <hr className="divider" />
      {/* Sección 6: Configuracion*/}
      <div className="sidebar-section">
        <button className="sidebar-button">⚙️ Configuración</button>
        <button className="sidebar-button">🚨 Historial de denuncias</button>
        <button className="sidebar-button">❓ Ayuda</button>
        <button className="sidebar-button">✉️ Enviar sugerencias</button>
      </div>
      <hr className="divider" />
      {/* Sección 7: Derechos*/}
      <div className="sidebar-section">
        <button className="sidebar-button">ℹ️ Información    Prensa
        Derechos de autor   Contactar   Creadores   Publicidad    Desarrolladores   Términos    Privacidad    Política y seguridad    Cómo funciona YouTube   Probar funciones nuevas       
            © 2024 Google LLC</button>
        
      </div>
    </div>
  );
};

export default Sidebar;
