import React, { useState } from 'react';
import Button from '../UI/button/Button.jsx';
import Input from '../UI/input/Input.jsx';
import '../../styles/registration.less'
import { registration } from '../../actions/user.js';

// компонент формы для регистрации пользователя
export default function Registration() {
  // состояния email и пароля пользователя
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // функция-обработчик события отправки формы регистрации
  function regHandler(event, email, password) {
    event.preventDefault();
    registration(email, password);
  }

  return (
    <form className='registration' onSubmit={(e) => regHandler(e, email, password)}>
      <h3 className='registration__header'>Регистрация</h3>
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
      <Button type='submit'>Зарегистрироваться</Button>
    </form>
  );
}
