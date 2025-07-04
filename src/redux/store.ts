import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// Tipos para TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
