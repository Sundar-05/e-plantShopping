// store.js in B

import { configureStore } from '@reduxjs/toolkit';
import createSliceReducer from './createSlice'; // Assuming the file name is createSlice.js in B

const store = configureStore({
  reducer: {
    cart: createSliceReducer, // Assuming createSlice.js exports the reducer for the cart slice
  },
});

export default store;
