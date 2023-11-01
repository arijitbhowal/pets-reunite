import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='/logo.svg' alt='logo' />
        <p>Pets Reunite</p>
      </div>
      <div className='nav-right'>
        <a id='home'href='#'>HOME</a>
        <a href='#' className="lost-and-found">
          <img src='/search-icon.svg' alt="Search" className="search-icon" />
          LOST AND FOUND
        </a>
        <a href='#'>LOGIN/REGISTER</a>
      </div>
    </div>
  );
}

export default Navbar;
