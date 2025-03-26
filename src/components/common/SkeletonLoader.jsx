import React from "react";
import "./skeleton-loader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-thumbnail"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-channel"></div>
      <div className="skeleton-views"></div>
    </div>
  );
};

export default SkeletonLoader;