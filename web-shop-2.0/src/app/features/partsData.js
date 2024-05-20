// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk for the API call
export const fetchPartsData = createAsyncThunk(
  "data/fetchPartsData",
  async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "partsData",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPartsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPartsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
