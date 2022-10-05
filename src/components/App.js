import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Phonebook } from 'pages/Phonebook';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Home } from 'pages/Home';
import { Layout } from './Layout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/phonebook" element={<Phonebook />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />} />
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