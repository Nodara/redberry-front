import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../services/axios';

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (user, { rejectWithValue }) => {
    try {
      return await axios.post('/auth/sign-up', user);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, { rejectWithValue }) => {
    try {
      return await axios.post('/auth/sign-in', user);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
