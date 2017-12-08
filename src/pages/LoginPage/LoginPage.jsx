import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import {Col, Row, Container} from 'react-materialize'
import './LoginPage.css';

const LoginPage = (props) => {
  return (
    <Container className='LoginPage'>
      <div className='LoginPage'>
          <Col s={7}>
            <LoginForm {...props}/>
          </Col>
      </div>
    </Container>
  );
};

export default LoginPage;