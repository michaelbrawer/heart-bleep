import React from 'react';
import Clock from '../Clock/Clock'
import './Transport.css';
import {Button, Icon, CardPanel, Col, Row} from 'react-materialize'


const Transport = (props) => {
  return(
    <Row>
    <div className="Transport">
    
    <Col s={6} className='grid-example'>
    <CardPanel className="grey lighten-4 black-text">
      <Clock />
      <p>Transport:</p>
      <Button waves='light' className="grey"><i className="material-icons md-dark">arrow_back</i></Button>
      <Button waves='light'><i className="material-icons md-dark">play_arrow</i></Button>
      <Button waves='light' className="red TransportButton"><i className="material-icons md-dark">cancel</i></Button>
      </CardPanel>
      </Col>
      
    </div>
    </Row>
  );
}

export default Transport;