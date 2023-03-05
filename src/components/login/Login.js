import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import "./_login.scss";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="loginPage">
      <GoogleButton onClick={handleGoogleSignIn} />
      {/* <div className="googleLogin" onClick={() => {}}>
        <img src="google.png" alt="Google" className="googleIcon" />
        <span className="loginText">Login with google</span>
      </div> */}
    </div>
  );
};

export default Login;
