import { Navigate, Route, Routes } from 'react-router-dom';

import SignIn from './modules/Auth/SignIn/SignIn';
import SignUp from './modules/Auth/SignUp/SignUp';
import Header from './modules/Header/Header';
import Notifier from './modules/Notifier/Notifier';
import Statistics from './modules/Statistics/Statistics';
import useAuth from './hooks/useAuth';
import { useEffect } from 'react';

const App = () => {
  const {
    isAuthenticated,
    loadUser,
  } = useAuth();

  useEffect(() => {
    loadUser()
  }, [])

  if (isAuthenticated) {
    return (
      <div>
        <Header />
        <Statistics />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Notifier />
    </div>
  );

};

export default App;
