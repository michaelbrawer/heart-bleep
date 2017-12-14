import React, {Component} from 'react';
// import logo from '../../logo.svg';
import {BrowswerRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
//import App Components
import NavBar from '../../components/NavBar/NavBar';
import Sequencer from '../../components/Sequencer/Sequencer';
//import pages
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
//import utils
import userService from '../../utils/userService';
//import styling
import {Col, Row} from 'react-materialize'
import './App.css';
//pattern assets
// TODO: Import nullTrack
import {nullTrack, demoTrack} from '../../components/assets/js/patterns'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
      // currentPattern: nullTrack
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

  componentWillMount(){
  }
  
  componentDidMount() {
    let user = userService.getUser(); this.setState({user});
    // let user = userService.getUser(); this.setState({user});
    // fetch(userService.getUser()).then((e) => this.setState({user: e}))
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
            render={(props) => <Row>
            <Sequencer
              {...props}
              user={this.state.user}
              />
          </Row>}/>
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