import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import ThemeModal from "./ThemeModal";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

  };
  const location = useLocation(); 
  const hideCategories= location.pathname.startsWith("/video/") || (location.pathname !== "/");
  return (
    <>
      <header className="header">
        {/* Left Section: Logo with Superscript Country Code */}
        <div className="header-left">
          <img src="images/side_close.jpg" alt="Menu" className="icon1" />
          <div className="logo-container">
            <Link to="/" className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="YouTube Logo"
                className="youtube-logo"
              />
            </Link>
            <span className="country-code">IN</span> {/* Superscript Style */}
          </div>
        </div>
        {/* Center Section: Search Bar */}
        <div className="header-center">
          <SearchBar />
        </div>
        {/* Right Section: Create, Notifications, Profile */}
        <div className="header-right">
          <img src="images/create.jpg" alt="Create" className="icon2" />
          <div className="notification">
            <img
              src="images/noti_icon.jpg"
              alt="Notifications"
              className="icon"
            />
            <span className="notification-count">9+</span>
          </div>
          <img
            src="images/acc_icon.jpg"
            alt="Profile"
            onClick={handleImageClick}
            className="profile-icon"
          />
        </div>
        <ThemeModal isOpen={isModalOpen} onClose={closeModal} />
        
        
        
      </header>
      {!hideCategories && <Categories />}
    </>
  );
};

export default Header;
