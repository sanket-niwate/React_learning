import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Import the reducer from the todoSlice

// Configure and export the Redux store
export const store = configureStore({
  reducer: {
    todo: todoReducer, // Assign the todo reducer to a 'todo' key in the state
  },
});
