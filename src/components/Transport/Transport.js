import React, {Component} from 'react';
import WorkerTimer from 'worker-timer';
import {Button, Icon, CardPanel, Col, Row, Input} from 'react-materialize';
import WebAudioScheduler from 'web-audio-scheduler';
import StepRangeSlider from 'react-step-range-slider'
import Led from '../Led/Led';
import './Transport.css';

const DEFAULT_BPM = 60;
const SCHEDULER_INTERVAL = 0.025;
const SCHEDULER_AHEAD = 0.01;

var currentTick = 0;

// const noop = () => {}; 
// const TO_BIND = [   'handleBPMChange',   'tickTock',
// 'metronome',   'start',   'stop' ];

class Transport extends Component {
  constructor() {
    super();

    this.scheduler = null;

    // TO_BIND.forEach(method => {   this[method] = this[method].bind(this); });

    this.state = Object.assign({ 
      running: false,
      isMetronomeUp: false,
      isMetronomeDown: true,
      bpm: DEFAULT_BPM
    });
  }

  componentWillMount () {
    this.scheduler = new WebAudioScheduler({interval: SCHEDULER_INTERVAL, aheadTime: SCHEDULER_AHEAD, timerAPI: WorkerTimer});
  }

  componentWillUnmount() {
    this.stop();
  }

  handleBPMChange = (e)=> {
    this.setState({bpm: parseInt(e.target.value, 10)}, () => {
        this.scheduler.removeAll();
        this.scheduler.start(this.metronome);
    });
  }

  ticktock = (e) => {
    var t0 = e.playbackTime;
    var t1 = t0 + e.args.duration;
    // this.props.onClockTick(t0, t1, e);
    let isBeat = e.args.tick % 4 === 0;
    let isMeasure = e.args.tick % 16 === 0;
    // Visual Metronome
    if (e.args.tick % 8 === 0) {
      this.setState({isMetronomeUp: true, isMetronomeDown: false});
    } else if (isBeat){
      this.setState({isMetronomeUp: false, isMetronomeDown: true});
    }
  }

  metronome = (e) =>{
    let duration = parseFloat(((1000 / (this.state.bpm / 60) / 1000) / 4).toFixed(4));
    let t0 = e.playbackTime;
    let t1 = t0 + duration;
    //send tick and schedule next call
    this.scheduler.insert(t0, this.ticktock, {
        tick: currentTick++,
        duration: duration
      });
    this.scheduler.insert(t1, this.metronome);
  }

  start = () => {
    this.scheduler.start(this.metronome);
    // this.props.onClockStart();
    this.props.onClockTick();
    this.setState({running: true});
  }

  stop = () => {
    this.scheduler.stop({reset:true});
    // this.props.onClockStop();
    this.setState({running: false});
  }

  reset = () => {
    this.scheduler.stop(true);
    currentTick = 0;
    this.props.onClockReset();
    this.setState({
      isMetronomeUp: false,
      isMetronomeDown: false,
      running: false
    });
  }

  //Click Handlers(testing)

  render() {
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
            <Led visible={this.state.isMetronomeDown} bpm={this.state.bpm}/>
            <input 
              type="range" 
              min="20" 
              max="300"  
              value={this.state.bpm.toString()}
              onMouseDown={this.reset}
              onChange={this.handleBPMChange}
              onMouseUp={this.start}
            />
            </Col>
          </Row>
          
        </CardPanel>
      </div>
    )
  }
}


export default Transport;