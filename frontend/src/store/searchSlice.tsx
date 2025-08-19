import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchParameters, ShoppingResults } from "../type";

interface SearchState {
  products: ShoppingResults[];
  search_parameters: SearchParameters;
  previous_search_status: SearchParameters[];
}

const initialState: SearchState = {
  products: [],
  search_parameters: {
    device: "",
    engine: "",
    gl: "",
    google_domain: "",
    hl: "",
    q: "",
    shoprs: ""
  },
  previous_search_status: []
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ShoppingResults[]>) {
      state.products = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.search_parameters.q = action.payload;
    },
    setSearchParameters(state, action: PayloadAction<SearchParameters>) {
      state.previous_search_status.push(state.search_parameters);
      state.search_parameters = action.payload;
    },
    goBackToPreviousStatus(state){
      state.previous_search_status = state.previous_search_status.slice(0, state.previous_search_status.length - 1);
      state.search_parameters = state.previous_search_status[state.previous_search_status.length - 1];
    },
    resetSearchState() {
      return initialState;
    }
  },
});

export const { setProducts, setQuery, setSearchParameters, goBackToPreviousStatus, resetSearchState } = searchSlice.actions;
export default searchSlice.reducer;