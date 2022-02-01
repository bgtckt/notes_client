import React, { useEffect, useState } from 'react';
import Button from '../components/UI/button/Button.jsx'
import NotesList from '../components/notes/NotesList.jsx';
import ModalWindow from '../components/UI/modalWindow/ModalWindow.jsx'
import NotesForm from '../components/notes/NotesForm.jsx';
import { useContext } from 'react';
import { dataContext } from '../context';
import Loader from '../components/UI/loader/Loader.jsx';

// компонент страницы с заметками
export default function NotesPage() {
  // состояние загрузки данных
  const [isLoading, setIsLoading] = useState(true);

  // получаем массив заметок и функцию для обновления данных из контекста
  const {notes} = useContext(dataContext);
  const {updateData} = useContext(dataContext);

  // состояние модального окна
  const [modal, setModal] = useState(false);
  
  // обновление данных при монтировании компонента
  useEffect(async () => {
    await updateData();
    setIsLoading(false);
  }, []);

  return (
    <>
      <h2>Ваши заметки</h2>
      <Button onClick={() => setModal(true)}>Добавить заметку</Button>

      {isLoading
        ? <Loader/>
        : <NotesList elements={notes}/>
      }

      <ModalWindow visible={modal} setVisible={setModal}>
        <NotesForm setVisible={setModal}/>
      </ModalWindow>
    </>
  );
}
