import React, { Component } from 'react';
import logo from '../../logo.svg';
import {
  Switch,
  Route
} from 'react-router-dom';
import {Navbar, NavItem, Button, Icon, CardPanel, Col, Row, Footer} from 'react-materialize'
import Sequencer from '../Sequencer/Sequencer';

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
        <Navbar className="HeaderFooter" brand='HeartBeep' right>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
          <Switch>
            <Route exact path='/' render={()=><Sequencer />}/>
          </Switch>

      </div>
    );
  }
}

export default App;
