import { configureStore, type Store } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

export const store: Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// export type StoreType = typeof store;
