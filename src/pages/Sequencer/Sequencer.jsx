import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './Sequencer.css'
import SequenceRow from '../../components/SequenceRow/SequenceRow';
import Transport from '../../components/Transport/Transport';

class Sequencer extends Component {

  render(){
  return (
    <div className="Sequencer">
    <SequenceRow />
    <SequenceRow />
    <SequenceRow />
    <SequenceRow />
    <Transport
      onClockTick={this.props.handleOnClockTick}
      onClockReset={this.props.handleOnClockReset}
    />
    </div>
  )
}
}

export default Sequencer;