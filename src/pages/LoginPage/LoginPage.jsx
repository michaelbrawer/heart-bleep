import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import {Col, Row, Container} from 'react-materialize'
import './LoginPage.css';

const LoginPage = (props) => {
  return (
    <Container>
      <div className='LoginPage'>
        <Row>
          <Col s={6}>
            <LoginForm {...props}/>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LoginPage;