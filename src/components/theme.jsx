import { createSlice } from '@reduxjs/toolkit';

export const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (['Income', 'Expense'].includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return 'light';

  return 'dark';
};

const initialState = getTheme();

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: (state, action) => action.payload,
  },
});

export const { set } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;