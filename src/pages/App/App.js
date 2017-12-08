import React, { Component } from 'react';
import logo from '../../logo.svg';
import {
  Switch,
  Route
} from 'react-router-dom';
import {Button, Icon, CardPanel, Col, Row, Footer} from 'react-materialize'
import Sequencer from '../Sequencer/Sequencer';
import NavBar from '../../components/NavBar/NavBar';

import userService from '../../utils/userService';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

  }

/*---------- Helper Methods ----------*/

/*---------- Callback Methods ----------*/

/*---------- Lifecycle Methods ----------*/


/*---------- Render ----------*/

  render() {
    return (
      <div className="App">
        <NavBar />
          <Switch>
            <Route exact path='/' render={()=><Sequencer />}/>
          </Switch>
      </div>
    );
  }
}

export default App;
