import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video, isShorts }) => {
  return (
    <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer" className="video-link">
      <div className={`video-card ${isShorts ? 'youtube-shorts' : ''}`}>
        <img src={video.image} alt={video.title} className={`video-thumbnail ${isShorts ? 'youtube-shorts-image' : ''}`} />
        <div className="duration-overlay">{video.duration}2:35</div>
        <div className="progress-bar"></div>
        <div className="video-info">
          <div className="channel-avatar-container">
            <img src={video.channelImage} alt={video.channelName} className="channel-avatar" />
          </div>
          <div className="video-details">
            <h3 className="video-title">{video.title}</h3>
            <p className="channel-name">{video.channelName}</p>
            <div className="video-meta">
              <span className="views">{video.views}1.0M Views</span>
              <span className="upload-time">{video.time}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
