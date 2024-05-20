// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk for the API call
export const fetchCarData = createAsyncThunk("data/fetchCarData", async () => {
  const response = await axios.get("http://localhost:3000/cars");
  return response.data;
});

const carSlice = createSlice({
  name: "carData",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default carSlice.reducer;
