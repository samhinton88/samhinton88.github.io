import React, { Component } from 'react';
import style from './style.css';

const animationMap = {
  dragon: {
    start: 120,
    step: 80,
    startRadius: 120,
    radiusStep: -10,
    squeeze: 0,
    primaryOpacity: 0.7,
    fadeOut: 0,
    hasInner: true,
    innerOpacity: 0.1,
    circleCount: 12,
    lineCount: 1,
    isAnimated: true,
    speedMultiplier: 200,
    speedDiff: 0,
  },
  dna: {
    start: 10,
    step: 10,
    startRadius: 10,
    radiusStep: 0,
    squeeze: 0,
    primaryOpacity: 0.1,
    fadeOut: 0,
    hasInner: false,
    innerOpacity: 0.2,
    circleCount: 150,
    lineCount: 10,
    isAnimated: true,
    speedMultiplier: 50,
    speedDiff: 20,
    directionAlgorithm: 'flip'
  }
}

const colorMap = {
  lightblue: { r:0, g:101, b:176},
  bloodred: { r:200, g:20, b:20},
  green: { r: 20, g: 200, b: 20},
  pink: { r:231, g:64, b:118 },
  white: { r:255, g:255, b:255},
  transparent: undefined
}


class PrettyBanner extends Component {
  state = {
    clock: 0,
    forward: true,
    animationState: 'dragon',
    primaryColor: 'bloodred',
    speedAlteration: 0,
    value: '',
    header: '',
    background: 'transparent'
  }

  componentDidMount() {

    this.timer = setInterval(() => this.setState({clock: this.state.clock + 1}), 16);
  }

  componentWillUnmount() {

    clearInterval(this.timer);
  }

  renderText = () => {
    return this.state.header;
  }

  renderBtnStyle = (btn) => {
    const { btnStyles } = this.state;

    return btnStyles[btn];
  }

  renderColBtns = () => {
    const { btnStyles } = this.state;

    return Object.keys(colorMap).filter((i) => i !== 'transparent' ).map((col) => {
      return (
        <button
          onClick={() => this.setState({primaryColor: col})}
        >
          {col}
        </button>
      )
    })
  }

  renderBckBtns = () => {
    return Object.keys(colorMap).map((col) => {
      return (
        <button
          onClick={() => this.setState({background: col})}
        >
          {col}
        </button>
      )
    })
  }

  renderAnimBtns = () => {
    return Object.keys(animationMap).map((anim) => <button onClick={() => this.setState({animationState: anim})}>{anim}</button>)
  }

  renderGraphics = () => {
    const {
      clock,
      animationState,
      primaryColor,
      speedAlteration
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
              cy = 250 + (direction * (100 * Math.sin(j + ((clock / (speedMultiplier + speedAlteration)) + (i * speedDiff) ) ))),
              rad  = startRadius + (radiusStep * j) + (Math.sin(clock / 200) * squeeze),
              fill = `rgba(${r}, ${g}, ${b}, ${primaryOpacity + (fadeOut * j)})`;

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

        circles.push(
          <circle cx={cx} cy={cy} r={rad} fill={fill}/>
        )

      }
    }
    return circles.reverse();
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({header: this.state.value, value: ''})
  }

  renderBackgroundStyle = () => {
    return { background: this.state.background }
  }

  render() {
    const { clock, speedAlteration } = this.state;


    return (
      <div className='pretty-banner'>
        <h1>Animated Banner</h1>
        <svg className='pretty-banner-svg' viewbox='0 0 1000 500' style={this.renderBackgroundStyle()}>
          <g >
          {this.renderGraphics()}
          </g>
          <text
            className='user-inputted-header'
            x='500'
            y='250'
            style={['transparent','white'].includes(this.state.background)
                    ? {fill: 'black'}
                    : {fill: 'white'}}
          >
            {this.renderText()}
          </text>
        </svg>
        <div className='pretty-banner-content'>

        </div>
        <div className='selectors'>
          <div className='animation-selection anim'>
            <h4>Choose an Animation</h4>
            {this.renderAnimBtns()}
          </div>
          <div className='color-selection anim'>
            <h4>Choose a Color</h4>
            {this.renderColBtns()}
          </div>
          <div className='color-selection anim'>
            <h4>Choose a Background Color</h4>
            {this.renderBckBtns()}
          </div>
          <div className='color-selection anim'>
            <input
              onChange={(e) => this.handleChange(e)}
              value={this.state.value}
              placeholder='enter a header'
              className='user-header-input'
            />
            <button onClick={this.handleSubmit}>add header</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PrettyBanner;
