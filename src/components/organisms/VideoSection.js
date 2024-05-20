import React from 'react';
import './VideoSection.css'; 
import VideoCard from '../molecules/VideoCard/VideoCard';

const VideoSection = ({ title, videos }) => {
  return (
    <div className={`video-section ${title === "YouTube Shorts" ? 'youtube-shorts-section' : ''}`}>
      <h2 className="section-title">{title}</h2>
      <div className="video-list">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} isShorts={video.isShorts} />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
