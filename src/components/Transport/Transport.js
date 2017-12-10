import React, {Component} from 'react';
import WorkerTimer from 'worker-timer';
import {Button, Icon, CardPanel, Col, Row} from 'react-materialize'
import './Transport.css';

const defaultBpm = 120;
const toBind = [];

class Transport extends Component {
  constructor() {
    super();
    this.scheduler = null;

    TO_BIND.forEach(method => {this[method] = this[method].bind(this);
    });

    this.state = {
      running: false,
      IsMetronomeUp: false,
      IsMetronomeDown: false,
      bpm: default_BPM
    };
  }

  componentWillMount(){
    this.stop();
  }

  handleBPMChange(e){
    this.setState({bpm: parseInt(e.target.value, 10)}, () => {});
  }

  ticktock(e){
    var t0 = e.playbackTime;
    var t1 = t0 + e.args.duration;

    this.props.onClockTick(t0, t1, e);
    
    let isBeat = e.args.tick % 4 === 0;
    let isMeasure = e.args.tick % 16 === 0;
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