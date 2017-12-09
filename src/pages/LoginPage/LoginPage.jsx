import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import {Col, Row, Container} from 'react-materialize'
import './LoginPage.css';

const LoginPage = (props) => {
  return (
    <Container className='LoginPage'>
      <div className='LoginPage'>
        <Row>
          <Col s={3}/>
          <Col s={6}>
            <LoginForm {...props}/>
          </Col>
          <Col s={3}/>
        </Row>
      </div>
    </Container>
  );
};

export default LoginPage;