import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CommentItem from "../common/CommentItem";
import videosData from "../../assets/mock-data/videos.json";
import commentsData from "../../assets/mock-data/comments.json";
import "./video-details.css";

const VideoDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState(0);

  useEffect(() => {
    const selectedVideo = videosData.find((v) => v.id === parseInt(id));
    if (selectedVideo) {
      setVideo(selectedVideo);

      setLikes(
        parseInt(localStorage.getItem(`likes_${id}`)) || selectedVideo.likes
      );
      setDislikes(
        parseInt(localStorage.getItem(`dislikes_${id}`)) ||
          selectedVideo.dislikes
      );
      setIsSubscribed(localStorage.getItem(`subscribed_${id}`) === "true");
      setSubscribers(
        parseInt(localStorage.getItem(`subscribers_${id}`)) ||
          parseInt(selectedVideo.Subscribers)
      );

      const currentViews =
        parseInt(localStorage.getItem(`views_${id}`)) || selectedVideo.views;
      const updatedViews = currentViews + 1;
      localStorage.setItem(`views_${id}`, updatedViews);
      setVideo((prev) => ({ ...prev, views: updatedViews }));
    }

    setComments(commentsData.filter((c) => c.videoId === parseInt(id)));
    setSuggestedVideos(
      videosData.filter((v) => v.id !== parseInt(id)).slice(0, 6)
    );
  }, [id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes_${id}`, newLikes);
  };

  const handleDislike = () => {
    const newDislikes = dislikes + 1;
    setDislikes(newDislikes);
    localStorage.setItem(`dislikes_${id}`, newDislikes);
  };

  const handleSubscribe = () => {
    const newSubscriptionStatus = !isSubscribed;
    setIsSubscribed(newSubscriptionStatus);
    localStorage.setItem(`subscribed_${id}`, newSubscriptionStatus);

    const newSubscribers = newSubscriptionStatus
      ? subscribers + 1
      : subscribers - 1;
    setSubscribers(newSubscribers);
    localStorage.setItem(`subscribers_${id}`, newSubscribers);
  };

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  if (!video) return <div>Loading...</div>;

  return (
    <div className="video-details-container">
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
            <span> - </span>
            <span>{video.postedTime}</span>
          </div>

          <div className="channel-info">
            {video.titleImage && (
              <img
                src={video.titleImage}
                alt="Title Icon"
                className="title-icon"
              />
            )}
            <h3>{video.channel}</h3>
            <p>{subscribers.toLocaleString()} subscribers</p>
          </div>

 
          <div className="video-actions">
            <button onClick={handleLike}>👍 {likes}</button>
            <button onClick={handleDislike}>👎 {dislikes}</button>
            <button
              onClick={handleSubscribe}
              className={isSubscribed ? "subscribed" : ""}
            >
              {isSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </div>
        </div>

       
        <div className="comments-section">
          <h2>Comments</h2>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>

      <div className="suggested-videos">
        <h2>Suggested Videos</h2>
        {suggestedVideos.map((suggestion) => (
          <div
            key={suggestion.id}
            className="suggested-video-item"
            onClick={() => handleVideoClick(suggestion.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={suggestion.thumbnail}
              alt={suggestion.title}
              className="suggested-video-thumbnail"
            />
            <div className="suggested-video-info">
              <h3>{suggestion.title}</h3>
              {suggestion.titleImage && (
                <img
                  src={suggestion.titleImage}
                  alt="Title Icon"
                  className="title-icon"
                />
              )}
              <p>{suggestion.channel}</p>
              <p>
                {suggestion.views} views • {suggestion.postedTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoDetailsPage;
