import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentItem from "../common/CommentItem";
import videosData from "../../assets/mock-data/videos.json"; 
import commentsData from "../../assets/mock-data/comments.json"; 
import "./video-details.css";
import { useTheme } from "../../hooks/useTheme";
const VideoDetailsPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Find the selected video
    const selectedVideo = videosData.find((v) => v.id === parseInt(id));
    setVideo(selectedVideo);

    // Filter comments for the selected video
    const videoComments = commentsData.filter((c) => c.videoId === parseInt(id));
    setComments(videoComments);
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="video-details-page">
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
  );
};

export default VideoDetailsPage;