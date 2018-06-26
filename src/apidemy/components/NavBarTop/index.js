import React, { Component } from 'react';
import style from './style.css';

class NavBarTop extends Component {

  render() {
    return (
      <div className='nav-bar-top'>
        <div className='nav-bar-left'>
          <div className='avatar'></div>

        </div>
        <div className='nar-bar-right'>
          <p>My courses</p>

        </div>
      </div>
    )
  }
}

export default NavBarTop;
