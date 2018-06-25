import React, { Component } from 'react';
import DisplayBoard from '../components/DisplayBoard';

class App extends Component {

  render() {

    return (
      <div>
        <div
          className='color-block'
          style={
            {
              background: 'linear-gradient(90deg, #E74076, #874495, #0065B0)',
              height: '200px',
              width: '100%',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'helvetica'
            }
          }
        >
          <h2>Apidemy</h2>

        </div>
      </div>
    )
  }
}

export default App;
