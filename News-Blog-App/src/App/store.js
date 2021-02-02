// The Redux store brings together the state, actions, and reducers that make up the app, and has several responsibilities like holding the current state of the app.

import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../Features/userSlice";

// here we are making the reducer we created as a parameter of configureStore
export default configureStore({
    reducer: {
        user: userReducer
    }
});
