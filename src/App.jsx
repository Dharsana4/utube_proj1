import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { VideoProvider } from "./contexts/VideoContext";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./components/pages/HomePage";
import VideoDetailsPage from "./components/pages/VideoDetailsPage";
import SearchResultsPage from "./components/pages/SearchResultsPage";
import "./App.css"


function App() {
  return (
    <ThemeProvider>
      
      <VideoProvider>
        <Router>
        <div className="app-container">
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/video/:id" element={<VideoDetailsPage />} />
              
              <Route path="/search" element={<SearchResultsPage />} />
            </Routes>
          </MainLayout>
          </div>
        </Router>
      </VideoProvider>
      
    </ThemeProvider>
  );
}

export default App;