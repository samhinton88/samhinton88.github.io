import React, { Component } from 'react';
import style from './style.css';

const animationMap = {
  dragon: {
    start: 120,
    step: 80,
    startRadius: 120,
    radiusStep: -10,
    squeeze: 0,
    primaryOpacity: 0.9,
    fadeOut: -0.05,
    hasInner: true,
    innerOpacity: 0.2,
    circleCount: 12,
    lineCount: 1,
    isAnimated: true,
    speedMultiplier: 200,
    speedDiff: 0,
  },
  dna: {
    start: 10,
    step: 50,
    startRadius: 10,
    radiusStep: 0,
    squeeze: 0,
    primaryOpacity: 0.5,
    fadeOut: 0,
    hasInner: false,
    innerOpacity: 0.2,
    circleCount: 25,
    lineCount: 2,
    isAnimated: true,
    speedMultiplier: 50,
    speedDiff: 25,
    directionAlgorithm: 'flip'
  }
}

const colorMap = {
  lightblue: { r:0, g:101, b:176},
  bloodred: { r:200, g:20, b:20},
  green: { r: 20, g: 200, b: 20},
  pink: { r:231, g:64, b:118 }
}

class PrettyBanner extends Component {
  state = {
    clock: 0,
    forward: true,
    animationState: 'dragon',
    primaryColor: 'bloodred'
  }

  componentDidMount() {

    this.timer = setInterval(() => this.setState({clock: this.state.clock + 1}), 16);
  }

  componentWillUnmount() {

    clearInterval(this.timer);
  }

  renderText = () => {

  }

  renderColBtns = () => {
    return Object.keys(colorMap).map((col) => <button onClick={() => this.setState({primaryColor: col})}>{col}</button>)
  }

  renderAnimBtns = () => {
    return Object.keys(animationMap).map((anim) => <button onClick={() => this.setState({animationState: anim})}>{anim}</button>)
  }

  renderGraphics = () => {
    const {
      clock,
      animationState,
      primaryColor
    } = this.state;

    const {
      start,
      step,
      circleCount,
      lineCount,
      speedMultiplier,
      speedDiff,
      startRadius,
      primaryOpacity,
      radiusStep,
      squeeze,
      innerOpacity,
      hasInner,
      directionAlgorithm,
      fadeOut
    } = animationMap[animationState];

    const { r, g, b } = colorMap[primaryColor];
    let direction = 1;

    const circles = [];

    for (let i=0;i<lineCount;i++) {

      if((i + 1) % 2 === 0 && directionAlgorithm === 'flip') {

        direction = -1
      }

      for (let j=0;j<circleCount;j++) {

        const cx = start + (j * step),
              cy = 250 + (direction * (100 * Math.sin(j + ((clock / speedMultiplier) + (i * speedDiff) ) ))),
              rad  = startRadius + (radiusStep * j) + (Math.sin(clock / 200) * squeeze),
              fill = `rgba(${r}, ${g}, ${b}, ${primaryOpacity + (fadeOut * j)})`;

        circles.push(
          <circle cx={cx} cy={cy} r={rad} fill={fill}/>
        )

        if (hasInner) {
          circles.push(
            <circle
              cx={cx}
              cy={cy}
              r={rad - 50 + (radiusStep * i) + (Math.sin(clock / 200) * squeeze)}
              fill={`rgba(255, 255, 255, ${innerOpacity})`}
            />
          )
        }
      }
    }
    return circles.reverse();
  }

  render() {
    const { clock } = this.state;

    return (
      <div className='pretty-banner'>
        <div className='selectors'>
          <div className='animation-selection anim'>
            <h4>Choose an Animation</h4>
            {this.renderAnimBtns()}
          </div>
          <div className='color-selection anim'>
            <h4>Choose a Color</h4>
            {this.renderColBtns()}
          </div>
        </div>
        <svg className='pretty-banner-svg' viewbox='0 0 1000 500'>
          <g >
          {this.renderGraphics()}
          </g>
          {this.renderText()}
        </svg>
        <div className='pretty-banner-content'>

        </div>
      </div>
    )
  }
}

export default PrettyBanner;
