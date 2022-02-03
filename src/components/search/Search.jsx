import React, { useState } from 'react';
import '../../styles/search.less';
import Input from '../UI/input/Input.jsx';
import Button from '../UI/button/Button.jsx';
import { useContext } from 'react';
import { dataContext } from '../../context';

export default function Search() {
  // получаем необходимые данные из контекста
  const {notes} = useContext(dataContext);
  const {setNotes} = useContext(dataContext);
  const {updateData} = useContext(dataContext);
  
  // состояние строки поискового запроса
  const [query, setQuery] = useState('');

  // функция фильтрации заметок по результатм поискового запроса
  function filterNotes(elements, string) {
    const filteredNotes = elements.filter(elem => elem.title.includes(string));
    setNotes(filteredNotes);
  }

  return (
    <div className='search'>
      <Input 
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
        type='text'
        placeholder='Поиск заметки'
      />
      <div className='search__buttons'>
        <Button onClick={() => filterNotes(notes, query)}>Найти</Button>
        <Button onClick={() => updateData()}>Сброс</Button>
      </div>
    </div>
  );
}
