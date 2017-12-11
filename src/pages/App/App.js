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
import { nullTrack } from '../../assets/js/null_track';
import { demoTrack } from '../../assets/js/patterns'

class App extends Component {
  constructor(props) {
    super(props);

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
            BD: './assets/samples/Kick.wav',
            SD: './assets/samples/Snare.wav',
            CL: './assets/samples/Clap.wav',
            CA: './assets/samples/Clave.wav',
            LT: './assets/samples/LowTom.wav',
            CH: './assets/samples/ClosedHat.wav',
            OH: './assets/samples/OpenHat.wav',
            HT: './assets/samples/HighTom.wav'
          }
        }).toMaster();

        const steps = Array(32).fill(1).map((v, i) => {
          return i;
        });
        

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
