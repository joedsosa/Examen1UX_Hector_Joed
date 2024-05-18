import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoSection from './components/VideoSection';
import './styles/App.css';

const App = () => {
  const videos = [
    { image: 'video1.jpg', title: 'Video 1', time: 'Hace 1 hora', channelName: 'Canal 1', channelImage: 'channel1.jpg' },
    { image: 'video2.jpg', title: 'Video 2', time: 'Hace 2 horas', channelName: 'Canal 2', channelImage: 'channel2.jpg' },
    { image: 'video3.jpg', title: 'Video 3', time: 'Hace 3 horas', channelName: 'Canal 3', channelImage: 'channel3.jpg' },
    { image: 'video4.jpg', title: 'Video 4', time: 'Hace 4 horas', channelName: 'Canal 4', channelImage: 'channel4.jpg' },
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
