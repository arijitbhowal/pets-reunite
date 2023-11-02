import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='/logo.svg' alt='logo' />
        <p>Pets Reunite</p>
      </div>
        <ul className="nav-links">
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/form'>
              <img src='/search-icon.svg' alt='Search' className='search-icon' />
              LOST AND FOUND
            </Link>
          </li>
          <li>
            <Link to='/login'>LOGIN/REGISTER</Link>
          </li>
        </ul>
      </div>
  );
}

export default Navbar;
