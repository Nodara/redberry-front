import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './statistics.api';

const initialState = {
  statistics: [],
  isLoading: false
};

const statisticsSlice = createSlice({
  initialState,
  name: 'statistics',
  reducers: {
    clearStatistics: (state) => {
      Object.assign(state, initialState);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getStatistics.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStatistics.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.statistics = payload.statistics;
    });
    builder.addCase(getStatistics.rejected, (state) => {
      state.loading = false;
    });
  }

});

export const selectStatistics = (state) => state.statistics;

export const { clearStatistics } = statisticsSlice.actions;

export default statisticsSlice.reducer;
