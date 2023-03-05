import React, { useEffect } from "react";
import "./_header.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("Header.js page: ", user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user]);

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
            onClick={handleSignOut}
            sx={{
              color: "white",
              fontSize: 40,
              marginLeft: "15px",
              marginRight: "15px",
              cursor: "pointer",
            }}
          />
        </div>
      </>
    </div>
  );
};

export default Header;
