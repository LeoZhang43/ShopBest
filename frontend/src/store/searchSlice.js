import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
  },
  reducers: {
    setResults(state, action) {
      state.results = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const { setResults, setLoading, clearResults } = searchSlice.actions;

export default searchSlice.reducer;