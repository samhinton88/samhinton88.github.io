import React, { Component } from 'react';
import style from './style.css';
import InstitutionCard from '../InstitutionCard';
import ReviewCard from '../ReviewCard';
import { StarRating } from '../StarRating';
import RankingBox from '../RankingBox';

import InstitutionBadge from '../InstitutionBadge';

class InstitutionPage extends Component {

  renderTopCourses = () => {
    const { data: { courses }} = this.props;

    return courses.map((c, i) => <InstitutionCard key={i} data={c} />)
  }

  renderReviews = () => {
    const { data: {reviews}} = this.props;

    return reviews.map((r, i) => {
      return <ReviewCard data={r} key={i}/>
    })
  }


  render() {
    const { data: { badges, courses, rating }} = this.props;

    return (
      <div className='institution-page'>
        <div className='institution-page-header'>
          <div>
            <h3>University of Newcastle</h3>
            {<StarRating rating={rating} />}
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
            <h2>About</h2>
            <div className='institution-page-description-text-container'>
            <p>At Newcastle University, we have always focused on academic excellence and the impact of our academic work. Today, these long-held ideals are more relevant than ever. They define our vision for the University – the kind of university we wish to be.</p>
            </div>
          </div>
          <div className='institution-page-body-right institution-page-body-section'>
            <div className='ranking-name-group'>
              <h2>Ranking:</h2>
              <div className='ranking-type-picker'>National </div>
            </div>
            <RankingBox
              globalRanking={
                [
                  {institutionName: 'Cambridge University', ranking: 4},
                  {institutionName: 'Oxford University', ranking: 5},
                  {institutionName: 'Newcastle University', ranking: 6},
                  {institutionName: 'Durham University', ranking: 7},
                  {institutionName: 'Sheffield University', ranking: 8}
                ]
              }
              candidate={'Newcastle University'}
            />
          </div>
        </div>
        <div className='top-courses-wrapper'>
          <h2>Top Rated Courses</h2>
          <div className='top-courses-container'>
            {this.renderTopCourses()}
          </div>
        </div>
        <div className='institution-top-courses-container'>
          <h2>Reviews</h2>
          {this.renderReviews()}
        </div>
      </div>
    )
  }
}

export default InstitutionPage;
