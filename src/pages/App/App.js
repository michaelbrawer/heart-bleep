
import React, {Component} from 'react';
// import logo from '../../logo.svg';
import {BrowswerRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Col, Row} from 'react-materialize'
//adds tone & WebMidi frameworks
import WebMidi from 'webmidi'
import Tone from 'tone';
//import App Components
import NavBar from '../../components/NavBar/NavBar';
import Sequencer from '../../components/Sequencer/Sequencer';
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

    this.state = {
      foo: 'bar'
    }

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