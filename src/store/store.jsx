// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import chaptersReducer from './chaptersSlice';
import authReducer from './authSlice';
import registerReducer from './registerSlice';

export const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    auth: authReducer,
    register: registerReducer
  },
});

export default store;