import React, { Component } from 'react';
import style from './style.css';

import SearchFilterBar from '../SearchFilterBar';
import SearchResultList from '../SearchResultList';
import Banner from '../Banner';

class InternationalExperienceShop extends Component {

  render() {
    // access to shop data
    const flags = [

    ]

    return(
      <div className='international-experience-shop'>
        <Banner >
          <i class="fas fa-shopping-cart experience-cart"></i>
          <h3>International Experience Shop</h3>
          <h1>Get the best out of the worlds best education system</h1>
        </Banner>
        <div className='search-filter-bar-container'>
          <SearchFilterBar options={['Business', 'Economics', 'Accountancy']}/>
        </div>
        <div className='shop-search-result-list-wrapper'>
          <div className='shop-search-result-list-container'>
            <SearchResultList data={this.props.data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default InternationalExperienceShop;
