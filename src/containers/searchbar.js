import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchBooks } from '../actions/index';

import './searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.props.searchBooks("ReactJS");
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.term === '') return;

    this.props.searchBooks(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onFormSubmit} className='input-group'>
          <input
            placeholder='Search books on iTune Store'
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-secondary'>Search</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchBooks }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
