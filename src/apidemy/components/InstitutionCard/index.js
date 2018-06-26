import React, { Component } from 'react';
import style from './style.css'

class InstitutionCard extends Component {


  renderGraphic = () => {

    const { style: { r, g, b}} = this.props.data;

    return [10, 20, 25].map((rad) => {
      return (
        <circle
          cx='70'
          cy='50'
          r={`${rad}`}
          fill={`rgba(${r},${g}, ${b}, 0.4)`}
        />
      )
    })
  }

  renderStars = () => {
    const { rating, courseName } = this.props.data;
    const output = [];

    for (let i=0; i<rating; i++) {
      output.push(<span key={i + courseName} className='fa fa-star checked' />)
    }

    for (let i=0; i<(5 - rating); i++) {
      output.push(<span key={i + 5 + courseName} className='fa fa-star' />)
    }
    return output;
  }

  render() {
    const { style: {r, g, b}, isTop, institutionName, courseName, author, rating, noOfRatings } = this.props.data;

    return (
      <div className='institution-card'>
        <div className='institution-card-head' style={{background: `rgba(${r},${g}, ${b}, 1)`}}>
          <svg height='100' width='200'>
            <circle cx='70' cy='50' r='30' fill='white'/>
            <circle cx='90' cy='70' r='20' fill='white'/>
            {this.renderGraphic()}
            {isTop ? <text x='130' y='40' r='5' fill='white' style={{font: 'bold 10px helvetica'}}>TOP SCHOOL</text> : ''}
            {isTop ? <span className='fa fa-certificate'>{'\f0a3'}</span>: ''}
          </svg>
        </div>
        <div className='institution-card-body'>
          <div className='institution-card-body-merchandising'>
            <h3>{institutionName}</h3>
            <p>{courseName}</p>
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
