import React, {Component} from 'react';
import './SequenceCell.css'
import {Col, Button} from 'react-materialize'

class SequenceCell extends Component {
  constructor() {
    this.state = Object.assign({});
  }
  render() {
    return (
      <Col s={1}>
        <div className="SequenceCell">X</div>
      </Col>
    )
  }
}

export default SequenceCell;