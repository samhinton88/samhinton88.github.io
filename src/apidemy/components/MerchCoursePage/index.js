import React, { Component } from 'react';
import style from './style.css';

import ReviewCard from '../ReviewCard';
import Banner from '../Banner';

class MerchCoursePage extends Component {

  renderCourseStructure = () => {
    const { courseStructure } = this.props.data;

    return courseStructure.map((cs) => {
      return (
        <li className='course-structure-item' key={cs}>
          <i className='fas fa-certificate course-structure-bullet'/>
          <span className='course-structure-item-detail'>{cs}</span>
        </li>
      )
    })
  }

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
            <h2>Summary</h2>
            <p>{courseSummary}</p>
          </div>
          <div className='merch-course-page-body-right'>
            <h2>Course Structure</h2>
            <div className='course-structure-container'>
              <ul>
                {this.renderCourseStructure()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MerchCoursePage;
