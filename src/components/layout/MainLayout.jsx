import React from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useTheme } from "../../contexts/ThemeContext";
import "./main-layout.css";
import MainRoutes from "../common/MainRoutes";


const MainLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`main-layout ${theme}`}>
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">  <>
    {children}
    <MainRoutes />
  </></main>
      </div>
    </div>
  );
};

export default MainLayout;