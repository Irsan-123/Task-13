// Import configure store: untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// Export Store
export default store;
