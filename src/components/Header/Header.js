import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StoreIcon from "@material-ui/icons/Store";
import PeopleIcon from "@material-ui/icons/People";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsPausedIcon from "@material-ui/icons/NotificationsPaused";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStateValue } from "../../State Provider/StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="Header">
      {/* Header-Left */}
      <div className="Header-left">
        <img
          src="https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=010"
          alt="The DogeCoin Logo"
        />
        <div className="Header-input">
          <SearchIcon />
          <input type="text" placeholder="Search Dogefeed" />
        </div>
      </div>

      {/* Header Center */}
      <div className="Header-center">
        <div className="Header-option Header-option-active">
          <HomeIcon />
        </div>
        <div className="Header-option">
          <MonetizationOnIcon />
        </div>
        <div className="Header-option">
          <VideoLibraryIcon />
        </div>
        <div className="Header-option">
          <StoreIcon />
        </div>
        <div className="Header-option">
          <PeopleIcon />
        </div>
      </div>

      {/* Header-Right */}
      <div className="Header-right">
        <div className="Header-info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton className="Header-rightIcon-button">
          <PersonAddIcon className="Header-rightIcon" />
        </IconButton>
        <IconButton className="Header-rightIcon-button">
          <ChatIcon className="Header-rightIcon" />
        </IconButton>
        <IconButton className="Header-rightIcon-button">
          <NotificationsPausedIcon className="Header-rightIcon" />
        </IconButton>
        <IconButton className="Header-rightIcon-button">
          <MoreVertIcon className="Header-rightIcon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
