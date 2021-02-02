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
    // select the signedIn reducer we created and imported from userSlice
  const isSignedIn = useSelector(selectSignedIn);
// the user dispatch is receiving the payload or the data from the navbar which helps it change the state of the 'setSignedIn' && 'setUserData'
  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    // this sets the payload to profileObj this is googles naming convention
    dispatch(setUserData(response.profileObj));
  };
// If the user is signed in the inline display will ne none or else it would leave it blank. Then it will check to see if the user is NOT signed in hes not it will show the following login screen with the ability to sign in with google OAuth.
  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login__message">
          <h2>📰</h2>
          <h1>CarlosReads The News Here!</h1>
          <p>
            We provide high quality online resources for reading blogs and News Articles. Just sign
            up and start reading some quality content today.
          </p>
{/* importing the google login authentication */}
{/* Render a custom button from google as props line 39 disables the button when the page is first rendered */}
          <GoogleLogin
            clientId="1016698445943-3qi168k97o9vudt73k095ako9uagql6s.apps.googleusercontent.com"
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
      {/* After google has allowed a user to log in successfully or if we failed to login. We run a function called login which runs the console.log function that shows the response from google in line 17. Then it changes isSignedIn to true and stores this as a cookie in the local storage */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
