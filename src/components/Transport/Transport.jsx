import React from 'react';
import {Button, Icon, Row} from 'react-materialize'
import './Transport.css';

const Transport = (props) => {
  return (
      <div className='transportCard' s={10}>
    <div className="drumrackbar">
        <div className="btns">
            <Row className="center-align">
              <Button
                onClick={props.handleSaveClick}
                waves='light'
                className="red saveBtn">
                save
              </Button>
              <Button className='blue playBtn' onClick={props.playbutton_f} waves='light'>
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
   </div>
  );
};

export default Transport;