import React, {Component} from 'react';
import WorkerTimer from 'worker-timer';
import {Button, Icon, CardPanel, Col, Row} from 'react-materialize';
import WebAudioScheduler from 'web-audio-scheduler';
import Led from '../Led/Led';
import './Transport.css';

const DEFAULT_BPM = 120;
const SCHEDULER_INTERVAL = 0.025;
const SCHEDULER_AHEAD = 0.01;

var currentTick = 0;

// const noop = () => {}; const TO_BIND = [   'handleBPMChange',   'tickTock',
// 'metronome',   'start',   'stop' ];

class Transport extends Component {
  constructor() {
    super();

    this.scheduler = null;

    // TO_BIND.forEach(method => {   this[method] = this[method].bind(this); });

    this.state = {
      running: false,
      isMetronomeUp: false,
      isMetronomeDown: false,
      bpm: DEFAULT_BPM
    };
  }

  componentWillMount() {
    this.scheduler = new WebAudioScheduler({interval: SCHEDULER_INTERVAL, aheadTime: SCHEDULER_AHEAD, timerAPI: WorkerTimer});
  }

  componentWillUnmount() {
    this.stop();
  }

  handleBPMChange = (e) => {
    this.setState({
      bpm: parseInt(e.target.value, 10)
    }, () => {});
  }

  tickTock = (e) => {
    //sets metronome high/low state
    var t0 = e.playbackTime;
    var t1 = t0 + e.args.duration;
    this
      .props
      .onClockTick(t0, t1, e);
    let isBeat = e.args.tick % 4 === 0;
    let isMeasure = e.args.tick % 16 === 0;
    // for metronome display
    if (e.args.tick % 8 === 0) {
      this.setState({isMetronomeUp: true, isMetronomeDown: false});
    } else if (isBeat) {
      this.setState({isMetronomeUp: false, isMetronomeDown: true});
    }
  }

  metronome = (e) => {
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
    this.props.onClockStar();
    this.setState({running: true});
  }

  stop = () => {
    this.scheduler.stop(true);
    this.props.onClockStop();
    this.setState({running: false});
  }

  //Click Handlers

  handlePlayClick = () => {
    alert('play');
  }

  handleStopClick = () => {
    alert('stop');
  }

  handleResetClick = () => {
    alert('reset');
  }

  render() {
    return (
      <div className="Transport">
        <Row>
          <Led visible={this.state.isMetronomeUp}/>
          <Led visible={this.state.isMetronomeDown}/>
        </Row>
        <Row>
          <Col s={6} className='grid-example'>
            <CardPanel className="grey lighten-4 black-text">
              <p>Transport:</p>
              <Button onClick={this.handleResetClick} waves='light' className="grey">
                <Icon className="material-icons md-dark">replay</Icon>
              </Button>
              <Button onClick={this.handlePlayClick} waves='light'>
                <Icon className="material-icons md-dark">play_arrow</Icon>
              </Button>
              <Button onClick={this.handleStopClick} waves='light' className="red TransportButton">
                <Icon className="material-icons md-dark">cancel</Icon>
              </Button>
            </CardPanel>
          </Col>
        </Row>
      </div>
    )
  }
}

// Transport.propTypes = {   onClockTick: React.PropTypes.func,   onClockStart:
// React.PropTypes.func,   onClockStop: React.PropTypes.func,   onClockReset:
// React.PropTypes.func }; Transport.defaultProps = {   onClockTick: noop,
// onClockStart: noop,   onClockStop: noop,   onClockReset: noop }

export default Transport;