import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

import './bookslist.css';

class BooksList extends Component {

  renderBook() {
    if (!this.props.books.results) { return (null) }
    return this.props.books.results.map(book => {
      return (
        <li
          key={book.trackId}
          className="list-group-item book-list-item"
          onClick={() => this.props.selectBook(book)}
        >
          <div className="media-left">
            <img className="media-object" src={book.artworkUrl100} alt={book.trackName} />
          </div>
          <div className="media-body">
            <div className="media-heading">{book.trackName}</div>
          </div>
        </li >
      );
    });
  }

  render() {
    return (
      <ul className='col-md-4 list-group media-list'>
        {this.renderBook()}
      </ul>
    );
  }
}

function mapStateToProps({ books }) {
  return { books };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

