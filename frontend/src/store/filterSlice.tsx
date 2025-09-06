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
    removeCheckedByIndex(state, action: PayloadAction<number>) {
      state.checked_elements.splice(action.payload, 1);
    },
    resetFilter() {
      return initialState;
    }
  },
});

export const { setFilter, addChecked, resetFilter, removeCheckedByIndex } = filterSlice.actions;
export default filterSlice.reducer;