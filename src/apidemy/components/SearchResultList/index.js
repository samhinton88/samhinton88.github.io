import React, { Component } from 'react';
import InstitutionCard from '../InstitutionCard';
import style from './style.css';

class SearchResultList extends Component {

  renderResults = () => {
    const { data } = this.props;

    return data.map((r) => <InstitutionCard data={r}/>)
  }

  render() {
    // merch cards

    return (
      <div className='search-result-list'>
        {this.renderResults()}
      </div>
    )
  }
}

export default SearchResultList;
