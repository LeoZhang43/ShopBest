import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer
  },
});