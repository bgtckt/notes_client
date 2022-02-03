import React, { useEffect, useState } from 'react';
import '../styles/notes.less';
import NotesList from '../components/notes/NotesList.jsx';
import ModalWindow from '../components/UI/modalWindow/ModalWindow.jsx'
import NotesForm from '../components/notes/NotesForm.jsx';
import { useContext } from 'react';
import { dataContext } from '../context';
import Loader from '../components/UI/loader/Loader.jsx';
import Search from '../components/search/Search.jsx';

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
  useEffect(() => {
    updateData();
    setIsLoading(false);
  }, []);

  return (
    <>
      <h2 className='notes__title'>Ваши заметки</h2>
      
      <Search/>

      <button className='notes__btn' onClick={() => setModal(true)}>+</button>

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
