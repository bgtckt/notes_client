import React from 'react';
import {Link} from "react-router-dom";
import Button from "../button/Button.jsx";
import classes from './NavBar.module.less';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../reducers/userReducer.js';

export default function NavBar() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <div className={classes.navbar}>
      <h2>Заметки</h2>
      {!isAuth &&
        <div className={classes.navbar__links}>
          <Link className={classes.navbar__link} to='/login'>Войти</Link>
          <Link className={classes.navbar__link} to='/registration'>Регистрация</Link>
        </div>
      }
      {isAuth && <Button onClick={() => dispatch(logout())}>Выход</Button>}
    </div>
  );
}
