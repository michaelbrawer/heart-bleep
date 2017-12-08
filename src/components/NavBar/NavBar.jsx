import React from 'react';
// import {Link} from 'react-router-dom';
import './NavBar.css';
import {Navbar} from 'react-materialize'


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
    <Navbar className="HeaderFooter" brand='heart-bleep' right>
      {nav}
    </Navbar>
    </div>
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