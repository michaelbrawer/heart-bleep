import React, {PropTypes} from 'react';
import Toggle from '../Toggle/Toggle';
import {
  Button,
  Icon,
  CardPanel,
  Col,
  Row,
  Input
} from 'react-materialize'

const Transport = (props) => {
  return (
    <div className="drumrackbar">
    <Row>
      <div className="drumracklabel">HeartBleep</div>
      {/* <Toggle abfunc={props.toggle_f} /> */}
      <div className="bpmplaybar">
        {/* <input
          type="number"
          className="tempolabel"
          onChange={props.tempo_f}
          value={props.bpm_num}/> */}
      </div>
      <Button onClick={this.stop} waves='light' className="red TransportButton">
        SAVE
      </Button>
      
        <Button onClick={props.playbutton_f} waves='light'>
          <Icon className="material-icons md-dark">cancel</Icon>
          <Icon className="material-icons md-dark">play_arrow</Icon>
        </Button>
        <span className="tempolabel">{props.bpm_num}</span>
        <input
          type="range"
          onChange={props.tempo_f}
          value={props.bpm_num}
          id="test5"
          min="0"
          max="200"/>
      </Row>
    </div>
  );
};

// playBar.propTypes = {   bpm_num: PropTypes.number.isRequired,   toggle_f:
// PropTypes.func.isRequired,   tempo_f: PropTypes.func.isRequired,
// playbutton_f: PropTypes.func.isRequired };

export default Transport;