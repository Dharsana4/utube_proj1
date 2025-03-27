import React from "react";
import { useNavigate } from "react-router-dom";
import "./video-card.css";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${video.id}`);
  };

  return (
    <div className="video-card" onClick={handleClick}>
      <img src={video.thumbnail} alt={video.title} className="thumbnail" />
      <div className="video-details">
        <div className="title-wrapper">
          {video.titleImage && (
            <img 
              src={video.titleImage} 
              alt="Title Icon" 
              className="title-icon"
            />
          )}
          <h3 className="title">{video.title}</h3>
        </div>
        <p className="channel">{video.channel}</p>
        <p className="views">
          {video.views} views • {video.postedTime}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
