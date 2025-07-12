import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../utility";

const initialState: AuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loggedIn: (state, action) => {
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
