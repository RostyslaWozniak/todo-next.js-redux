import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../state/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RooteState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
