import axios from "axios";
import { API_URL } from "../config.js";

// функция для отправки запроса на создание заметки
export const addNote = async (data) => {
  try {
    const response = await axios.post(`${API_URL}api/notes`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(response.data.message);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// функция для отправки запроса на получение заметок пользователя
export const getNotes = async () => {
  try {
    const response = await axios.get(`${API_URL}api/notes`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// функция для отправки запроса на удаление заметки
export const deleteNote = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}api/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
};