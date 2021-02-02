import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../Features/userSlice";

import "../styling/navbar.css";

const Navbar = () => {
// user type in input. This hook is passing '' so it should show the placeholder value on teh front end.
  const [inputValue, setInputValue] = useState("");
  const isSignedIn = useSelector(selectSignedIn);
// this will target the userData in the Homepage
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };
// event listener for when the user clicks on the search button.
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

// this creates the navbar and gives it an <h1> to pass as a logo. Then checks to see if user is signedin and runs the search bar.
  return (
    <div className="navbar">
      <h1 className="navbar__header">CarlosReads 💬</h1>
      {isSignedIn && (
        <div className="blog__search">
          <input
            className="search"
            placeholder="Search CarlosReads"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      )}
{/* if the user is signedin we want to show the Avatar of the user, that we get from material-ui/core, as well as the logout button.  */}
      {isSignedIn ? (
        <div className="navbar__user__data">
{/* Checks to see if the user has an image that can be used if not it will use the name. When the user is signedIn it will place the name as an h1*/}
          <Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          />
      {/* this will return the firstname of the user */}
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            clientId="57529085775-fk8rn8hren1q8o5ja2idq4m7hug5aong.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout__button"
              >
                Logout 😦
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">User not available 😞</h1>
      )}
    </div>
  );
};

export default Navbar;
