import { signOut } from 'firebase/auth';
import { auth } from '../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import './Navbar.css';

const Navbar = () => {
  const history = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        history('/');
      });
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
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to='/home'>HOME</NavLink>
            </li>
            <li>
              <NavLink to='/form'>
                <img src='/search-icon.svg' alt='Search' className='search-icon' />
                LOST AND FOUND
              </NavLink>
            </li>
            <li>
              {/* Display "Logout" button */}
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
