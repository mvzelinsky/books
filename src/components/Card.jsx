import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
  const book = props.book;
  const imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt="Book cover" />
      </div>
      <h4>{book.title}</h4>
      <p>{book.author_name}</p>
    </div>
  );
}
