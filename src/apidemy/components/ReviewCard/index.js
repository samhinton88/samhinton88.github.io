import React, { Component } from 'react';
import style from './style.css';

import { StarRating } from '../StarRating';

class ReviewCard extends Component {

  render() {
    const { data: {author, title, content, rating, courseName} } = this.props;

    return (
      <div className='review-card'>
        <div className='review-card-left'>

          <div
            className='avatar'
            style={
              {
                backgroundImage: 'url("https://loremflickr.com/50/50/face")',
                height: '70px',
                width: '70px',
                borderRadius: '50%'
              }
            }>
          </div>
          <div className='review-card-details'>
            <h4>{author}</h4>
            <p>Course: {courseName}</p>
            {<StarRating rating={rating} />}
          </div>
        </div>
        <div className='review-card-right'>
          <div className='review-card-content'>
            <h5>{title}</h5>
            <p>{content}</p>
          </div>

        </div>

      </div>
    )
  }
}

export default ReviewCard;
