import React, { useState } from 'react';
import Button from '../UI/button/Button.jsx';
import Input from '../UI/input/Input.jsx';
import '../../styles/login.less'
import { login } from '../../actions/user.js';
import { useDispatch } from 'react-redux';

// компонент формы для авторизации пользователя
export default function Login() {
  // состояния email и пароля пользователя
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // функция-обработчик события отправки формы авторизации
  function loginHandler(event, email, password) {
    event.preventDefault();
    dispatch(login(email, password))
  }

  return (
    <form className='login' onSubmit={(e) => loginHandler(e, email, password)}>
      <h3 className='login__header'>Авторизация</h3>
      <Input 
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        type='text'
        placeholder='Введите email'
      />
      <Input 
        value={password} 
        onChange={(evt) => setPassword(evt.target.value)} 
        type='password' 
        placeholder='Введите пароль'
      />
      <Button type='submit'>Войти</Button>
    </form>
  );
}
