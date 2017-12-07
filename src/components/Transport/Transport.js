import React from 'react';
import Clock from '../Clock/Clock'
import './Transport.css';
import {Button, Icon} from 'react-materialize'

const Transport = (props) => {
  return(
    <div className="Transport">
      <Clock />
      <p>Transport:</p>
      <Button waves='light' className="grey"><i class="material-icons md-dark">arrow_back</i></Button>
      <Button waves='light'><i class="material-icons md-dark">play_arrow</i></Button>
      <Button waves='light' className="red TransportButton"><i class="material-icons md-dark">cancel</i></Button>
    </div>
  );
}

export default Transport;