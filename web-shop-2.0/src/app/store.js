import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice, { cartMiddleware } from "./features/cart/cartSlice";
import carReducer from "./features/carData";
import dataReducer from "./features/partsData";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    partsData: dataReducer,
    carData: carReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
