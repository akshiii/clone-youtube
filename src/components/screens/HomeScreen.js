import React from "react";
import CategoriesBar from "../categoriesBar/CategoriesBar";
import Video from "../video/Video";

const HomeScreen = () => {
  return (
    <div>
      <CategoriesBar />

      {[...Array(15)].map((_, key) => {
        return <Video />;
      })}
    </div>
  );
};

export default HomeScreen;
