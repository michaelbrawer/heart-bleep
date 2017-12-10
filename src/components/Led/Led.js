import React from 'react';

const Led =(props) => {

    let style = {
      fontSize: '24px',
      color: props.visible ? "blue" : "red"
    }
    return(
      <span style={style}>
      ●
      </span>
    )
}

export default Led;