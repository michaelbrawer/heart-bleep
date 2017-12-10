import React from 'react';

const Led =(props) => {
    let style = {
      fontSize: '24px'
    }

    let flashStyle = {
      fontSize: '24px',
      color: props.visible ? "blue" : "red",
      transition: `all ${props.bpm/60/10}s`
    }
    return(
      <div>
      <span style={style}>BPM:</span>
      <span style={flashStyle}>{props.bpm}</span>
      </div>
    )
}

export default Led;