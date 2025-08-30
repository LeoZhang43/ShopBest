import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchParameters, ShoppingResults } from "../type";

interface SearchState {
  products: ShoppingResults[];
  local_query: string;
  search_parameters: SearchParameters;
  previous_search_status: SearchParameters[];
  search_parameters_change_locally: boolean;
  push_to_previous_search_status: boolean;
}

const initialState: SearchState = {
  products: [],
  local_query: "",
  search_parameters: {
    device: "",
    engine: "",
    gl: "",
    google_domain: "",
    hl: "",
    q: "suggest",
    shoprs: ""
  },
  search_parameters_change_locally: true,
  push_to_previous_search_status: true,
  previous_search_status: []
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ShoppingResults[]>) {
      state.products = action.payload;
    },
    setLocalQuery(state, action: PayloadAction<string>) {
      state.local_query = action.payload;
    },
    setSearchParameters(state, action: PayloadAction<SearchParameters>) {
      if(state.search_parameters_change_locally && state.push_to_previous_search_status){
        state.previous_search_status.push(state.search_parameters);
      }
      state.search_parameters = action.payload;
    },
    setSearchParameterChangeLocally(state, action: PayloadAction<boolean>){
      state.search_parameters_change_locally = action.payload;
    },
    setPushToPreviousSearchStatus(state, action: PayloadAction<boolean>){
      state.push_to_previous_search_status = action.payload;
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

export const { setProducts, setLocalQuery, setSearchParameters, goBackToPreviousStatus, resetSearchState, setSearchParameterChangeLocally,  setPushToPreviousSearchStatus } = searchSlice.actions;
export default searchSlice.reducer;