import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CommentItem from "../common/CommentItem";
import videosData from "../../assets/mock-data/videos.json"; 
import commentsData from "../../assets/mock-data/comments.json"; 
import "./video-details.css";

const VideoDetailsPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);  // Redirect to new video page
  };
  useEffect(() => {
    // Get the selected video
    const selectedVideo = videosData.find((v) => v.id === parseInt(id));
    setVideo(selectedVideo);
  
    // Get the comments for the selected video
    const videoComments = commentsData.filter((c) => c.videoId === parseInt(id));
    setComments(videoComments);
  
    // Get suggested videos (excluding the current video)
    const suggestions = videosData.filter((v) => v.id !== parseInt(id)).slice(0, 6);
    setSuggestedVideos(suggestions);
  }, [id]);
  
  // Log suggested videos only after state update
  useEffect(() => {
    if (suggestedVideos.length > 0) {
      console.log("Updated Suggested Videos:", suggestedVideos);
    }
  }, [suggestedVideos]);
  
  if (!video) return <div>Loading...</div>;

  return (
    <div className="video-details-container">
      {/* Left Side - Main Video */}
      <div className="main-video-section">
        <div className="video-player">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-info">
          <h1>{video.title}</h1>
          <p>{video.description}</p>
          <div className="video-stats">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.postedTime}</span>
          </div>
        </div>
        <div className="comments-section">
          <h2>Comments</h2>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>

      {/* Right Side - Suggested Videos */}
      <div className="suggested-videos">
        <h2>Suggested Videos</h2>
        

        {suggestedVideos.map((suggestion) => (
          <div key={suggestion.id} 
          className="suggested-video-item"
          onClick={() => handleVideoClick(suggestion.id)} // Handle click
          style={{ cursor: "pointer" }}>
            <img src={suggestion.thumbnail} alt={suggestion.title} className="suggested-video-thumbnail" />
            <div className="suggested-video-info">
              <h3>{suggestion.title}</h3>
              <p>{suggestion.channel}</p>
              <p>{suggestion.views} views • {suggestion.postedTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoDetailsPage;
