import React from 'react';
import {Navbar, NavItem} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user
    ? <ul>
        <NavItem className="disabled">Welcome {props.user.name}</NavItem>
        <NavItem onClick={props.handleLogout} href='/'>log out</NavItem>
      </ul>
    : <ul>
      <NavItem href='/login'>log in</NavItem>
      <NavItem href='/signup'>sign up</NavItem>
    </ul>

  return (
    <Navbar className="HeaderFooter" brand='heart-bleep' left>
      {nav}
      <NavItem href="https://github.com/michaelbrawer/heart-bleep" right>
        <i class="fa fa-github" aria-hidden="true"></i>
      </NavItem>
    </Navbar>
  );
};

export default NavBar;