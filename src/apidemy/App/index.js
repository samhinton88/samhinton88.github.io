import React, { Component } from 'react';
import DisplayBoard from '../components/DisplayBoard';
import InstitutionCard from '../components/InstitutionCard';
import NavBarTop from '../components/NavBarTop';
import style from './style.css'


class App extends Component {

  render() {

    return (
      <div>
        <NavBarTop />
        <div
          className='color-block'
          style={
            {
              background: 'linear-gradient(90deg, #E74076, #874495, #0065B0)',
              height: '60vh',
              width: '100%',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'helvetica'
            }
          }
        >
          <h2 style={{fontSize: '42px'}}>Apidemy</h2>
          <input className='search-bar'/>

        </div>
        <div className='wrapper-light-grey'>

          <DisplayBoard secondarytwo={InstitutionCard}/>
        </div>
      </div>
    )
  }
}

export default App;
