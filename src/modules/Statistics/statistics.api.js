
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/axios';

export const getStatistics = createAsyncThunk(
  'auth/createUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/statistics/');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);