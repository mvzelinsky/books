import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '../reducers/booksReducer';
import '../styles/Modal.css';

export default function Modal() {
  const dispatch = useDispatch();
  let isModalOpen = useSelector((state) => state.books.isModalOpen);

  if (isModalOpen) {
    return (
      <div>
        <div className="modal">
          <div className="modal-body">
            <h1>wlcmwelc</h1>
            <button onClick={() => dispatch(setIsModalOpen(false))}>Close</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
