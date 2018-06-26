import React, { Component } from 'react';
import style from './style.css';

import Banner from '../Banner';

class MerchCoursePage extends Component {



  render() {
    const {
      courseSummary,
      courseStructure,
      courseName,
      institutionName,
      rating,
      price
    } = this.props.data;

    return (
      <div className='merch-course-page'>
        <Banner
          data={
            {
              header: courseName,
              subHeader: institutionName,
              rating,
              price
            }
          }
        />
        <div className='merch-course-page-body'>
          <div className='merch-course-page-body-left'>
            <p>{courseSummary}</p>
          </div>
          <div className='merch-course-page-body-right'>
            <p>{courseStructure}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MerchCoursePage;
