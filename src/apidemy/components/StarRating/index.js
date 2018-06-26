import React from 'react';
import style from './style.css';

export const StarRating = ({rating}) => {

    const output = [];

    for (let i=0; i<rating; i++) {
      output.push(<span key={i} className='fa fa-star checked' />)
    }

    for (let i=0; i<(5 - rating); i++) {
      output.push(<span key={i} className='fa fa-star empty' />)
    }

    return output;
  }

