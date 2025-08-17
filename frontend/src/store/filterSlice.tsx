import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterStatus, FilterElements, CheckedElements } from "../type";


const initialState: FilterStatus = {
  filter_elements: [],
  checked_elements: [
    {text: "Near by"},
    {text: "On Sale"},
  ],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterElements[]>) {
      state.filter_elements = action.payload;
    },
    setChecked(state, action: PayloadAction<CheckedElements[]>) {
      state.checked_elements = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;