import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// ✅ RootState type (entire Redux state tree)
export type RootState = ReturnType<typeof store.getState>;

// ✅ AppDispatch type (for typed useDispatch)
export type AppDispatch = typeof store.dispatch;