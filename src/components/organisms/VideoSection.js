import React from 'react';
import VideoCard from '../molecules/VideoCard/VideoCard';
import './VideoSection.css';

const VideoSection = ({ title, videos }) => {
  return (
    <div className="video-section">
      <h3 className="section-title">{title}</h3>
      <div className="video-list">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
