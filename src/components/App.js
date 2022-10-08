import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { refreshUser } from 'redux/operations/userOperations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyles';

const Phonebook = lazy(() => import('../pages/Phonebook').then(module => ({
  ...module,
  default: module.Phonebook,
})));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing
    ? (<b>Refreshing user...</b>)
    : (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/phonebook"
              element={<PrivateRoute redirectTo="/login" component={<Phonebook />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute redirectTo="/phonebook" component={<Register />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/phonebook" component={<Login />} />}
            />
            </Route>
        </Routes>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
    </>
    );
};

/* <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}
>
  React homework template
</div> */