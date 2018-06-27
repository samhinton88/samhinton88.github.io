import React, { Component } from 'react';
import style from './style.css'

import {StarRating} from '../StarRating';

class InstitutionCard extends Component {


  renderGraphic = () => {

    const { style: { r, g, b}} = this.props.data;

    return [10, 20, 25].map((rad, i) => {
      return (
        <circle
          cx='70'
          cy='50'
          r={`${rad}`}
          fill={`rgba(${r},${g}, ${b}, 0.4)`}
          key={i + 'renderGraphic' + rad}
        />
      )
    })
  }

  renderStars = () => {
    const { rating } = this.props.data;


    return <StarRating rating={rating} />

  }

  render() {
    const {
      style: {r, g, b},
      isTop,
      institutionName,
      courseName,
      author,
      rating,
      noOfRatings,
      price
    } = this.props.data;

    return (
      <div className='institution-card'>
        <div className='institution-card-head' style={{backgroundImage: `linear-gradient(to right, rgba(${r},${g}, ${b}, 0.5), rgba(200, 200, 200, 0.7), rgba(${r},${g}, ${b}, 1))`}}>
          <svg height='100' width='200'>
            <circle cx='70' cy='50' r='30' fill='white'/>
            <circle cx='90' cy='70' r='20' fill='white'/>
            <circle cx='100' cy='90' r='10' fill='white'/>
            <circle cx='90' cy='70' r='20' fill='white'/>
            {this.renderGraphic()}
            {isTop ? <text x='130' y='40' r='5' fill='white' style={{font: 'bold 10px helvetica'}}>TOP SCHOOL</text> : ''}
          </svg>

        </div>
        <div className='institution-card-body'>
          <div className='institution-card-body-merchandising'>
            <h3 className='institution-card-name'>{courseName}</h3>
            <p>{institutionName}</p>
            {price ? <p>£{price}</p> : ''}
            <p className='author-text'>{author}</p>
            <div className='institution-card-rating'>
              <span className='rating'>({noOfRatings})</span>
              {this.renderStars()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InstitutionCard;
