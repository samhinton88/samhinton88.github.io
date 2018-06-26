import React, { Component } from 'react';
import DisplayBoard from '../components/DisplayBoard';
import InstitutionCard from '../components/InstitutionCard';
import NavBarTop from '../components/NavBarTop';
import SearchFilterBar from '../components/SearchFilterBar';
import InstitutionPage from '../components/InstitutionPage';
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
          <span className='value-proposition'>Education beyond Borders</span>
          <input className='search-bar' placeholder='search courses and schools...'/>

        </div>
        <div className='search-result-filter-bar-wrapper'>
          <SearchFilterBar />
        </div>



        <div className='search-result-container-wrapper'>
          <div className='search-result-container'>
            {[
              {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Oxford University', courseName: 'Business Studies', rating: 4, noOfRatings: 2003, author: 'Alice Stevens'},
              {style: {r: 200, g: 100, b: 100}, institutionName: 'University of Exeter', courseName: 'Business Studies', rating: 4, noOfRatings: 2003, author: 'Melanie Green'},
              {style: {r: 100, g: 230, b: 50}, isTop: true, institutionName: 'Oxford University', courseName: 'Business Studies with Business English', rating: 2, noOfRatings: 403, author: 'Stephen Hawkings'},
              {style: {r: 200, g: 100, b: 20}, institutionName: 'Bristol University', courseName: 'Business Management', rating: 3, noOfRatings: 1044, author: 'Sally Gool'},
              {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Cambirdge University', courseName: 'Business Studies', rating: 4, noOfRatings: 203, author: 'Stephen Hawkings'},
              {style: {r: 10, g: 100, b: 220}, institutionName: 'London School of Economics', courseName: 'Business Studies', rating: 5, noOfRatings: 7003, author: 'Jennifer Williams'},
              {style: {r: 100, g: 10, b: 220}, institutionName: 'University of Edinbugh', courseName: 'Business Administration', rating: 3, noOfRatings: 209, author: 'William Boole'},
              {style: {r: 100, g: 220, b: 22}, institutionName: 'Hull University', courseName: 'Business Studies', rating: 1, noOfRatings: 3019, author: 'Sarah Hawks'},
             ].map((s) => <div className='search-result-item-container'><InstitutionCard data={s} /></div>)}
          </div>

        </div>
        <div className='institution-page-container'>
          <InstitutionPage
            data={
              {
                badges: ['satisfied', 'leader'],
                rating: 5,
                courses: [
                  {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Newcastle University', courseName: 'Business Studies', rating: 4, noOfRatings: 300, author: 'Ian Jones'},
                  {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Newcastle University', courseName: 'Medicine', rating: 5, noOfRatings: 2009, author: 'Will Bower'},
                  {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Newcastle University', courseName: 'Law', rating: 4, noOfRatings: 376, author: 'Sally Jennings'},
                ],
                reviews: [
                  {
                    author: 'Sam Hinton',
                    title: 'Really qualified teachers',
                    content:
                      `I came here for a short course about business and I loved it.
                      The staff were extremely helpful and I was able to learn a lot about
                      the world of business. The best thing about the course was the lecturers,
                      they were very well qualified and I alwas felt like I was getting value for money.
                      I have enrolled on their second level business course and I can't wait to start
                      in September.`,
                    rating: 5, courseName: 'Business'
                  }
                ]
              }
            }
          />
        </div>




      </div>
    )
  }
}

export default App;
