import React, {Component} from 'react';
import './Transport.css';

const Transport = (props) => {
  return(
    <div className="Transport">
      <p>Transport:</p>
      <button>play</button>
      <button>stop</button>
    </div>
  );
}

export default Transport;