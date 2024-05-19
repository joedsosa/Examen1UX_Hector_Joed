import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const { image, title, time, channelName, channelImage } = video;

  return (
    <div className="video-card">
      <img src={image} alt={`Thumbnail of ${title}`} className="video-thumbnail" />
      <div className="video-info">
        <img src={channelImage} alt={`Channel: ${channelName}`} className="channel-image" />
        <div className="video-details">
          <h4 className="video-title">{title}</h4>
          <p className="channel-name">{channelName}</p>
          <p className="video-time">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
