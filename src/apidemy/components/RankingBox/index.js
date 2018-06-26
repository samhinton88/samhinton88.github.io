import React, { Component } from 'react';
import style from './style.css';

class RankingBox extends Component {

  renderRanks = () => {
    const { globalRanking, candidate } = this.props;



    return globalRanking.map((r, i) => {
      const classActive = r.institutionName === candidate
                ? ' active'
                : '';
      // hack
      const absDist = Math.abs(2 - i)

      const nearToThird = 1 / Math.abs(2 - i);
      const scale = 1 - (absDist / 10)


      console.log(r.institutionName,scale)

      return (
        <div
          className={'ranking-row' + classActive}
          style={
            {
              color: `rgba(0, 0, 0, ${nearToThird} )`,
              transform: `scale(${scale })`
            }
          }>
          <div>
            {r.institutionName}
          </div>
          <div>
            {r.ranking}

          </div>
        </div>)
    })
  }

  render() {
    const { globalRanking, candidate } = this.props;

    return (
      <div className='ranking-box'>
        {this.renderRanks()}
      </div>
    )
  }
}

export default RankingBox;
