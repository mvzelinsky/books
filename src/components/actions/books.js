import axios from 'axios';
import { setBooks, setIsFetching } from '../../reducers/booksReducer';

export const getBooks = (searchTerm) => {
  if (searchTerm === '') {
    searchTerm = 'the lord of the rings';
  }
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await axios.get(`http://openlibrary.org/search.json?q=${searchTerm}`);
    dispatch(setBooks(response.data));
  };
};
