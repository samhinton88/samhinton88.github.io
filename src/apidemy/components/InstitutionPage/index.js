import React, { Component } from 'react';
import style from './style.css';
import InstitutionCard from '../InstitutionCard';

import InstitutionBadge from '../InstitutionBadge';

class InstitutionPage extends Component {

  renderTopCourses = () => {
    const { data: { courses }} = this.props;

    return courses.map((c, i) => <InstitutionCard key={i} data={c} />)
  }


  render() {
    const { data: { badges, courses }} = this.props;

    return (
      <div className='institution-page'>
        <div className='institution-page-header'>
          <div>
            <h3>University of Newcastle</h3>
            <h5>Newcastle, Tyne and Wear</h5>
          </div>
          <div className='institution-page-header-badges'>
            <div className='badge-container'>
              {badges.map((b, i) => <InstitutionBadge key={i + b} badge={b} />)}
            </div>
          </div>

        </div>
        <div className='institution-page-body'>
          <div className='institution-page-body-left institution-page-body-section'>
            <h2>Description</h2>
            <div className='institution-page-description-text-container'>
            <p>At Newcastle University, we have always focused on academic excellence and the impact of our academic work. Today, these long-held ideals are more relevant than ever. They define our vision for the University – the kind of university we wish to be.</p>
            </div>
          </div>
          <div className='institution-page-body-right institution-page-body-section'>


          </div>
        </div>
        <div className='top-courses-wrapper'>
          <h2>Top Rated Courses</h2>
          <div className='top-courses-container'>
            {this.renderTopCourses()}
          </div>
        </div>
        <div className='institution-page-reviews'>
          <h2>Reviews</h2>
        </div>
      </div>
    )
  }
}

export default InstitutionPage;
