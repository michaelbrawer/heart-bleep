import React, {Component} from 'react';
import SequenceCell from '../SequenceCell/SequenceCell';
import './SequenceRow.css';
import {Col, Row, Input} from 'react-materialize'

const DEFAULT_RESOLUTION = 4;

const defaultPattern = () => {
  return {
    currentStep: -1,
    noteNumber: 66,
    steps: {
      0: {play: true, velocity: 100},
      1: null, 
      2: null,
      3: null, 
      4: null, 
      5: null,
      6: null,
      7: null
    }
  }
}

class SequenceRow extends Component {
  constructor(){
    super();
    this.state = Object.assign({
      selectedChannel: 1,
      selectedOutput: null,
      resolution: DEFAULT_RESOLUTION,
      patterns: [defaultPattern()]
    });
  }

  componentWillMount() {
    if (this.props.outputs && this.state.selectedOutput == null) {
      this.setState({selectedOutput: this.props.outputs[0]});
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.outputs && nextState.selectedOutput == null) {
      this.setState({selectedOutput: nextProps.outputs[0]});
    }
  }

  handleAddStep = (patternKey) => {
    this.updatePattern(patternKey, pattern => {
      let lastStep = 
      Object.keys(pattern.steps).length;
      pattern.steps[lastStep] = null;
      return pattern; 
    });
  }

  getPatterns (){
    let totalSteps = new
    Array(this.getLastStep())
  }

  render(){
  return (
    <div className="SequenceRow">
      <Row>
        <Col s={8}>
          <SequenceCell/>
        </Col>
        <Col s={2}>
          <Input
            s={12}
            type='select'
            // label='Materialize Select'
            icon='queue_music'
            defaultValue='2'>
            <option value='1'>Option 1</option>
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
}

export default SequenceRow;