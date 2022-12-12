import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: null,
  isError: false,
};

export const notifierSlice = createSlice({
  name: 'notifier',
  initialState,
  reducers: {
    setNotification: (state, { payload }) => {
      state.message = payload;
    },
    setNotificationType: (state, { payload }) => {
      payload === 'error' ? state.isError = true : state.isError = false;
    },
  },
});

export const selectNotifier = (state) => state.notifier;

export const {
  setNotification,
  setNotificationType,
} = notifierSlice.actions;

export default notifierSlice.reducer;
