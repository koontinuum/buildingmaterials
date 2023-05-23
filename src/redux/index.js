import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './basketSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    // Другие редюсеры вашего приложения, если есть
  },
});

export default store