import React, { useState } from 'react';
import Navbar from './components/molecules/Navbar/Navbar';
import Sidebar from './components/molecules/Sidebar/Sidebar';
import VideoSection from './components/organisms/VideoSection';
import QuickRecommendationsBar from './components/molecules/QuickRecommendationsBar/QuickRecommendationsBar';

import './App.css';

import luismi1 from './assets/luismi1.avif';
import luismi2 from './assets/luismi2.jpg';
import luismi3 from './assets/luismi3.jpeg';
import luismi4 from './assets/luismi4.webp';
import canalLuismi from './assets/canal_luismi.avif';
import eleven from './assets/eleven.jpg';
import flash from './assets/flash.webp';
import casapapel from './assets/casapapel.png';
import suits from './assets/suits.webp';
import canal_pelis from './assets/canal_pelis.png';
import l200 from './assets/l200.webp';
import inter from './assets/inter.jpg';
import soda from './assets/soda.jpeg';
import hilux from './assets/hilux.jpg';
import canal_mix from './assets/canal_mix.jpeg';
import guitar from './assets/guitar.jpg';
import intensa from './assets/intensa.webp';
import volca from './assets/volca.jpeg';
import algo_contigo from './assets/algo_contigo.jpeg';
import canal_shorts from './assets/canal_shorts.jpeg';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }; 
  const videosContinuarViendo = [
    { image: luismi1, title: 'La Media Vuelta', time: 'Hace 3 años', channelName: 'Luis Miguel Exitos', channelImage: canalLuismi },
    { image: luismi2, title: 'Sabes una cosa', time: 'Hace 2 años', channelName: 'Exitos Luis Mi', channelImage: canalLuismi },
    { image: luismi3, title: 'Cuando calienta el sol', time: 'Hace 4 años', channelName: 'Luis Miguel Fans', channelImage: canalLuismi },
    { image: luismi4, title: 'Sabor a mi', time: 'Hace 5 años', channelName: 'Mis Boleros Favoritos', channelImage: canalLuismi },
  ];

  const videosRecomendados = [
    { image: eleven, title: 'Stranger Things', time: 'Hace 11 meses', channelName: 'Tu peli favorita', channelImage: canal_pelis },
    { image: flash, title: 'The Flash', time: 'Hace 17 meses', channelName: 'DC Comics', channelImage: canal_pelis },
    { image: casapapel, title: 'La Casa de Papel', time: 'Hace 1 mes', channelName: 'Tu peli favorita', channelImage: canal_pelis },
    { image: suits, title: 'Suits', time: 'Hace 6 meses', channelName: 'Netflix', channelImage: canal_pelis },
  ];

  const videosMiMix = [
    { image: l200, title: 'Nueva Mitsubishi L200 2025', time: 'Hace 48 horas', channelName: 'Mitsubishi Motors', channelImage: canal_mix },
    { image: inter, title: 'Interstellar Teaser Trailer', time: 'Hace 160 horas', channelName: 'Tu peli favorita', channelImage: canal_mix },
    { image: soda, title: 'De Musica Ligera - Soda Stereo', time: 'Hace 45 horas', channelName: 'Soda Stereo', channelImage: canal_mix },
    { image: hilux, title: 'Hilux 2025: La mejor?', time: 'Hace 37 horas', channelName: 'Toyota HN', channelImage: canal_mix },
  ];

  const videosYouTubeShorts = [
    { image: guitar, title: 'Tutorial Express de Guitarra', time: 'Hace 1 hora', channelName: 'Tus Clases de Guitarra', channelImage: canal_shorts },
    { image: intensa, title: 'Intensamente 2 Teaser Trailer', time: 'Hace 2 horas', channelName: 'Tu peli favorita', channelImage: canal_shorts },
    { image: volca, title: 'Por que la Hilux vuelca?', time: 'Hace 3 horas', channelName: 'Toyota HN', channelImage: canal_shorts },
    { image: algo_contigo, title: 'Escucha Algo Contigo en Spotify', time: 'Hace 4 horas', channelName: 'Rita Payes', channelImage: canal_shorts },
  ];


  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
      <Navbar onMenuClick={toggleSidebar} />
      <QuickRecommendationsBar />
        <div className="video-sections">
          <VideoSection title="Continuar viendo" videos={videosContinuarViendo} />
          <VideoSection title="Recomendados" videos={videosRecomendados} />
          <VideoSection title="Mi Mix" videos={videosMiMix} />
          <VideoSection title="YouTube Shorts" videos={videosYouTubeShorts} />
        </div>
      </div>
    </div>
  );
};


export default App;
