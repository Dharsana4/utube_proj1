import React, { useEffect, useState } from "react";
import { fetchVideos } from "../../utils/api";
import VideoCard from "../common/VideoCard";
import SkeletonLoader from "../common/SkeletonLoader";
import "./home.css";
import { useTheme } from "../../hooks/useTheme";

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos()
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-page">
      
      <div className="video-grid">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))
          : videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
      </div>
    </div>
  );
};

export default HomePage;