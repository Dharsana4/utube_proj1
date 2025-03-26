import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";

const categories = [
  "All", "Music", "Tamil Cinema", "Web Development", "Virat", "Data Science",
  "Data Structures", "Study Skills", "Anirudh Ravichandher",
  "Indian pop music", "Gaming", "Thoughts", "Skin Care", "AI"
];

const Categories = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      navigate("/");  // Go to homepage if "All" is clicked
    } else {
      navigate(`/search?q=${category}`);
    }
  };

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`category-item ${activeCategory === category ? "active" : ""}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </div>
      ))}
      <div className="scroll-arrow">{">"}</div>
    </div>
  );
};

export default Categories;
