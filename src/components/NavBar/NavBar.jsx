import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Navbar, NavItem, Button, Icon, CardPanel, Col, Row, Footer} from 'react-materialize'

const NavBar = (props) => {
  let nav = props.user ?
      <div className="nav-wrapper">
      <NavItem  >
      <Link to="/topscores" className='NavBar-link' >TOP SCORES</Link>
      </NavItem>
      <NavItem>
      <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      </NavItem>
      <NavItem>
      <Link to="" className='NavBar-welcome'>WELCOME, {props.user.name}</Link>
      </NavItem> 
      </div>
      :
      <div className="nav-wrapper">
      <NavItem>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      </NavItem>
      <NavItem>
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
      </NavItem>
      </div>
  return (
    <Navbar className="HeaderFooter right" brand='HeartBleep' right>
      {nav}  
    </Navbar>
  );
};

export default NavBar;
