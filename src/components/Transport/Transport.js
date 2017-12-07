import React, {Component} from 'react';
import Clock from '../Clock/Clock'
import './Transport.css';

const Transport = (props) => {
  return(
    <div className="Transport">
      <Clock />
      <p>Transport:</p>
      <button>play</button>
      <button>stop</button>
    </div>
  );
}

export default Transport;