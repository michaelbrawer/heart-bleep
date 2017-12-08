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
      <Button waves='light' className="grey"><Icon className="material-icons md-dark">replay</Icon></Button>
      <Button waves='light'><Icon className="material-icons md-dark">play_arrow</Icon></Button>
      <Button waves='light' className="red TransportButton"><Icon className="material-icons md-dark">cancel</Icon></Button>
      </CardPanel>
      </Col>
      
    </div>
    </Row>
  );
}

export default Transport;