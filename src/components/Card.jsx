import React from 'react';
import '../styles/Card.css';

export default function Card() {
  return (
    <div className="card">
      <div className="image-container">
        <img src="https://covers.openlibrary.org/b/id/258027-M.jpg" alt="" />
      </div>
      <h4>The Lord of the Rings</h4>
      <p>J. R. R. Tolkien</p>
    </div>
  );
}
