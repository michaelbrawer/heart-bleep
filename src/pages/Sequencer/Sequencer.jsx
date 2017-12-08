import React from 'react';
import {Link} from 'react-router-dom';
import './Sequencer.css'
import SequenceRow from '../../components/SequenceRow/SequenceRow';
import Transport from '../../components/Transport/Transport';
import NavBar from '../../components/NavBar/NavBar'

const Sequencer = (props) => {

  return (
    <div className="Sequencer">
    <NavBar user={props.user}
     handleLogout={props.handleLogout}
     />
    <SequenceRow />
    <SequenceRow />
    <SequenceRow />
    <SequenceRow />
    <Transport />
    </div>
  )
}

export default Sequencer;