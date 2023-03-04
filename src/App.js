import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
