import React from 'react';
import {Button, Icon, Col, Row} from 'react-materialize'
import './Transport.css';
import LoadSave from '../LoadSave/LoadSave'

const Transport = (props) => {
  return (
    <div className="drumrackbar">
        <div className="btns">
            <Row className="center-align">
              <Button
                onClick={props.handleSaveClick}
                waves='light'
                className="saveBtn">
                save
              </Button>
              <Button className='playBtn' onClick={props.playbutton_f} waves='light'>
                {/* <Icon className="material-icons md-dark">cancel</Icon> */}
                <Icon className="playI material-icons md-dark">play_arrow</Icon>
              </Button>
              <Button className="bpm-display grey">bpm: {props.bpm_num}</Button>
            </Row>
      </div>
      <Row className="tempoSlider">
        <input
          s={3}
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

export default Transport;