import React from 'react';
import Note from './Note.jsx';
import '../../styles/notesList.less'

// компонент списка заметок пользователя
export default function NotesList({elements}) {

  // возвращаем сообщение в случае, когда массив заметок пользователя пуст
  if (!elements.length) {
    return (
      <h2 className='notesList__warning'>У вас пока нет заметок</h2>
    );
  }

  return (
    <div className='notesList'>
      {elements.map(elem =>
        <Note 
          key={elem._id} 
          title={elem.title} 
          text={elem.text} 
          date={elem.date} 
          id={elem._id}
        />
      )}
    </div>
  );
}
