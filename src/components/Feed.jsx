import React from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from './actions/books';
import '../styles/Feed.css';

export default function Feed() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.items);
  const isFetching = useSelector((state) => state.books.isFetching);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="feed">
      {isFetching === false ? (
        books.map((book) => <Card book={book} key={book.key} />)
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}
