import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: []
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    },
  },
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer