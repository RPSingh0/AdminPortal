import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userName: null,
    userMobile: null,
    userPassword: null,
    isLoggedIn: true
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        loginUser(state, action) {
            state.userName = action.payload.userName;
            state.userMobile = action.payload.userMobile;
            state.userPassword = action.payload.userPassword;
            state.isLoggedIn = true;
        },
        logoutUser(state) {
            state.userName = null;
            state.userMobile = null;
            state.userPassword = null;
            state.isLoggedIn = false;
        }
    }
});

export const isUserLoggedIn = state => state.auth.isLoggedIn;
export const {loginUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;