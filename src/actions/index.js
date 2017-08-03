import axios from 'axios';

const ROOT_URL = 'https://itunes.apple.com/search?media=ebook';

export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const SELECT_BOOK = "SELECT_BOOK";

export function searchBooks(term, row) {
  const url = `${ROOT_URL}&limit=${row || 25}&term=${term}`;
  const request = axios.get(url);

  return {
    type: SEARCH_BOOKS,
    payload: request
  }
}

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  }
}