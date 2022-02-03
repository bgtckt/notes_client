import React, {useState, useEffect} from 'react';
import '../../styles/notesForm.less';
import Input from '../UI/input/Input.jsx';
import Button from '../UI/button/Button.jsx';
import { addNote } from '../../actions/note.js';
import { useContext } from 'react';
import { dataContext } from '../../context';

export default function NotesForm({setVisible}) {
  // получаем и функцию для обновления данных из контекста
  const {updateData} = useContext(dataContext);

  // состояние флага изменения данных
  const [dataChanged, setDataChanged] = useState(0);

  // состояние новой заметки
  const [note, setNote] = useState({
    title: '',
    text: '',
    date: ''
  }) 

  // функция-обработчик события созданя новой заметки
  async function submitHandler(evt) {
    evt.preventDefault();
    await addNote(note);
    setDataChanged(!dataChanged);
    setVisible(false);
   }

  // обновление данных, в случае их изменения в БД
  useEffect(() => {
    updateData();
  }, [dataChanged]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <h3 className='notesForm__title'>Добавление новой заметки</h3>
        <Input 
          value={note.title}
          onChange={(evt) => setNote({...note, title: evt.target.value})}
          type='text'
          placeholder='Введите название заметки'
        />
        <textarea 
          className='notesForm__textarea'
          value={note.text}
          onChange={(evt) => setNote({...note, text: evt.target.value})}
          type='text'
          placeholder='Введите текст'
        />
        <Input 
          value={note.date}
          onChange={(evt) => setNote({...note, date: evt.target.value})}
          type='date'
          placeholder='Укажите дату'
        />
        <Button type='submit'>Добавить</Button>
      </form>
    </>
  );
}
