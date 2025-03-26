import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Shorts from "./Side-items/Shorts";
import Subscriptions from "./Side-items/Subscriptions";
import History from "./Side-items/History";
import Playlists from "./Side-items/Playlists";
import YourVideos from "./Side-items/YourVideos";
import WatchLater from "./Side-items/WatchLater";
import LikedVideos from "./Side-items/LikedVideos";
import ThemeToggle from "./ThemeModal";

const MainRoutes = () => {
  return (
    <div>
    <ThemeToggle/>
    <Routes>
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/history" element={<History />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/your-videos" element={<YourVideos />} />
      <Route path="/watch-later" element={<WatchLater />} />
      <Route path="/liked-videos" element={<LikedVideos />} />
    </Routes>
    </div>
  );
};

export default MainRoutes;
