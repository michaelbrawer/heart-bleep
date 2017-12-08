import React from 'react';
import SequenceCell from '../SequenceCell/SequenceCell';
import './SequenceRow.css';
import {Col, Row, Input} from 'react-materialize'

const SequenceRow = (props) => {

  return (
    <div className="SequenceRow">
      <Row>
        <Col s={8}>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
          <SequenceCell/>
        </Col>
        <Col s={2}>
          <Input
            s={12}
            type='select'
            // label='Materialize Select'
            icon='queue_music'
            defaultValue='2'>
            <option  value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </Input>
        </Col>
        <Col s={2}>
          <Input
            s={12}
            type='select'
            // label='Materialize Select'
            icon='settings_input_svideo'
            defaultValue='2'>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </Input>
        </Col>
      </Row>
    </div>
  )
}

export default SequenceRow;