import React from 'react';
import {Button, Icon, Col, Row} from 'react-materialize'
import './Transport.css';
import LoadSave from '../LoadSave/LoadSave'

const Transport = (props) => {
  return (
    <div className="drumrackbar">
      <Row>
        <div className="drumracklabel">HeartBleep</div>
        <Col>
          <Button
            onClick={props.clearPattern}
            waves='light'
            className="grey darken-3 TransportButton">
            Clear
          </Button>
          <Button className='blue' onClick={props.playbutton_f} waves='light'>
            <Icon className="material-icons md-dark">cancel</Icon>
            <Icon className="material-icons md-dark">play_arrow</Icon>
          </Button>
          <Button className="bpm-display disabled">BPM:{props.bpm_num}</Button>
          <input
            s={3}
            type="range"
            onChange={props.tempo_f}
            value={props.bpm_num}
            id="test5"
            min="0"
            max="200"/>
        </Col>
        <Col>
          <LoadSave
            user={props.user}
            loadPattern={props.loadPattern}
            handleSaveClick={props.handleSaveClick}/>
        </Col>
      </Row>
    </div>
  );
};

export default Transport;