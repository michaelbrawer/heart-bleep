import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import {Button, Row} from 'react-materialize';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  handleChange = (field, e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.signup(this.state)
    // successfully signed up - show GamePage
      .then(() => {this.props.handleSignup();
      this.props.history.push('/');
    })
    // invalid user data
      .catch(err => this.props.updateMessage(err.message));
  }; 

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <header className="header-footer">
          <h5>sign up:</h5>
        </header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                value={this.state.name}
                onChange={(e) => this.handleChange('name', e)}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                placeholder="email"
                value={this.state.email}
                onChange={(e) => this.handleChange('email', e)}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                value={this.state.password}
                onChange={(e) => this.handleChange('password', e)}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={this.state.passwordConf}
                onChange={(e) => this.handleChange('passwordConf', e)}/>
            </div>
          </div>
          <div className="form-group">
          <Row>
            <div className="btns text-center">
              <Button s={6} className="blue playBtn" disabled={this.isFormInvalid()}>sign up</Button>&nbsp;&nbsp;
              <Link to='/'>
                <Button s={6} className='red saveBtn'>cancel</Button>
              </Link>
            </div>
            </Row>
          </div>
        </form>
      </div>
    );
  }
};

export default SignupForm;