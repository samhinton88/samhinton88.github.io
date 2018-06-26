import React, { Component } from 'react';
import style from './style.css'

class InstitutionCard extends Component {

  renderGraphic = () => {


    return [10, 20, 25].map((r) => {
      return (
        <circle
          cx='70'
          cy='50'
          r={`${r}`}
          fill='rgba(174, 129, 255, 0.5)'
        />
      )
    })
  }

  render() {
    // const { style } = this.data;

    return (
      <div className='institution-card'>
        <div className='institution-card-head'>
          <svg height='100' width='200'>
            <circle cx='70' cy='50' r='30' fill='white'/>
            <circle cx='90' cy='70' r='20' fill='white'/>
            {this.renderGraphic()}
          </svg>
        </div>
        <div className='institution-card-body'>
          <div className='institution-card-body-merchandising'>
            <h3>Newcastle University</h3>
            <p>Business Management with Economics</p>
            <p className='author-text'>John P. White</p>
            <div className='institution-card-rating'>
              <span className='rating'>(44)</span>
              <span className='fa fa-star checked'/>
              <span className='fa fa-star checked'/>
              <span className='fa fa-star checked'/>
              <span className='fa fa-star checked'/>
              <span className='fa fa-star'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InstitutionCard;
