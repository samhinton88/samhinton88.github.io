import React, { Component } from 'react';
import style from './style.css'

class DisplayBoard extends Component {
  renderBulletPoints = () => {
    const { bulletPoints } = this.props;

    if(!bulletPoints) { return }

    return bulletPoints.map((bp, i) => <li key={i}>{bp}</li>)
  }

  render() {
    const { title } = this.props;
    return (
      <div className='display-board'>
        <div className='primary-item display-board-item'>
          <div className='component-description'>
            <h4>{title}</h4>
            <ul>
              {this.renderBulletPoints()}
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
