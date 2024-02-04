// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    email: null,
    token: null,
    loginError: null,
  },
  reducers: {
    login: (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.loginError = null;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.loginError = null;
      state.token = null;
      alert("logout Success");
    },
    loginError: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

export const { login, logout, loginError } = authSlice.actions;
export const selectAuth = state => state.auth;

export const loginAction = (payload) => async dispatch => {
    try {
        const response = await fetch('https://beauty.kinglyrobot.tk/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
            }),
        });

        if (response.ok) {
            // Assuming the API returns user data, you can extract the username from the response
            const userData = await response.json();
            const token = userData.token;

            // Dispatch the login action with the extracted username
            dispatch(login({ token }));
        } else {
            const errResponse = await response.json();
            console.log(errResponse)
            // If login fails, dispatch the loginError action
            dispatch(loginError('Invalid email or password'));

            // const token = "sadsadsa";
            // dispatch(login({ token }));
        }
        
        // return { ok: !false };
        return response;

    } catch (error) {
        console.error('Error during login:', error);
        // If there's an error, dispatch the loginError action
        dispatch(loginError('An error occurred during login'));
    }
    return { ok: false };
};

export default authSlice.reducer;
