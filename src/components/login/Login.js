import React from "react";
import GoogleButton from "react-google-button";
import "./_login.scss";

const Login = () => {
  return (
    <div className="loginPage">
      <GoogleButton />
      {/* <div className="googleLogin" onClick={() => {}}>
        <img src="google.png" alt="Google" className="googleIcon" />
        <span className="loginText">Login with google</span>
      </div> */}
    </div>
  );
};

export default Login;
