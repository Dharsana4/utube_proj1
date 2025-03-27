import React from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useTheme } from "../../contexts/ThemeContext";
import "./main-layout.css";
import MainRoutes from "../common/MainRoutes";
import { useLocation } from "react-router-dom";
import Categories from "../common/Categories";

const MainLayout = ({ children }) => {
  const { theme } = useTheme();
  const location = useLocation();

  
  const isVideoPage = location.pathname.startsWith("/video/");
  return (
    <div className={`main-layout ${theme}`}>
      <Header />
      {!isVideoPage && <Categories />}
      <div className="content-wrapper">
      {!isVideoPage && <Sidebar />} 
        <main className="main-content">  <>
    {children}
    <MainRoutes />
  </></main>
      </div>
    </div>
  );
};

export default MainLayout;