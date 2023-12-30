import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const token = localStorage.getItem("auth");
    return token ? JSON.parse(token) : undefined;
  } catch (err) {
    console.error("Error loading authentication state from localStorage", err);
    return;
  }
};

const saveState = (state) => {
  try {
    const token = JSON.stringify(state);
    localStorage.setItem("auth", token);
  } catch (err) {
    console.error("Error saving authentication state to localStorage", err);
  }
};

const initialState = loadState() || {
  user: null,
  token: null,
  isAuthenticated: false,
};

const UserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      saveState(state);
    },
    setToken: (state, action) => {
      state.token = action.payload;
      saveState(state);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      saveState(state);
    },
  },
});

export const { setUser, setToken, logout } = UserSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default UserSlice.reducer;
