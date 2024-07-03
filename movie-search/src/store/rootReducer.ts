// src/store/rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import { moviesApi } from "../api/moviesApi";
import errorReducer from "./slices/errorSlice";
import searchReducer from "./slices/searchSlice";

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  error: errorReducer,
  search: searchReducer,
  // Add more reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
