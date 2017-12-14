import React from 'react';
import {Navbar, NavItem} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user
    ? <ul>
        <NavItem href="https://github.com/michaelbrawer/heart-bleep">
          <i className="ghLogo fa fa-2x fa-github" aria-hidden="true"></i>
        </NavItem>
        <NavItem className="disabled">Welcome {props.user.name}</NavItem>
        <NavItem onClick={props.handleLogout} href='/'>log out</NavItem>
      </ul>
    : <ul>
      <NavItem href="https://github.com/michaelbrawer/heart-bleep">
        <i className="ghLogo fa fa-2x fa-github" aria-hidden="true"></i>
      </NavItem>
      <NavItem href='/signup'>sign up</NavItem>
      <NavItem href='/login'>log in</NavItem>
    </ul>

  return (
    <Navbar
      className="HeaderFooter"
      brand={< div className='valign-wrapper'> 
        <span className='navLogo heartHeader'>heart</span>
        <span className='navLogo bleepHeader'>-BLEEP</span>
        <img className='transportLogo' src="https://i.imgur.com/AVvpPMI.png " alt=" heart logo "/> 
        </div>
        }left>
      {nav}
    </Navbar>
  );
};

export default NavBar;