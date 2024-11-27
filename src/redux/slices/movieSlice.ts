import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "../../services/tmdb";

export const loadMovies = createAsyncThunk(
  "movies/load",
  async (page: number) => {
    return await fetchPopularMovies(page);
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: { data: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(...action.payload.results);
      });
  },
});

export default movieSlice.reducer;
