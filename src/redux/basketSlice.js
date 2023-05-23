// import { createSlice } from "@reduxjs/toolkit";

// const basketSlice = createSlice({
//   name: basket,
//   initialState: {
//     counter: 0,
//   },
//   reducers: {
//     addProduct(state, action) {
//       state.count = state.count + 1
//     },
//     deleteProduct(state, action) {
//       state.count = state.count - 1
//     }
//   }
// })

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsBasket: []
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.productsBasket = [...state.productsBasket, newItem]
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.productsBasket.findIndex(item => item.id === itemId);

      if (itemIndex !== -1) {
        // Удаляем выбранный элемент из корзины
        state.productsBasket.splice(itemIndex, 1);
      }
    }
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;