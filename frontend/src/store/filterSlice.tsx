import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterStatus, FilterElements, CheckedElements } from "../type";


const initialState: FilterStatus = {
  filter_elements: [],
  checked_elements: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterElements[]>) {
      state.filter_elements = action.payload;
    },
    addChecked(state, action: PayloadAction<CheckedElements>) {
      state.checked_elements.push(action.payload);
    },
    removeLastCheckedElement(state){
      state.checked_elements = state.checked_elements.slice(0, state.checked_elements.length - 1);
    },
    resetFilter() {
      return initialState;
    }
  },
});

export const { setFilter, addChecked, resetFilter, removeLastCheckedElement } = filterSlice.actions;
export default filterSlice.reducer;