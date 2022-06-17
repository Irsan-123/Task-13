// import createSlice: untuk membuat slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";
const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {

    addMovie(state, action) {

      state.movies.push(action.payload);
    },
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

const { addMovie, updateMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

// Export reducers dan actions
export default moviesReducer;
export { addMovie, updateMovies };
