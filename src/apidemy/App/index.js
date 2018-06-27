import React, { Component } from 'react';
import DisplayBoard from '../components/DisplayBoard';
import InstitutionCard from '../components/InstitutionCard';
import NavBarTop from '../components/NavBarTop';
import SearchFilterBar from '../components/SearchFilterBar';
import InstitutionPage from '../components/InstitutionPage';
import MerchCoursePage from '../components/MerchCoursePage';
import InternationalExperienceShop from '../components/InternationalExperienceShop';
import SearchResultList from '../components/SearchResultList';
import style from './style.css';

import {
  searchResultData,
  courseData,
  institutionData,
  shopSearchResultData
} from './dummy_data';


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
          <h2 className='value-proposition'>Education <span className='raise'>beyond</span> Borders</h2>
          <input className='search-bar' placeholder='search courses and schools...'/>

        </div>
        <div className='search-result-filter-bar-wrapper'>
          <SearchFilterBar options={['Business', 'Economics', 'Accountancy']}/>
        </div>



        <div className='search-result-container-wrapper'>
          <SearchResultList data={searchResultData} />
         {/* <div className='search-result-container'>
            {searchResultData.map((s) => <div className='search-result-item-container'><InstitutionCard data={s} /></div>)}
         </div>*/}

        </div>
        <div className='institution-page-container'>
          <InstitutionPage
            data={institutionData}
          />
        </div>
        <MerchCoursePage data={courseData}
          />
          <InternationalExperienceShop data={shopSearchResultData}/>






      </div>
    )
  }
}

export default App;
