import React, { Component } from 'react';
import { StarRating } from '../StarRating';
import style from './style.css'

class Banner extends Component {

  renderPrice = () => {
    const { price } = this.props.data;

    return (
      <div className='merch-pricing'>
        ${price}
        <button className='btn-buy-merch'>Add to Cart</button>
      </div>)
  }

  render() {
    if(!this.props.data) { return <div className='banner banner-generic'>{this.props.children}</div>}

    const {
      header,
      subHeader,
      badges,
      background,
      type,
      rating,
      price
    } = this.props.data;



    return (
      <div
       className='banner'
       style={background || {background: 'linear-gradient(90deg, #E74076, #874495, #0065B0)'}}
       >
        <div className='banner-left-section'>
          {header ? <h3>{header}</h3> : ''}
          {rating ? <div><StarRating rating={rating} /></div>: ''}
          {subHeader ? <h5>{subHeader}</h5> : ''}
        </div>
        <div className='banner-right-section'>
          <div className='banner-right-section-bottom'>
            {price ? this.renderPrice() : ''}
          </div>
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
