import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoSection from './components/VideoSection';
import './HomePageTemplate.css';

const HomePageTemplate = ({ videos }) => {
  return (
    <div className="homepage-template">
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

export default HomePageTemplate;
