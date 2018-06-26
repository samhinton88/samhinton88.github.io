import React, { Component } from 'react';
import style from './style.css';

class InstitutionBadge extends Component {

  renderBadge = () => {
    const { badge } = this.props;

    const badgeMap = {
      satisfied: <i className="fas fa-smile" style={{color: 'white', fontSize: '30px'}}></i>,
      excelent: <i class="fas fa-graduation-cap" style={{color: 'white', fontSize: '30px'}}></i>,
      leader: <i class="fas fa-certificate" style={{color: 'white', fontSize: '30px'}}></i>
    }

    return badgeMap[badge];
  }

  render() {

    return (
      <div className='institution-badge'>
        {this.renderBadge()}
      </div>
    )
  }
}

export default InstitutionBadge;
