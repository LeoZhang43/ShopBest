import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
  },
});

// ✅ RootState type (entire Redux state tree)
export type RootState = ReturnType<typeof store.getState>;

// ✅ AppDispatch type (for typed useDispatch)
export type AppDispatch = typeof store.dispatch;