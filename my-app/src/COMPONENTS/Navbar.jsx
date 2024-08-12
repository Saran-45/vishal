// src/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './GlobeData';
import './Navbar.css'; // Create this CSS file

const Navbar = () => {
  const {loggedIn,isAdmin,LogOut} = useContext(Context);
  const onhandleLogout = () =>{
    LogOut();
  }
  return (
    <div>

    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {(isAdmin)?<li><Link to="/Dashboard">Dashboard</Link></li>:""}
        
        <li><Link to="/contact">Contact Us</Link></li>
        {(loggedIn)?<li><Link to="/" onClick={onhandleLogout}>Logout</Link></li>:<li><Link to="/login">Login</Link></li>}

      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
