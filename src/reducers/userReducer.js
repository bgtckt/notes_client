// состояние для пользователя по-умолчанию
const defaultState = {
  currentUser: {},
  isAuth: false
};

// константы для описания action.type
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      // обновление состояния в случае успешной авторизации
      return {...state, currentUser: action.payload, isAuth: true}
    case LOGOUT:
      localStorage.removeItem('token');
      return {...state, currentUser: {}, isAuth: false}
    default:
      return state;
  }
}

// функции action-creator
export function setUser(user) {
  return {type: SET_USER, payload: user}
}

export function logout() {
  return {type: LOGOUT}
}