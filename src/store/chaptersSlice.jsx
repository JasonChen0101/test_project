// src/store/chaptersSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

export const chaptersSlice = createSlice({
  name: 'chapters',
  initialState: [],
  reducers: {
    setChapters: (state, action) => {
      return action.payload;
    },
  },
});

export const { setChapters } = chaptersSlice.actions;
export const selectChapters = state => state.chapters;

export const fetchChapters = () => async dispatch => {
  try {
    const response = await fetch('https://beauty.kinglyrobot.tk/api/chapter');
    const data = await response.json();
    dispatch(setChapters(data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default chaptersSlice.reducer;
