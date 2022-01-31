import React, {useEffect} from 'react';
import '../styles/app.less';
import NavBar from './UI/navBar/NavBar.jsx'
import {BrowserRouter} from "react-router-dom";
import AppRouter from './appRouter/AppRouter.jsx';
import { auth } from '../actions/user';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // вызов функции auth() при монтировании компонента App
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}
