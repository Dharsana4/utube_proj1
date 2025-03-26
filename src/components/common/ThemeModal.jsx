import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./theme-modal.css";

const ThemeModal = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();

  if (!isOpen) return null;

  const handleThemeChange = () => {
    toggleTheme();
    onClose(); // Close modal after changing theme
  };

  return (
    <div className="theme-modal-overlay" onClick={onClose}>
      <div className="theme-modal-top" onClick={(e) => e.stopPropagation()}>
        <h3>Appearance</h3>
        <button onClick={handleThemeChange} className="change-theme-btn">
          Change to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeModal;
