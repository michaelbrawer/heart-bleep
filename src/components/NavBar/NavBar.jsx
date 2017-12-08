import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Navbar, NavItem, Button, Icon, CardPanel, Col, Row, Footer} from 'react-materialize'

const NavBar = (props) => {
  let nav = props.user ?

      <ul>
        <li><a href="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</a></li>
        <li><span className='NavBar-welcome'>WELCOME, {props.user.name}</span></li>
      </ul>
      :
      <ul>
        <li><a href="/login">LOG IN</a></li>
        <li><a href="/signup">SIGN UP</a></li>
      </ul>
      
  return (
    <Navbar className="HeaderFooter right" brand='HeartBleep' right>
      {nav}  
    </Navbar>
  );
};

export default NavBar;



{/* <NavItem  >
<Link to="/topscores" className='NavBar-link' >TOP SCORES</Link>
</NavItem>
<NavItem>
<Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
</NavItem>
<NavItem>
<Link to="" className='NavBar-welcome'>WELCOME, {props.user.name}</Link>
</NavItem>  */}

{/* <NavItem>
<Link to="/login" className='NavBar-link'>LOG IN</Link>
</NavItem>
<NavItem>
<Link to="/signup" className='NavBar-link'>SIGN UP</Link>
</NavItem> */}