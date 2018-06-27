import React, { Component } from 'react';
import style from './style.css';

class NavBarTop extends Component {

  render() {
    return (
      <div className='nav-bar-top'>
        <div className='nav-bar-left'>
          <div className='avatar'></div>

        </div>
        <div className='nav-bar-right'>
          <div>
            <i class="fas fa-shopping-cart cart"></i>
          </div>
          <div>
            <span className='user-courses-link'>My Courses</span>
          </div>

        </div>
      </div>
    )
  }
}

export default NavBarTop;
