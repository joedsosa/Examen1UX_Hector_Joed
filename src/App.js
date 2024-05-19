import React from 'react';
import Navbar from './components/molecules/Navbar/Navbar';
import Sidebar from './components/molecules/Sidebar/Sidebar';
import VideoSection from './components/organisms/VideoSection';
import './App.css';

import luismi1 from './assets/luismi1.avif';
import luismi2 from './assets/luismi2.jpg';
import luismi3 from './assets/luismi3.jpeg';
import luismi4 from './assets/luismi4.webp';
import canalLuismi from './assets/canal_luismi.avif';

const App = () => {
  const videos = [
    { image: luismi1, title: 'Video 1', time: 'Hace 1 hora', channelName: 'Canal 1', channelImage: canalLuismi },
    { image: luismi2, title: 'Video 2', time: 'Hace 2 horas', channelName: 'Canal 2', channelImage: canalLuismi },
    { image: luismi3, title: 'Video 3', time: 'Hace 3 horas', channelName: 'Canal 3', channelImage: canalLuismi },
    { image: luismi4, title: 'Video 4', time: 'Hace 4 horas', channelName: 'Canal 4', channelImage: canalLuismi },
  ];


  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="video-sections">
          <VideoSection title="Continuar viendo" videos={videos} />
          <VideoSection title="Recomendados" videos={videos} />
          <VideoSection title="Mi Mix" videos={videos} />
          <VideoSection title="YouTube Shorts" videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default App;
