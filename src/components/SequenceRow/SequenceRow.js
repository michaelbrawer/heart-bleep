import React from 'react';
import SequenceCell from '../SequenceCell/SequenceCell';
import './SequenceRow.css';
import {Button, Icon, CardPanel, Col, Row} from 'react-materialize'

const SequenceRow = (props) => {

  return (
    <div className="SequenceRow">
      <Row>
        <Col s={10}>
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        <SequenceCell />
        </Col>
      </Row>
    </div>
  )
}

export default SequenceRow;