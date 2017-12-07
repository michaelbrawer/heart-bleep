import React, { Component } from 'react';
import logo from '../../logo.svg';
import {
  Switch,
  Route
} from 'react-router-dom';
import Sequencer from '../Sequencer/Sequencer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">heartBLEEP</header>
          <Switch>
            <Route exact path='/' render={()=><Sequencer />}/>
          </Switch>
      </div>
    );
  }
}

export default App;
