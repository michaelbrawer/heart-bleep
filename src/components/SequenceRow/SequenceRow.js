import React, {Component} from 'react';
import SequenceCell from '../SequenceCell/SequenceCell';
import {Col, Row, Input, Dropdown} from 'react-materialize'
import WebMidi from 'webmidi';
import './SequenceRow.css';

const GRACE_NOTE_OFF = 100;
const RESOLUTIONS = {
  1: "1/16",
  2: "1/8",
  4: "1/4",
  16: "1 Bar"
}
const DEFAULT_RESOLUTION = 4;

const defaultPattern = () => {
  return{
    currentStep: -1,
    noteNumber: 66,
    steps: {
      0: {play: true, velocity: 100},
      1: null,
      2: null,
      3: null,
      4: {play: true, velocity: 100},
      5: null,
      6: null,
      7: null
    }
  }
};

class SequenceRow extends Component {
  constructor(){
    super();

    this.handleAddStep = this.handleAddStep.bind(this)
    this.handlePatternNoteChange = this.handlePatternNoteChange.bind(this)
    this.handleRemoveStep = this.handleRemoveStep.bind(this)
    this.handleResolutionChange = this.handleResolutionChange.bind(this)
    this.handleStepToggle = this.handleStepToggle.bind(this)
    this.onClockTick = this.onClockTick.bind(this)

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

  handleAddStep(patternKey){
    this.updatePattern(patternKey, pattern => {
      let lastStep = Object.keys(pattern.steps).length;
      pattern.steps[lastStep] = null;
      return pattern;
    });
  }

  handleRemoveStep(patternKey){
    this.updatePattern(patternKey, pattern => {
      let lastStep =
      Object.keys(pattern.steps).length;
      if (lastStep > 1){
        delete pattern.steps[lastStep -1];
      }
      return pattern;
    });
  }

  handleStepToggle(patternKey, stepKey){
    // console.log(pattern);
    console.log(`StepKey: ${stepKey}`);
    console.log(`patternKey:${patternKey}`)
    this.updatePattern(patternKey, pattern => {
      if (pattern.steps != null && pattern.steps[stepKey] !== undefined) {
        pattern.steps[stepKey] = pattern.steps[stepKey] == null
          ? {play: true, velocity: 1}
          : null;
      }
      return pattern;
    });
  }

  handlePatternNoteChange(patternKey, e){
    this.updatePattern(patternKey, pattern => {
      pattern.noteNumber = parseInt(e.target.value, 10);
      return pattern;
    });
  }

  updatePattern(patternKey, callback = () => {}){
    let newState = Object.assign({}, this.state);
    let pattern = Object.assign({}, newState.patterns[patternKey]);

    if (pattern != null) {
      newState.patterns[patternKey] = callback(pattern);
      this.setState(newState);
    }
  }

  handleResolutionChange(value){
    this.setState({resolution: value});
  }

  getLastStep(){
    return this.state.patterns.reduce(function(memo, pattern){
      return Math.max(Object.keys(pattern.steps).length, memo);
    }, 0);
  }

  onClockTick = (t0, t1, e) => {
    // Skip if outside of resolution

    if (e.args.tick % this.state.resolution !== 0) {
      return;
    }

    let newState = Object.assign({}, this.state);
    let {selectedOutput, selectedChannel} = this.state;
    let notes = [];

    // Set individual pattern steps
    newState.patterns.forEach(pattern => {
      if (pattern.steps != null) {
        let nextStep = parseInt(pattern.currentStep, 10) + 1;
        let lastStep = Object.keys(pattern.steps).length;

        // TODO avoid direct state mutation!
        pattern.currentStep = lastStep > 0
          ? nextStep % lastStep
          : 0;

        // Reset steps every 32 ticks
        if (e.args.tick % 32 === 0) {
          pattern.currentStep = 0;
        }

        // Got note?
        let activeStep = pattern.steps[pattern.currentStep];

        if (activeStep != null) {
          notes.push(pattern.noteNumber);
        }
      }
    });

    if (notes.length && selectedOutput != null) {
      let duration = parseInt(e.args.duration * 1000, 10);
      selectedOutput.playNote(
        notes,
        selectedChannel,
        {
          duration: WebMidi.time + duration - GRACE_NOTE_OFF,
          velocity: 0.8
        }
      );
    }
    this.setState(newState);
  }

  onClockReset = () => {
    // TODO immutability
    let newState = Object.assign({}, this.state);
    newState.patterns.forEach(pattern => { pattern.currentStep = -1;});
    this.setState(newState);
  }

  getPatterns(){
    let totalSteps = new Array(this.getLastStep()).fill(true);
    
    return this.state.patterns.map((pattern, patternKey) => {
      console.log(pattern)
      console.log(patternKey)
      return (
        <SequenceCell key={patternKey}
                              onAddStep={this.handleAddStep}
                              onRemoveStep={this.handleRemoveStep}
                              onPatternNoteChange={this.handlePatternNoteChange}
                              onStepToggle={this.handleStepToggle}
                              totalSteps={totalSteps}
                              pattern={pattern}
                              patternKey={patternKey}/>
      );
    });
  }
  render(){
    
  return (
    <div className="SequenceRow">
      <Row>
        <Col s={10}>
          {this.getPatterns()}
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
      </Row>
    </div>
  )
}
}

export default SequenceRow;