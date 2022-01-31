import axios from "axios";
import { setUser } from "../reducers/userReducer";
import { API_URL } from "../config.js";

// функция для отправки запроса на регистрацию на сервер
export const registration = async (email, password) => {
  try {
    // добавляем адрес сервера, полученный после деплоя, в URL запроса
    const response = await axios.post(`${API_URL}api/auth/registration`, {
      email,
      password
    });
    alert(response.data.message)
  } catch (error) {
    alert(error.response.data.message);
  }
};

// функция для отправки запроса на авторизацию на сервер
export const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${API_URL}api/auth/login`, {
        email,
        password
      });
      // передаем в action-creator setUser данные о пользователе из запроса
      // setUser возвращает объект action
      // dispatch передает action в userReducer
      // useReducer вызывает соответствующий case и обновляет состояние пользователя 
      dispatch(setUser(response.data.user));
      // сохраняем токен, полученный от сервера, в локальном хранилище
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
}; 

// функция, реализующая логику авторизации пользователя при монтировании приложения
export const auth = () => {
  return async dispatch => {
    try {
      // добавляем в запрос токен, полученный из локального хранилища
      const response = await axios.get(`${API_URL}api/auth/auth`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error.response.data.message);
      // в случае неудачного запроса, удаляем токен из хранилища
      localStorage.removeItem('token');
    }
  }
};