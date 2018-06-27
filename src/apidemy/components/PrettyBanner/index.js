import React, { Component } from 'react';
import style from './style.css';

class PrettyBanner extends Component {
  state = {
    clock: 0,
    forward: true
  }

  componentDidMount() {

    this.timer = setInterval(() => this.setState({clock: this.state.clock + 1}), 16);
  }

  componentWillUnmount() {

    clearInterval(this.timer);
  }

  renderGraphics = () => {
    const { clock } = this.state;


    const circles = [];

    for (let i=0;i<20;i++) {
      circles.push(
        <circle cx={100 + (i * 50)} cy={250 + (100 * Math.sin(i + (clock) / 300))} r={100 - (i * 8)} fill='rgba(0, 101, 176, 0.5)'/>
      )
      circles.push(
        <circle cx={100 + (i * 50)} cy={250 + (100 * Math.sin(i + (clock) / 300))} r={50 - (i * 3)} fill='rgba(255, 255, 255, 0.5)'/>
      )
    }
    return circles.reverse();
  }

  render() {

    return (
      <div className='pretty-banner'>
        <svg className='pretty-banner-svg' viewbox='0 0 1000 500'>
          {this.renderGraphics()}
          <p>test</p>
        </svg>
      </div>
    )
  }
}

export default PrettyBanner;
