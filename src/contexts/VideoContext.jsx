import React, { createContext, useState, useEffect } from "react";
import videosData from "../assets/mock-data/videos.json"; 

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    
    setVideos(videosData);
  }, []);

  return (
    <VideoContext.Provider value={{ videos, loading }}>
      {children}
    </VideoContext.Provider>
  );
};