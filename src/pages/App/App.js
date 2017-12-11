import React, {Component} from 'react';
// import logo from '../../logo.svg';
import {BrowswerRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Col, Row} from 'react-materialize'
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
  }

  //Generates Four Sequencer Rows

  getSequencers = () => {
    console.log('got sequencers')
    return this.state.sequencers.map(definition => {
        let Sequencer = definition.component;
        let ref = definition.ref;
        return (
        <Sequencer
          ref={ref}
          key={ref}
          id={ref}
          outputs={this.state.outputs}
          onNoteOn={this.handleNoteOn}
          onNoteOff={this.handleNoteOff}
          />
        );
    });
  }

  /*---------- Sequencer Clock Address Methods ----------*/

  handleOnClockTick = (t0, t1, e = {args: null}) => {
    this.state.sequencers.forEach(definition => {this.refs[definition.ref].onClockTick(...arguments);
    });
  }

  handleOnClockReset = () =>{
    this.state.sequencers.forEach(definition => {this.refs[definition.ref].onClockReset(...arguments);
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
