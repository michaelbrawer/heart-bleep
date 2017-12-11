import React, {Component} from 'react';
import './SequenceCell.css'
import {Col, Button, Input, Row} from 'react-materialize'

class SequenceCell extends Component {
  render() {
    let {pattern, patternKey, totalSteps} = this.props;

    let steps = totalSteps.map((_, stepKey) => {
      if (pattern.steps[stepKey] === undefined) {
        let color = pattern.currentStep === stepKey
          ? "red"
          : "blue";

        return (
 
            <Button size="small" color={color} disabled={true}>ZZZ</Button>
      
        );
      }

      let color = pattern.steps[stepKey] != null
        ? "red"
        : "blue";

      if (pattern.currentStep === stepKey) {
        color = "primary";
      }

      return (
        
          <Button key={stepKey}  
                  size="small"
                  className={"StepButton"} 
                  onClick={this.props.onStepToggle.bind(null, patternKey, stepKey)}>
                  X
          </Button>
        
      );
    });

    return (
     <div>
     <Row>
          <Col s={3} key={patternKey}>
          <Button size="small" color="dark" onClick={this.props.onAddStep.bind(this, patternKey)}>
            +
          </Button>
          <Button size="small" color="default" disabled>{pattern.steps == null ? 0 : Object.keys(pattern.steps).length}</Button>
          <Button size="small" color="dark" onClick={this.props.onRemoveStep.bind(null, patternKey)}>
            -
          </Button>
          </Col>
        
        <Col s={1}>
          {/* <Input type="number" min="0" max="127"
                 value={pattern.noteNumber}
                 onChange={this.props.onPatternNoteChange.bind(null, patternKey)} 
                 /> */}
        </Col>
        <Col s={8}>{steps}</Col>
      </Row>
   
        </div>
    );
  }
}


export default SequenceCell;