// Video.js
import React from 'react';

const Video = ({ title, thumbnail, channel, uploadedAt, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="video-link">
      <div className="video">
        <img src={thumbnail} alt={title} />
        <div className="video-info">
          <h3>{title}</h3>
          <p>Channel: {channel}</p>
          <p>Uploaded: {uploadedAt}</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
