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
