import React, { Component } from 'react';
import DisplayBoard from '../components/DisplayBoard';
import InstitutionCard from '../components/InstitutionCard';
import NavBarTop from '../components/NavBarTop';
import SearchFilterBar from '../components/SearchFilterBar';
import InstitutionPage from '../components/InstitutionPage';
import MerchCoursePage from '../components/MerchCoursePage';
import InternationalExperienceShop from '../components/InternationalExperienceShop';
import SearchResultList from '../components/SearchResultList';
import PrettyBanner from '../components/PrettyBanner';

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

        <PrettyBanner />
      </div>
    )
  }
}

export default App;
