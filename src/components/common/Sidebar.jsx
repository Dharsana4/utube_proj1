import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

// Menu items data
const menuItems = [
  { icon: "images/home_icon.jpg", label: "Home", link: "/" },
  { icon: "images/shorts_icon.jpg", label: "Shorts", link: "/shorts" },
  { icon: "images/subs_icon.jpg", label: "Subscriptions", link: "/subscriptions" },
];

const personalItems = [
  { icon: "images/history icon.jpg", label: "History", link: "/history" },
  { icon: "images/playlist_icon.jpg", label: "Playlists", link: "/playlists" },
  { icon: "images/your_videos.jpg", label: "Your videos", link: "/your-videos" },
  { icon: "images/watch_later.jpg", label: "Watch later", link: "/watch-later" },
  { icon: "images/liked_videos.jpg", label: "Liked videos", link: "/liked-videos" },
];

const exploreItems = [
  { icon: "images/trendiing.jpg", label: "Trending", link: "/trending" },
  { icon: "images/shopp.jpg", label: "Shopping", link: "/shopping" },
  { icon: "images/music1.jpg", label: "Music", link: "/music" },
  { icon: "images/movie.jpg", label: "Movies", link: "/movies" },
  { icon: "images/live.jpg", label: "Live", link: "/live" },
  { icon: "images/game.jpg", label: "Gaming", link: "/gaming" },
  { icon: "images/news.jpg", label: "News", link: "/news" },
  { icon: "images/sports.jpg", label: "Sports", link: "/sports" },
  { icon: "images/courses.jpg", label: "Courses", link: "/courses" },
  { icon: "images/fashion.jpg", label: "Fashion & Beauty", link: "/fashion" },
  { icon: "images/podcast.jpg", label: "Podcast", link: "/podcast" },
];

const moreItems = [
  { icon: "images/premium.jpg", label: "YouTube Premium", link: "/premium" },
  { icon: "images/ymusic.jpg", label: "YouTube Music", link: "/music-premium" },
  { icon: "images/ukids.jpg", label: "YouTube Kids", link: "/kids" },
];

const more1Items = [
  { icon: "images/setting.jpg", label: "Settings", link: "/settings" },
  {
    icon: "images/reporthist.jpg",
    label: "Report History",
    link: "/report-history",
  },
  { icon: "images/help.jpg", label: "Help", link: "/help" },
  { icon: "images/feedback.jpg", label: "Send feedback", link: "/feedback" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  const handleItemClick = (label, link) => {
    setActiveItem(label);
    // Add console log for debugging
    console.log(`Navigating to: ${link}`);
    navigate(link);
    if (label === "Home") {
      // Use navigate for Home item only
      navigate("/");
    } else {
      navigate(path); // For other items, use the path from routes
    }
  };

  const renderItems = (items) =>
    items.map((item, index) => (
      <li
        key={index}
        className={activeItem === item.label ? "active" : ""}
        onClick={() => handleItemClick(item.label, item.link)}
      >
        <img src={item.icon} alt={`${item.label} Icon`} className="icon" />
        <span>{item.label}</span>
      </li>
    ));

  return (
    <aside className="sidebar">
      <ul>
        {renderItems(menuItems)}
        <hr />
        <h4>You &nbsp;&nbsp;&gt;&nbsp;&nbsp; </h4>
        {renderItems(personalItems)}
        <hr />
        <h4>Explore</h4>
        {renderItems(exploreItems)}
        <hr />
        <h4>More from YouTube</h4>
        {renderItems(moreItems)}
        <hr />
        {renderItems(more1Items)}
      </ul>
      <footer>
        <h6>
          About Press Copyright Contact us Creators Advertise Developers Terms
          Privacy Policy & Safety How YouTube works Test new features
        </h6>
      </footer>
    </aside>
  );
};

export default Sidebar;
