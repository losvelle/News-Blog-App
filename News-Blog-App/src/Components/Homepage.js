import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../Features/userSlice";

import "../styling/home.css";

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login__message">
          <h2>📰</h2>
          <h1>Where the Elite get their News!</h1>
          <p>
            We provide high quality online resources for reading blogs and News Articles. Just sign
            up and start reading some quality content today.
          </p>
{/* importing the google login authentication */}
{/* Render a custom button from google as props line 39 disables the button when the page is first rendered */}
          <GoogleLogin
            clientId="57529085775-fk8rn8hren1q8o5ja2idq4m7hug5aong.apps.googleusercontent.com"

            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
      {/* After google has allowed a user to log in successfully or if we failed to login. We run a function called login which runs the console.log function that shows the response from google in line 16. Then it changes isSignedIn to true and stores this as a cookie in th local storage */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
