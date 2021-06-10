import React from "react";
import "./SideBarRow.css";
import Avatar from "@material-ui/core/Avatar";

function SideBarRow({ title, src, Icon }) {
  return (
    <div className="sidebar-row">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
