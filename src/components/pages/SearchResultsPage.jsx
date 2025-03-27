import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import SkeletonLoader from "../common/SkeletonLoader";
import videosData from "../../assets/mock-data/videos.json";
import "./search-results.css";
import { useTheme } from "../../contexts/ThemeContext";

const SearchResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const filteredResults = videosData.filter((video) => {
        if (query) {
          const lowerQuery = query.toLowerCase();
          const titleMatch = video.title?.toLowerCase().includes(lowerQuery);
          let categoryMatch = false;
          if (Array.isArray(video.category)) {
            categoryMatch = video.category.some(
              (cat) => cat.toLowerCase() === lowerQuery
            );
          } else {
            categoryMatch = video.category?.toLowerCase() === lowerQuery;
          }
          return titleMatch || categoryMatch;
        }
        return true;
      });

      
      const updatedResults = filteredResults.map((video) => ({
        ...video,
        views:
          parseInt(localStorage.getItem(`views_${video.id}`)) || video.views,
      }));

      setResults(updatedResults);
      setLoading(false);
    }, 1000);
  }, [query]);

  return (
    <div className={`search-results-page`}>
      <div className="results-grid">
        {loading ? (
          Array(6)
            .fill(0)
            .map((_, index) => <SkeletonLoader key={index} />)
        ) : results.length === 0 ? (
          <p className="no-results">No results found for "{query}"</p>
        ) : (
          results.map((video) => (
            <div className="video-item" key={video.id}>
              <Link to={`/video/${video.id}`} className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
              </Link>
              <div className="video-details">
              <p className="channel">{video.title}</p>
                <div className="title-container">
                  
                  {video.titleImage && (
                    <img
                      src={video.titleImage}
                      alt="Title Icon"
                      className="titlee"
                    />
                  )
                  }<h4>{video.channel}</h4>
                </div>

                <p>
                  {video.views} views • {video.postedTime}
                </p>
                <p>{video.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
