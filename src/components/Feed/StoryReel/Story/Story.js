import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";

function Story({ profilePicture, storyImage, userName }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${storyImage})` }}>
      <Avatar src={profilePicture} className="story-avatar" />
      <h4>{userName}</h4>
    </div>
  );
}

export default Story;
