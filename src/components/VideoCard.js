import React from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ image, title, time, channelName, channelImage }) => {
  return (
    <div className="video-card">
      <img src={image} alt={title} />
      <div className="video-info">
        <img src={channelImage} alt={channelName} className="channel-image" />
        <div>
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
