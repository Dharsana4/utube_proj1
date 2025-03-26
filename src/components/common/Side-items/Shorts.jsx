import React from "react";
import { useNavigate } from "react-router-dom";
import shortsData from "../../../assets/mock-data/shorts.json";
import "./shorts.css";

const Shorts = () => {
  const navigate = useNavigate();

  const handleVideoClick = (short) => {
    navigate(`/search?q=${short.hashtag}`);
  };

  return (
    <div className="shorts-container">
      {shortsData.map((short) => (
        <div
          key={short.id}
          className="short-card"
          onClick={() => handleVideoClick(short)}
        >
          <video className="short-video" controls poster={short.thumbnail}>
            <source src={short.videoSrc} type="video/mp4" />
          </video>
          <div className="short-details">
            <img src={short.profilePic} alt="Profile" className="profile-pic" />
            <div className="short-info">
              <h4>{short.username}</h4>
              <p>Subscribe</p>
            </div>
          </div>
          <p className="caption">{short.caption}</p>
          <p className="song">{short.song}</p>
          <div className="short-actions">
            <div>👍 {short.likes}</div>
            <div>💬 {short.comments}</div>
            <div>🔗 {short.shares}</div>
          </div>
          <p className="hashtag">{short.hashtag}</p>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
