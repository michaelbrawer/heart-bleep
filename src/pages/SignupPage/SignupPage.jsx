import React, {Component} from 'react';
import {Col, Row, Container} from 'react-materialize';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <Container>
        <div className='SignupPage'>
          <Row>
            <Col s={3}/>
            <Col s={6}>
              <SignupForm
                {...this.props}
                updateMessage={this.updateMessage}
                handleSignup={this.props.handleSignup}/>
              <p>{this.state.message}</p>
            </Col>
            <Col s={3}/>
          </Row>
        </div>
      </Container>
    );
  }
};

export default SignupPage;