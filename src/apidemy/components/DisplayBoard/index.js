import React, { Component } from 'react';
import style from './style.css'

class DisplayBoard extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='display-board'>
        <div className='primary-item display-board-item'>

        </div>
        <div className='secondary-item-one display-board-item'>
          {<this.props.secondarytwo />}
        </div>
        <div className='secondary-item-two display-board-item'>
          <h6>Institution Card</h6>
          {<this.props.secondarytwo />}
        </div>
      </div>
    )
  }
}

export default DisplayBoard
