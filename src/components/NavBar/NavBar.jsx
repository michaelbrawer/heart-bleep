import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Navbar, NavItem, Button, Icon, CardPanel, Col, Row, Footer} from 'react-materialize'

const NavBar = (props) => {
  let nav = props.user ?
    <NavItem>
      <Link to="/topscores" className='NavBar-link' >TOP SCORES</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </NavItem> :
    <NavItem>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
    </NavItem>;
  return (
    <Navbar className="HeaderFooter" brand='HeartBeep' right>
      {nav}
    </Navbar>
  );
};

export default NavBar;

{/* 
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
       */}

