import React from "react";
import Avatar from "@material-ui/core/Avatar";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideocamIcon from "@material-ui/icons/Videocam";
import "./MessageSender.css";
import { useStateValue } from "../../../State Provider/StateProvider";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="messageSender">
      <div className="messageSender-top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            placeholder={`What's up with DOGE, ${user.displayName}?`}
            className="messageSender-input"
          />
          <input type="text" placeholder="image URL (optional)" />
          <button className="messageSender-button">Submit</button>
        </form>
      </div>
      <div className="messageSender-bottom">
        <div className="messageSender-option">
          <WallpaperIcon />
          <h4>Meme</h4>
        </div>
        <div className="messageSender-option">
          <PhotoLibraryIcon />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender-option">
          <VideocamIcon />
          <h4>Live Video</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
