import React, { Component } from 'react';
import style from './style.css';

import SearchFilterBar from '../SearchFilterBar';
import SearchResultList from '../SearchResultList';

class InternationalExperienceShop extends Component {

  render() {
    // access to shop data

    return(
      <div className='international-experience-shop'>
        <SearchFilterBar options={['Business', 'Economics', 'Accountancy']}/>
        <SearchResultList data={this.props.data}/>
      </div>
    )
  }
}

export default InternationalExperienceShop;
