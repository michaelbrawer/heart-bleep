import React from 'react';
// import {Link} from 'react-router-dom';
import './Sequencer.css'
import SequenceRow from '../../components/SequenceRow/SequenceRow';
import Transport from '../../components/Transport/Transport';

const Sequencer = (props) => {

  return (
    <div className="Sequencer">
    <SequenceRow />
    <SequenceRow />
    <SequenceRow />
    <SequenceRow />
    <Transport />
    </div>
  )
}

export default Sequencer;