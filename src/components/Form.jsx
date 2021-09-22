import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Form.css';
import { getBooks } from './actions/books';

export default function Form() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  console.log(searchTerm);

  function searchHandler() {
    dispatch(getBooks(searchTerm));
  }

  useEffect(() => {
    const delayFunc = setTimeout(() => {
      dispatch(getBooks(searchTerm));
    }, 1500);

    return () => clearTimeout(delayFunc);
  }, [dispatch, searchTerm]);

  return (
    <div className="search-container">
      <div className="search">
        <label htmlFor="books"></label>
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="search-field"
          name="books"
          placeholder="Search the books..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button onClick={() => searchHandler()}>Search</button>
    </div>
  );
}
