import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: JSON.parse(localStorage.getItem('details'))
    ? JSON.parse(localStorage.getItem('details'))
    : null,
  themeColor: JSON.parse(localStorage.getItem('themeColor'))
    ? JSON.parse(localStorage.getItem('themeColor'))
    : null,
};

const itemDetails = createSlice({
  name: 'details',
  initialState,
  reducers: {
    getItemDetails: (state, action) => {
      state.details = action.payload;
      localStorage.setItem('details', JSON.stringify(state.details));
    },
    getThemeColor: (state, action) => {
      state.themeColor = action.payload;
      localStorage.setItem('themeColor', JSON.stringify(state.themeColor));
    },
  },
});

export const { getItemDetails, getThemeColor } = itemDetails.actions;

export default itemDetails.reducer;
