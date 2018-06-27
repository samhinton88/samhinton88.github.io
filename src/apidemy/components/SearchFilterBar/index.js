import React, { Component } from 'react';
import search from './style.css'

class SearchFilterBar extends Component {

  renderFilterOptions = () => {
    const { options } = this.props;
    if(!options){return}

    return options.map((o) => <div className='filter-option'>{o}</div>)
  }

  render() {

    return (
      <div className='search-filter-bar'>
        <div className='filter-option-container'>
          <div className='filter-option filter-select'>All filters</div>
          {this.renderFilterOptions()}
        </div>
      </div>
    )
  }
}

export default SearchFilterBar;
