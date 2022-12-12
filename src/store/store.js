import { configureStore } from '@reduxjs/toolkit'
import statisticsReducer from '../modules/Statistics/statistics.slice';
import authReducer from '../modules/Auth/auth.slice';
import notifierReducer from '../modules/Notifier/notifier.slice';

export const store = configureStore({
  reducer: {
    statistics: statisticsReducer,
    auth: authReducer,
    notifier: notifierReducer,
  }
})
