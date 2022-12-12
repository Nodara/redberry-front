import axios from 'axios';
import { resetAuth } from '../modules/Auth/auth.slice';
import { setNotification, setNotificationType } from '../modules/Notifier/notifier.slice';

let store;
export const injectStore = (_store) => { store = _store; };

const instance = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (request) => {
    const newRequest = { ...request };
    newRequest.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return newRequest;
  },
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      store.dispatch(resetAuth());
      return Promise.reject(error.response.data);
    }

    store.dispatch(setNotificationType('error'));
    store.dispatch(setNotification(error.response.data.message));
    return Promise.reject(error.response.data);
  },
);

export default instance;
