import React from "react";
import "./_header.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const Header = () => {
  return (
    <div className="header">
      <>
        <div className="leftIcon">
          <MenuIcon sx={{ color: "white", fontSize: 40, marginLeft: "15px" }} />
          <YouTubeIcon
            sx={{ color: "red", fontSize: 40, marginLeft: "15px" }}
          />
        </div>
        <div className="rightIcons">
          <VideoCallIcon
            sx={{
              color: "white",
              fontSize: 40,
              marginLeft: "15px",
            }}
          />
          <NotificationsIcon
            sx={{ color: "white", fontSize: 40, marginLeft: "15px" }}
          />
          <CircleOutlinedIcon
            sx={{
              color: "white",
              fontSize: 40,
              marginLeft: "15px",
              marginRight: "15px",
            }}
          />
        </div>
      </>
    </div>
  );
};

export default Header;
