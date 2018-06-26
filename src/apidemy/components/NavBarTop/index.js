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
            <svg width='100' height='50'>
              <circle cx='21' cy='25' r='20' fill='transparent' stroke='rgba(0, 0, 0, 0.5)'/>
              <text x='6' y='28' style={{font: 'bold 10px helvetica'}}>SHOP</text>
            </svg>
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
