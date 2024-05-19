import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.image} alt={video.title} className="video-thumbnail" />
      <div className="video-info">
        <div className="channel-avatar-container">
          <img src={video.channelImage} alt={video.channelName} className="channel-avatar" />
        </div>
        <div className="video-details">
          <h3 className="video-title">{video.title}</h3>
          <p className="channel-name">{video.channelName}</p>
          <div className="video-meta">
            <span className="views">{video.views} 150K vistas</span>
            <span className="upload-time">{video.time}</span>
            <span className="video-duration">{video.duration}</span>
          </div>
        </div>
      </div>
      <div className="progress-bar"></div>
    </div>
  );
};

export default VideoCard;
