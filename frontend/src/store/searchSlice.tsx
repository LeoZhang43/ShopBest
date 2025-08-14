import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCardProps } from "../type";

interface SearchState {
  query: string;
  products: ProductCardProps[];
  loading: boolean;
}

const initialState: SearchState = {
  query: "",
  products: [],
  loading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductCardProps[]>) {
      state.products = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setLoading, setQuery } = searchSlice.actions;
export default searchSlice.reducer;