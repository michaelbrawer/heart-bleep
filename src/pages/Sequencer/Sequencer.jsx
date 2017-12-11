import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import Transport from '../../components/Transport/Transport';
import './Sequencer.css'

class Sequencer extends Component {

  render(){
  return (
    <div className="Sequencer">
    {this.props.getSequencers({})}
    <Transport
      onClockTick={this.props.onClockTick}
      onClockReset={this.props.onClockReset}
    />
    </div>
  )
}
}

export default Sequencer;