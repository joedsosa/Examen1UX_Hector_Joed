import React from 'react';
import './QuickRecommendationsBar.css';

const QuickRecommendationsBar = () => {
  return (
    <div className="quick-recommendations-container">
      <div className="quick-recommendations-bar">
        <button className="quick-recommendation-button">Todos</button>
        <button className="quick-recommendation-button">Musica</button>
        <button className="quick-recommendation-button">Mixes</button>
        <button className="quick-recommendation-button">Gorillaz</button>
        <button className="quick-recommendation-button">Ahorros</button>
        <button className="quick-recommendation-button">Videojuegos</button>
        <button className="quick-recommendation-button">Indie rock</button>
        <button className="quick-recommendation-button">Pop rock</button>
        <button className="quick-recommendation-button">Musica Japonesa</button>
        <button className="quick-recommendation-button">Hiphop alternativo</button>
        <button className="quick-recommendation-button">Manga</button>
        <button className="quick-recommendation-button">Trailer</button>
      </div>
    </div>
  );
};

export default QuickRecommendationsBar;

