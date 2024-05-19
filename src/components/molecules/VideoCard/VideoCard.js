import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.image} alt={video.title} />
      <div className="video-info">
        <img src={video.channelImage} alt={video.channelName} className="channel-image" />
        <div>
          <h4>{video.title}</h4>
          <p>{video.time}</p>
          <p>{video.channelName}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
