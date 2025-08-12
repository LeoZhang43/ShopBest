import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // slice name
  initialState: {
    value: 0, // your variable to store
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // update state
    },
    setValue: (state, action) => {
      state.value = action.payload; // set to a specific value
    },
  },
});

export const { increment, setValue } = counterSlice.actions;

export default counterSlice.reducer;