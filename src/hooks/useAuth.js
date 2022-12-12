import { useDispatch, useSelector } from 'react-redux';

import { loginUser, createUser } from '../modules/Auth/auth.api'

import {
  resetAuth, selectAuth, setAuthenticated, loadUser
} from '../modules/Auth/auth.slice'

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuth);

  return {
    ...authState,
    setAuthenticated: (payload) => dispatch(setAuthenticated(payload)),
    resetAuth: () => dispatch(resetAuth()),
    signIn: (payload) => dispatch(loginUser(payload)),
    signUp: (payload) => dispatch(createUser(payload)),
    loadUser: () => dispatch(loadUser())
  };
};

export default useAuth;
