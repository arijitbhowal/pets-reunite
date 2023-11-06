import { signOut } from 'firebase/auth';
import { auth } from '../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const history = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showLostAndFoundDropdown, setShowLostAndFoundDropdown] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        history('/');
      });
  };

  const toggleSearchDropdown = () => {
    setShowSearchDropdown(!showSearchDropdown);
  };

  const toggleLostAndFoundDropdown = () => {
    setShowLostAndFoundDropdown(!showLostAndFoundDropdown);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
          Pets Reunite
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li >
              <NavLink to='/home'>HOME</NavLink>
            </li>
            <li>
              <div className="dropdown dropdown-nav" onMouseEnter={toggleSearchDropdown} onMouseLeave={toggleSearchDropdown}>
                <span><img src='/search-icon.svg' className="search-icon" alt="Search" />SEARCH</span>
                {showSearchDropdown && (
                  <div className="dropdown-content">
                    <NavLink to='/search'>Pet Report List</NavLink>
                    <NavLink to='/map'>Search by Map</NavLink>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="dropdown dropdown-nav" onMouseEnter={toggleLostAndFoundDropdown} onMouseLeave={toggleLostAndFoundDropdown}>
                <span><img src='/paw-icon.svg' className='paw-icon' alt="Lost and Found" />LOST AND FOUND</span>
                {showLostAndFoundDropdown && (
                  <div className="dropdown-content">
                    <NavLink to='/lost'>Lost a Pet</NavLink>
                    <NavLink to='/found'>Found a Pet</NavLink>
                  </div>
                )}
              </div>
            </li>
            <li className="mobile-buttons">
              <NavLink to='/lost'>LOST A PET</NavLink>
            </li>
            <li className="mobile-buttons">
              <NavLink to='/found'>FOUND A PET</NavLink>
            </li>
            <li className="mobile-buttons">
              <NavLink to='/map'>SEARCH BY MAP</NavLink>
            </li>
            <li className="mobile-buttons">
              <NavLink to='/search'>PET REPORTS</NavLink>
            </li>
            <li>
              <button className='mobile'onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
