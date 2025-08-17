import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchParameters, ShoppingResults } from "../type";

interface SearchState {
  products: ShoppingResults[];
  search_parameters: SearchParameters;
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
    shoprs: "",
  },
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
      state.search_parameters = action.payload;
    }
  },
});

export const { setProducts, setQuery, setSearchParameters } = searchSlice.actions;
export default searchSlice.reducer;