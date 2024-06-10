import { createSlice } from "@reduxjs/toolkit";
import "./App.css";


// Create the cart slice
export const cartSlice = createSlice({

  name: 'cart',

  initialState: {
    items: []
  },


  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

// Export the actions and reducer
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
