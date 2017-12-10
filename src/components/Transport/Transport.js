import React, {Component} from 'react';
import WorkerTimer from 'worker-timer';
import {Button, Icon, CardPanel, Col, Row} from 'react-materialize';
import WebAudioSchedular from 'web-audio-scheduler';
import './Transport.css';

const DEFAULT_BPM = 120;
const SCHEDULAR_INTERVAL = 0.025;
const SCHEDULAR_AHEAD = 0.01;

var currentTick = 0;

const toBind = [
  'handleBPMChange',
  'tickTock',
  'metronome',
  'start',
  'stop',
  'reset'
];

class Transport extends Component {
  constructor() {
    super();
    this.scheduler = null;

    TO_BIND.forEach(method => {this[method] = this[method].bind(this);
    });

    this.state = {
      running: false,
      isMetronomeUp: false,
      isMetronomeDown: false,
      bpm: default_BPM
    };
  }

  componentWillMount(){
    this.stop();
  }

  handleBPMChange(e){
    this.setState({bpm: parseInt(e.target.value, 10)}, () => {});
  }

  tickTock(e){
    //sets metronome high/low state
    var t0 = e.playbackTime;
    var t1 = t0 + e.args.duration;
    this.props.onClockTick(t0, t1, e);
    let isBeat = e.args.tick % 4 === 0;
    let isMeasure = e.args.tick % 16 === 0;
    // for metronome display
    if (e.args.tick % 8 ===0){
      this.setState({isMetronomeUp: true, isMetronomeDown: false});
    } else if (isBeat){
      this.setState({isMetronomeUp: false, isMetronomeDown: true});
    }
  }

  render() {
    return (
      <Row>
        <div className="Transport">
          <Col s={6} className='grid-example'>
            <CardPanel className="grey lighten-4 black-text">
              <p>Transport:</p>
              <Button waves='light' className="grey">
                <Icon className="material-icons md-dark">replay</Icon>
              </Button>
              <Button waves='light'>
                <Icon className="material-icons md-dark">play_arrow</Icon>
              </Button>
              <Button waves='light' className="red TransportButton">
                <Icon className="material-icons md-dark">cancel</Icon>
              </Button>
            </CardPanel>
          </Col>

        </div>
      </Row>
    )
  }
}

export default Transport;