import React, { useState, useEffect } from 'react';
import '../styles/app.less';
import NavBar from './UI/navBar/NavBar.jsx'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './appRouter/AppRouter.jsx';
import { auth } from '../actions/user';
import { useDispatch } from 'react-redux';
import { dataContext } from '../context';
import { getNotes } from '../actions/note.js';

export default function App() {
  // состояние массива заметок
  const [notes, setNotes] = useState([]);

  const dispatch = useDispatch();

  // функция для получения и отрисовки данных о заметках
  async function updateData() {
    const response = await getNotes();
    setNotes(response.data);
  }

  // вызов функции auth() при монтировании компонента App
  useEffect(() => {
    dispatch(auth());
  }, []);

  // помещаем массив заметок и функцию обновления данных в контекст
  return (
    <dataContext.Provider value={{
      notes,
      setNotes,
      updateData
    }}>
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </dataContext.Provider>
  );
}
