import React, {Component} from 'react';
import SequenceCell from '../SequenceCell/SequenceCell';
import {Col, Row, Input, Dropdown} from 'react-materialize'
import WebMidi from 'webmidi';
import './SequenceRow.css';

const SequenceRow = (props) => {
  function makeRow(v, i) {
    return (
      <div>
        X
      </div>
    )
  }
  return (
    <div className="sequencerrow">Y
      {props.channel.map(makeRow, this)}
    </div>
  );
}

export default SequenceRow;