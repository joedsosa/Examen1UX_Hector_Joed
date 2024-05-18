import React from 'react';
import VideoCard from './VideoCard';
import '../styles/VideoSection.css';

const VideoSection = ({ title, videos }) => {
  return (
    <div className="video-section">
      <h3>{title}</h3>
      <div className="video-list">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
