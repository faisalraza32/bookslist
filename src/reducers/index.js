import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';
import SelectBookReducer from './select_book_reducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  selectBook: SelectBookReducer
});

export default rootReducer;