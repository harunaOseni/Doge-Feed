import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Post.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";

function Post({ profilePicture, message, timestamp, username, image }) {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePicture} />
        <div className="user-info">
          <h4>{username}</h4>
          <p>{new Date(timestamp?.toDate()).toDateString()}</p>
        </div>
      </div>
      <div className="post-message">
        <p>{message}</p>
      </div>
      <div className="post-image">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="post-bottom">
        <div className="post-option">
          <FavoriteBorderIcon />
          <h4>Like</h4>
        </div>
        <div className="post-option">
          <CommentIcon />
          <h4>Comment</h4>
        </div>
        <div className="post-option">
          <ShareIcon />
          <h4>Share</h4>
        </div>
      </div>
    </div>
  );
}

export default Post;
