import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className='col-md-8 list-group media-list'>Select a book for detail.</div>
    }

    const { book } = this.props;
    const url = _.replace(book.artworkUrl100, '100x100', '320x320')
    return (

      <div className='col-md-8 list-group media-list'>
        <div className='list-group-item media'>
          <h3>{book.trackName}</h3>
          <h4>{book.artistName}</h4>
          <img className="book-list-image media-object" src={url} alt={book.trackName} />
          <span dangerouslySetInnerHTML={{ __html: book.description }} />
          <br />
        </div>
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.selectBook
  };
}

export default connect(mapStateToProps)(BookDetail);