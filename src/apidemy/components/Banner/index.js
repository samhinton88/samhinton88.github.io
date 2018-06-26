import React, { Component } from 'react';
import { StarRating } from '../StarRating';
import style from './style.css'

class Banner extends Component {

  render() {
    const {
      header,
      subHeader,
      badges,
      background,
      type,
      rating
    } = this.props.data;



    return (
      <div
       className='banner'
       style={background || {background: 'linear-gradient(90deg, #E74076, #874495, #0065B0)'}}
       >
        <div className='banner-left-section'>
          <h3>{header}</h3>
          {rating ? <div><StarRating rating={rating} /></div>: ''}
          <h5>{subHeader}</h5>
        </div>
      </div>
    )
  }
}

export default Banner;


/* <div className='institution-page-header'>
          <div>
            <h3>University of Newcastle</h3>
            {<StarRating rating={rating} />}
            <h5>Newcastle, Tyne and Wear</h5>

          </div>
          <div className='institution-page-header-badges'>
            <div className='badge-container'>
              {badges.map((b, i) => <InstitutionBadge key={i + b} badge={b} />)}
            </div>
          </div>

        </div> */
