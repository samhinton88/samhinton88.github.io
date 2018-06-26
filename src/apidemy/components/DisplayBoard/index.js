import React, { Component } from 'react';
import style from './style.css'

class DisplayBoard extends Component {

  render() {
    console.log(this.props)
    // const { style, institutionName, courseName, author, rating, noOfRatings } = this.props.data;
    return (
      <div className='display-board'>
        <div className='primary-item display-board-item'>
          <div className='component-description'>
            <h4>Institution Card</h4>
            <ul>
              <li>Maximum information on small surface area.</li>
              <li>Eye-catching abstract colour on head, paper-white detail on body.</li>
              <li>Shapes generated automatically, but are customisable.</li>
              <li>Display average rating and number of ratings</li>
              <li>Slight shadow to create depth.</li>
              <li>Deeper shadow and slight colour change on hover.</li>
              <li>Special status / badges can also be displayed.</li>
            </ul>
          </div>
        </div>
        <div className='secondary-item-one display-board-item'>
          {<this.props.secondarytwo
            data={
            {
              institutionName: 'Newcastle University',
              courseName: 'Business Management with Economics',
              author: 'Sarah Lineman',
              style: {
                r: 100,
                g: 100,
                b: 220,
              },
              rating: 4,
              noOfRatings: 1002
            }
          }/>}
        </div>
        <div className='secondary-item-two display-board-item'>
          <h6>Institution Card</h6>
          {<this.props.secondarytwo
            data={
              {
                institutionName: 'University of York',
                courseName: 'Introduction to Contract Law',
                author: 'John P. White',
                style: {
                  r: 220,
                  g: 100,
                  b: 100
                },
                rating: 5,
                noOfRatings: 2445,
                isTop: true
              }
            }
            />}
        </div>
      </div>
    )
  }
}

export default DisplayBoard
