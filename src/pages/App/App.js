import React, { Component } from 'react';
// import logo from '../../logo.svg';
import {
  BrowswerRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {Col, Row} from 'react-materialize'
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

handleOnClockTick = (t0, t1, e = {args: null}) => {
  console.log('tick');
}

handleOnClockReset = () => {
  console.log('clock reset');
}


/*---------- Login Callback Methods ----------*/

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
        <NavBar user={this.state.user}
     handleLogout={this.handleLogout}
     />
      
          <Switch>
            <Route exact path='/' render={()=>
            <Sequencer 
            onClockTick={this.handleOnClockTick}
            onClockReset={this.handleOnClockReset}
            user={this.state.user}
            handleLogout={this.handleLogout}
            />}
            />
            <Route exact path='/signup' render={(props) => 
            <Row>
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
              </Row>
            }/>
            <Route exact path='/login' render={(props) => 
            <Row>
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
              </Row>
            }/>
          </Switch>
      </div>
    );
  }
}

export default App;
