import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search-bar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <img src="images/search_icon.jpg" alt="Search" className="search-icon" />
      </button>
      <img src="images/sound_li.jpg" alt="Mic" className="mic-icon" />
    </form>
  );
};

export default SearchBar;
