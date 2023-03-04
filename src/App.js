import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import HomeScreen from "./components/screens/HomeScreen";

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
      </div>
      <HomeScreen />
    </>
  );
};
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default App;
