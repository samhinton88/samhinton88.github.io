import React, { Component } from 'react';
import search from './style.css'

class SearchFilterBar extends Component {

  render() {

    return (
      <div className='search-filter-bar'>
        <div className='filter-option-container'>
          <div className='filter-option filter-select'>All filters</div>
          <div className='filter-option'>Business and Economics (30)</div>
          <div className='filter-option'>Accountancy (10)</div>
          <div className='filter-option'>Law (2)</div>
        </div>
      </div>
    )
  }
}

export default SearchFilterBar;
