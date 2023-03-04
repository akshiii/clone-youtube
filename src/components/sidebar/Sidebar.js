import React from "react";
import SidebarCategory from "./SidebarCategory";
import "./_sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {[...Array(6)].map((_, key) => {
        return <SidebarCategory />;
      })}
    </div>
  );
};

export default Sidebar;
