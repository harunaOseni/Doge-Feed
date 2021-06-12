import React from "react";
import SideBarRow from "../SideBarRow/SideBarRow";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import "./Sidebar.css";
import { useStateValue } from "../../../State Provider/StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SideBarRow
        src="https://avatars.githubusercontent.com/u/61633659?v=4"
        icon=""
        title="Haruna Oseni"
      />
      <SideBarRow Icon={ShowChartIcon} title="DOGE-COIN Stock Prices" />
      <SideBarRow Icon={EmojiFlagsIcon} title="Groups" />
      <SideBarRow Icon={PeopleAltIcon} title="DOGE Buddies" />
      <SideBarRow Icon={MessageOutlinedIcon} title="Forums" />
      <SideBarRow Icon={LocalMallOutlinedIcon} title="Buy Doge" />
      <SideBarRow
        Icon={VideoLibraryOutlinedIcon}
        title="Learn About DOGE-COIN"
      />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
