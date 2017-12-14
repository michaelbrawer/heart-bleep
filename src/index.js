import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './pages/App/App';

ReactDOM.render(
  <Router>
    <Route render={(props) => 
      <App{...props} />
    }/>
  </Router>,
  document.getElementById('root')
);