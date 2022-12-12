import { createSlice } from '@reduxjs/toolkit';

import { createUser, loginUser } from './auth.api';

const initialState = {
  isAuthenticated: false,
  isRegistered: false,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: (state) => {
      Object.assign(state, initialState);
    },
    setAuthenticated: (state, { payload }) => {
      state.authenticated = payload;
    },
    loadUser: (state) => {
      const token = localStorage.getItem('token');
      if (token) {
        state.isAuthenticated = true;
        state.isLoading = false;
      }
    }
  },
  extraReducers: (builder) => {
    // ------- sign in
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state, payload) => {
      state.loading = false;
    });

    // -------- sign up
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isRegistered = true;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectAuth = (state) => state.auth;

export const { resetAuth, setAuthenticated, loadUser } = authSlice.actions;

export default authSlice.reducer;
