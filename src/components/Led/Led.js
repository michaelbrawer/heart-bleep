import React from 'react';

const Led =(props) => {

    let style = {
      fontSize: '24px',
      color: props.visible ? "#41abe0" : "#999"
    }
    return(
      <span>
      ●
      </span>
    )
}

export default Led;