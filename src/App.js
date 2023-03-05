import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/login/Login";
import HomeScreen from "./components/screens/HomeScreen";
import { AuthContextProvider } from "./context/AuthContext";
import { UserAuth } from "./context/AuthContext";
import Protected from "./components/login/Protected";

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
    <AuthContextProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <HomePage />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
