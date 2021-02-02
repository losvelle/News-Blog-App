// This files intention is to hold all my users information and it would only display the data that i want once i have a user.
// Create Slice is a function that accepts an initial state, and objects full of reducer functions

import {createSlice} from "@reduxjs/toolkit";
// the createSlice will create a slice object. We give the object a name of user and the initial state will be set to false, because we dont have any users logged in when the app runs we we leave the use data as NUll. The searchInput we set it to tech so that we can receive those blogs/news from the Api. We can set this to any topic even empty string.
const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: "apple",
        blogData: null
    },
    // So we are using 4 reducers one for each key in our object
    // This reducer takes the initial state in line 7 and changes the state of the targeted key in the object.
    // payload is what holds the actual userdata in an action object.
    // Actions only tell  you what to do, but they don't tell how to do, so Reducers are the pure functions that take the current state and Action and return the new state.
    reducers: {

        // This changes the state of isSignedIn
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        // this changes the state of userData
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        // this changes the state of the searchInput
        setInput: (state, action) => {
            state.searchInput = action.payload;
        },
        // this changes the state of the blogData
        setBlogData: (state, action) => {
            state.blogData = action.payload;
        }
    }
});

// we need to export all of our reducers so that we can use them in the application
// Keep in mind Actions are nothing but the carriers of data from your application to the store. The Reducers in simple terms manage the way data is kept in store provided by the Actions
export const {setSignedIn, setUserData, setInput, setBlogData} = userSlice.actions;

// here we export every state that is inside our object we need to be sure we use the 'state.user.' so we can specify the state we want to return.
export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

// export the entire reducer
export default userSlice.reducer;
