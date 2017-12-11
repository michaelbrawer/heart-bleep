import React, {Component} from 'react';
// import logo from '../../logo.svg';
import {BrowswerRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Col, Row} from 'react-materialize'
//adds tone & WebMidi frameworks
import WebMidi from 'webmidi'
import Tone from 'tone';
//import App Components
import NavBar from '../../components/NavBar/NavBar';
import SequenceRow from '../../components/SequenceRow/SequenceRow';
//import pages
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
//import utils
import userService from '../../utils/userService';
//import styling
import './App.css';
//pattern assets
import { nullTrack } from '../../components/assets/js/null_track';
import { demoTrack } from '../../components/assets/js/patterns';
import PositionTransform from '../../components/assets/js/position';

class App extends Component {
  constructor(props) {
    super(props);

    // this.abswitch = this.abswitch.bind(this);
    // this.updatePattern = this.updatePattern.bind(this);
    this.startStop = this.startStop.bind(this);
    this.changeTempo = this.changeTempo.bind(this);
    // this.changeVolume = this.changeVolume.bind(this);
    this.clearPattern = this.clearPattern.bind(this);
    this.positionMarker = this.positionMarker.bind(this);

    this.state = {
      bpm: 120,
      position: 0,
      volume: -6,
      playing: false,
      bPattern: false,
      currentPattern: demoTrack
    }

    this.sampleOrder = ['BD', 'SD', 'CL', 'CA', 'LT', 'CH', 'OH', 'HT'];
    
        const multSampler = new Tone.MultiPlayer({
          urls: {
            BD: 'https://dl.dropboxusercontent.com/s/rjdruv4d55l7q7f/60H2.mp3?dl=1',
            SD: 'https://dl.dropboxusercontent.com/s/lkipjekblqr43gk/60H1.mp3?dl=1',
            CL: 'https://dl.dropboxusercontent.com/s/vk8z6jwbnlubooz/60H3.mp3?dl=1',
            CA: 'https://dl.dropboxusercontent.com/s/sy394rdoyk03l25/60H4.mp3?dl=1',
            LT: 'https://dl.dropboxusercontent.com/s/w326tg4f3egg9id/60sWin.mp3?dl=1',
            CH: 'https://dl.dropboxusercontent.com/s/2mztl3bqmsds7aw/60sLoseLong.mp3?dl=1',
            OH: 'https://dl.dropboxusercontent.com/s/g96ez1oxzo4p9z3/70sHi1.mp3?dl=1',
            HT: 'https://dl.dropboxusercontent.com/s/v1agv03lkjqj9cu/70sHi2.mp3?dl=1'
          }
        }).toMaster();

        const steps = Array(32).fill(1).map((v, i) => {
          return i;
        });

        const getColumns = (track) => {
          const result = [];
          for (let i = 0; i < 32; i += 1) {
            result.push(track.map((v, idx) => { return v[i] ? this.sampleOrder[idx] : null }).filter(v => v));
          }
          return result;
        };
    
        this.columnPattern = getColumns(this.state.currentPattern);

        this.playSeq = new Tone.Sequence((time, value) => {
          this.columnPattern[value].forEach((v) => { return multSampler.start(v, time, 0, '16n', 0);});
        }, steps, '16n');
    
        this.playSeq.start();
        this.playSeq.loop = true;
    
        Tone.Transport.setLoopPoints(0, '2m');
        Tone.Transport.loop = true;
        Tone.Transport.scheduleRepeat(this.positionMarker, '16n');
        Tone.Transport.bpm.value = this.state.bpm;
        Tone.Master.volume.value = this.state.volume;
  }

  clearPattern() {
    this.setState({ currentPattern: nullTrack });
  }

  positionMarker() {
    this.setState({ position: PositionTransform[Tone.Transport.position.slice(0, 5)] });
  }

  startStop() {
    if (this.state.playing) {
      Tone.Transport.stop();
      this.setState({ playing: false });
    }
    else {
      Tone.Transport.start('+0.25');
      this.setState({ playing: true });
    }
  }

  changeTempo(e) {
    let newTempo = parseInt(e.currentTarget.value, 10);
    if (isNaN(newTempo)) {
      newTempo = 10;
    }
    if (newTempo > 200) {
      newTempo = 200;
    }
    Tone.Transport.bpm.value = newTempo;
    this.setState({ bpm: newTempo });
  }

  /*---------- Login Callback Methods ----------*/

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  handleLogin = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  /*---------- Render ----------*/
  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>

        <Switch>
          <Route
            exact
            path='/'
            render={(props) => 
            <div>
              A Drum Machine Will Go Here:
              </div>
            }
            />
          <Route
            exact
            path='/signup'
            render={(props) => <Row>
            <SignupPage {...props} handleSignup={this.handleSignup}/>
          </Row>}/>
          <Route
            exact
            path='/login'
            render={(props) => <Row>
            <LoginPage {...props} handleLogin={this.handleLogin}/>
          </Row>}/>
        </Switch>
      </div>
    );
  }

}

export default App;
