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
          <input className='search-bar' placeholder='search courses and schools...'/>

        </div>
        <div className='search-result-container-wrapper'>
          <div className='search-result-container'>
            {[
              {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Oxford University', courseName: 'Business Studies', rating: 4, noOfRatings: 2003, author: 'Alice Stevens'},
              {style: {r: 200, g: 100, b: 100}, institutionName: 'University of Exeter', courseName: 'Business Studies', rating: 4, noOfRatings: 2003, author: 'Stephen Hawkings'},
              {style: {r: 100, g: 230, b: 50}, institutionName: 'Oxford University', courseName: 'Business Studies with Business English', rating: 2, noOfRatings: 403, author: 'Stephen Hawkings'},
              {style: {r: 200, g: 100, b: 20}, institutionName: 'Bristol University', courseName: 'Business Management', rating: 3, noOfRatings: 1044, author: 'Sally Gool'},
              {style: {r: 100, g: 100, b: 220}, institutionName: 'Cambirdge University', courseName: 'Business Studies', rating: 4, noOfRatings: 203, author: 'Stephen Hawkings'},
              {style: {r: 10, g: 100, b: 220}, institutionName: 'London School of Economics', courseName: 'Business Studies', rating: 5, noOfRatings: 7003, author: 'Stephen Hawkings'},
              {style: {r: 100, g: 10, b: 220}, institutionName: 'University of Edinbugh', courseName: 'Business Administration', rating: 3, noOfRatings: 209, author: 'Stephen Hawkings'},
              {style: {r: 100, g: 100, b: 22}, institutionName: 'Hull University', courseName: 'Business Studies', rating: 1, noOfRatings: 3003, author: 'Stephen Hawkings'},
             ].map((s) => <div className='search-result-item-container'><InstitutionCard data={s} /></div>)}
          </div>

        </div>
        <div className='wrapper-light-grey'>

          <DisplayBoard secondarytwo={InstitutionCard}/>
        </div>
      </div>
    )
  }
}

export default App;
