import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../reducers/booksReducer';
import Modal from './Modal';
import '../styles/Card.css';

export default function Card(props) {
  const dispatch = useDispatch();

  const book = props.book;
  const imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
  let author = 'unknown';
  if (book.author_name) {
    author = book.author_name[0];
  }

  function onCardCLick() {
    console.log('nazhal');
    dispatch(setIsModalOpen(true));
    //Отсюда передававть в state данные для отображения в модалке
  }
  return (
    <div className="card" onClick={onCardCLick}>
      <div className="image-container">
        <img src={imageUrl} alt="Book cover" />
      </div>
      <h4>{book.title}</h4>
      <p>{author}</p>
    </div>
  );
}
