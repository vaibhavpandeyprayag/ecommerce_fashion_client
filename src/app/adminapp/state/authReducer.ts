import { createSlice } from "@reduxjs/toolkit";
import { encrypt, type AuthState } from "../utility";

const initialState: AuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loggedIn: (state, action) => {
      localStorage.setItem(
        "fashion-user",
        encrypt(JSON.stringify(action.payload.user))
      );
      localStorage.setItem("fashion-token", encrypt(action.payload.token));
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loggedOut: state => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
