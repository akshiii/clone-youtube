import React from "react";
import CategoriesBar from "../categoriesBar/CategoriesBar";
import "./_header.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <YouTubeIcon sx={{ color: "red", fontSize: 40 }} />
        </div>
      </div>
      <CategoriesBar />
    </div>
  );
};

export default Header;
