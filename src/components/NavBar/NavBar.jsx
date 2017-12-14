import React from 'react';
import {Navbar} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
      <ul>
        <li><a href="/" onClick={props.handleLogout} >log out</a></li>
        <li>welcome, {props.user.name}</li>
      </ul>
      :
      <ul>
        <li><a href="/login">log in</a></li>
        <li><a href="/signup">sign up</a></li>
      </ul>
      
  return (
    <div className="navbar-fixed">
    <Navbar className="HeaderFooter" brand='heart-bleep' left>
      {nav}
    </Navbar>
    </div>
  );
};

export default NavBar;