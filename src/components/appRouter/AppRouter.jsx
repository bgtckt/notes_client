import React from 'react';
import Registration from '../authorization/Registration.jsx';
import Login from '../authorization/Login.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotesPage from '../../pages/NotesPage.jsx';

export default function AppRouter() {
  // получаем переменную isAuth из redux
  const isAuth = useSelector(state => state.user.isAuth);

  // указываем доступные маршруты в зависимости от состояния авторизации пользователя
  return (
    <>
      {!isAuth
        ? <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        : <Routes>
            <Route path='/' element={<NotesPage/>}/>
            <Route path='/login' element={<Navigate to='/'/>}/>
          </Routes>
      }
    </>
  );
}
