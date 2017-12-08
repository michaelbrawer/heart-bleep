import React, { Component } from 'react';
import logo from '../../logo.svg';
import {
  BrowswerRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {Button, Icon, CardPanel, Col, Row, Footer} from 'react-materialize'
import Sequencer from '../Sequencer/Sequencer';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = Object.assign(
     {foo: "bar"}
    );

  }

/*---------- Helper Methods ----------*/

/*---------- Callback Methods ----------*/

handleLogout = () => {
  userService.logout();
  this.setState({user: null});
}

handleSignup = () => {
  this.setState({user: userService.getUser()});
}

handleLogin = () => {
  this.setState({user: userService.getUser()});
}

/*---------- Lifecycle Methods ----------*/

componentDidMount() {
  let user = userService.getUser();
  this.setState({user});
}
  render() {
    return (
      <div className="App">
      
          <Switch>
            <Route exact path='/' render={()=>
            <Sequencer 
            user={this.state.user}
            handleLogout={this.handleLogout}
            />}
            />
            <Route exact path='/signup' render={(props) => 
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
          </Switch>
      </div>
    );
  }
}

export default App;
