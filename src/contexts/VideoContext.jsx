import React, { createContext, useState, useEffect } from "react";
import videosData from "../assets/mock-data/videos.json"; // Import JSON directly

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false); // No loading state needed

  useEffect(() => {
    
    setVideos(videosData);
  }, []);

  return (
    <VideoContext.Provider value={{ videos, loading }}>
      {children}
    </VideoContext.Provider>
  );
};