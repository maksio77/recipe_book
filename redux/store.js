import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoriteSlice";

export default configureStore({
  reducer: {
    favorite: favoriteSlice,
  },
});
