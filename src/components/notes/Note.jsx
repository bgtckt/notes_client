import React, { useState, useEffect } from 'react';
import { deleteNote } from '../../actions/note';
import '../../styles/note.less'
import Button from '../UI/button/Button.jsx';
import { useContext } from 'react';
import { dataContext } from '../../context';

export default function Note({title, text, date, id}) {
  // получаем и функцию для обновления данных из контекста
  const {updateData} = useContext(dataContext);

  // состояние флага изменения данных
  const [dataChanged, setDataChanged] = useState(0);

  // функция-обработчик события удаления заметки
  async function deleteHandler(evt, id) {
    evt.preventDefault();
    await deleteNote(id);
    setDataChanged(!dataChanged);
  }

  // обновление данных, в случае их изменения в БД
  useEffect(async () => {
    await updateData();
  }, [dataChanged]);

  return (
    <div className='note'>
      <h3>{title}</h3>
      <p>{text}</p>
      <p>{date}</p>
      <Button onClick={(evt) => deleteHandler(evt, id)}>Удалить</Button>
    </div>
  );
}
