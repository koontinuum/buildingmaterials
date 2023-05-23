import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './basketSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store