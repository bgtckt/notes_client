import React from 'react';
import Registration from '../authorization/Registration.jsx';
import Login from '../authorization/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AppRouter() {
  // получаем переменную isAuth из redux
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <>
      {!isAuth &&
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      }
    </>
  );
}
