import { configureStore } from '@reduxjs/toolkit';
import createReducer from './CreateSlice';

const store = configureStore({
  reducer: {
    cart: createReducer,
  },
});

export default store;
