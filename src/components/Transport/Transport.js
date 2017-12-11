import React, {Component} from 'react';
import WorkerTimer from 'worker-timer';
import {Button, Icon, CardPanel, Col, Row} from 'react-materialize';
import WebAudioScheduler from 'web-audio-scheduler';
import Led from '../Led/Led';
import './Transport.css';

const Transport = (props) => {
    return (
      <div className="Transport">
        <CardPanel s={6} className="grey lighten-4 black-text">
        <Row>
            <Col s={6} className='grid-example'>
              <p>Transport:</p>
              <Button onClick={this.reset} waves='light' className="grey">
                <Icon className="material-icons md-dark">replay</Icon>
              </Button>
              <Button onClick={this.start} waves='light'>
                <Icon className="material-icons md-dark">play_arrow</Icon>
              </Button>
              <Button onClick={this.stop} waves='light' className="red TransportButton">
                <Icon className="material-icons md-dark">cancel</Icon>
              </Button>
            </Col>
           </Row>
          <Row>
            <Col s={4}>
            {/* <Led visible={this.state.isMetronomeUp}/> */}
            {/* <Led visible={this.state.isMetronomeDown} bpm={this.state.bpm}/> */}
            <input 
              type="range" 
              min="20" 
              max="300"  
              value={props.bpm}
              onChange={}
            />
            </Col>
          </Row>
         
        </CardPanel>
      </div>
    );
}

export default Transport;