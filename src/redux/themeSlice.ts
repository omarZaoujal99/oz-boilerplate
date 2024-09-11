import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  mode: 'light' | 'dark';
}

const getInitialTheme = (): 'light' | 'dark' => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme as 'light' | 'dark';
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('theme', state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
