const SET_BOOKS = 'SET_BOOKS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_MODAL_OPEN = 'SET_IS_MODAL_OPEN';

const defaultState = {
  items: [],
  isFetching: true,
  isModalOpen: false,
};

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        items: action.payload.docs,
        isFetching: false,
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    case SET_IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      };

    default:
      return state;
  }
}

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books,
});

export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});

export const setIsModalOpen = (bool) => ({
  type: SET_IS_MODAL_OPEN,
  payload: bool,
});
