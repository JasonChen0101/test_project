// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'register',
  initialState: {
    email: null,
    password: null,
    registerError: null,
    registerSuccess: false
  },
  reducers: {
    regist: (state, action) => {
        state.registerSuccess = true;
        state.registerError = null;
    },
    registError: (state, action) => {
        state.registerSuccess = false;
        state.registerError = action.payload;
    },
  },
});

export const { regist, registError } = authSlice.actions;
export const registState = state => state.register;

export const emailExistAction = (payload) => async dispatch => {
    // TODO 檢查是否email已被註冊(邊輸入邊檢查)
    var isExist = false;

    return isExist;
} 

export const registerAction = (payload) => async dispatch => {
    // TODO 檢查註冊是否成功
    return { ok: true };
} 

export default authSlice.reducer;
