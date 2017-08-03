import React, { Component } from 'react';
import SearchBar from './containers/searchbar';
import BooksList from './containers/bookslist';
import BookDetail from './containers/bookdetail';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="col-md-12">
        <SearchBar />
        <BookDetail />
        <BooksList />

      </div>
    );
  }
}

export default App