import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Users/UsersSlice";
import { apiSlice } from "./Api/ApiSlice";

export const store = configureStore({
  reducer: {
    auth: UserReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
