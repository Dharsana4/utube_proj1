import React from "react";
import "./comment-item.css";

const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <img
        src="/images/thumbnail1.jpg" 
        alt="User"
        className="user-avatar"
      />
      <div className="comment-content">
        <p className="user-name">{comment.user}</p>
        <p className="comment-text">{comment.comment}</p>
      </div>
    </div>
  );
};

export default CommentItem;