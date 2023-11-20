import { signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import Hamburger from "./Hamburger";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../context/AuthContext";
import { BsBoxArrowRight } from "react-icons/bs";

const Navbar = () => {
  const history = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showLostAndFoundDropdown, setShowLostAndFoundDropdown] =
    useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch({ type: "LOGOUT", payload: null });
      history("/");
    });
  };

  const toggleSearchDropdown = () => {
    setShowSearchDropdown(!showSearchDropdown);
  };

  const toggleLostAndFoundDropdown = () => {
    setShowLostAndFoundDropdown(!showLostAndFoundDropdown);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };
  const handleLogoClick = () => {
    // Navigate to the home page when the logo is clicked
    history('/home');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-nav" onClick={handleLogoClick}>
          <img src="/logo.svg" alt="Logo" />
          Pets Reunite
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/home">HOME</NavLink>
            </li>
            <li>
              <div
                className="dropdown dropdown-nav"
                onMouseEnter={toggleSearchDropdown}
                onMouseLeave={toggleSearchDropdown}
              >
                <span>
                  <img
                    src="/search-icon.svg"
                    className="search-icon"
                    alt="Search"
                  />
                  SEARCH
                </span>
                {showSearchDropdown && (
                  <div className="dropdown-content">
                    <NavLink to="/search" className="dropdown-link">
                      Pet Report List
                    </NavLink>
                    <NavLink to="/map" className="dropdown-link">
                      Search by Map
                    </NavLink>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div
                className="dropdown dropdown-nav"
                onMouseEnter={toggleLostAndFoundDropdown}
                onMouseLeave={toggleLostAndFoundDropdown}
              >
                <span>
                  <img
                    src="/paw-icon.svg"
                    className="paw-icon"
                    alt="Lost and Found"
                  />
                  LOST AND FOUND
                </span>
                {showLostAndFoundDropdown && (
                  <div className="dropdown-content">
                    <NavLink to="/lost" className="dropdown-link">
                      Lost a Pet
                    </NavLink>
                    <NavLink to="/found" className="dropdown-link">
                      Found a Pet
                    </NavLink>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div
                className="dropdown dropdown-nav user-dropdown"
                onMouseEnter={toggleUserDropdown}
                onMouseLeave={toggleUserDropdown}
              >
                <img src="/user-icon.svg" className="user-icon" alt="User" />
                USER
                {showUserDropdown && (
                  <div className="dropdown-content user-content">
                    <NavLink to="/myaccount" className="dropdown-link">
                      My Account
                    </NavLink>
                    <br />
                    <button
                      className="logout-button danger-btn"
                      onClick={handleLogout}
                    >
                      <BsBoxArrowRight /> Log Out
                    </button>
                  </div>
                )}
              </div>
            </li>
            <li className="mobile-buttons">
              <NavLink to="/lost">LOST A PET</NavLink>
            </li>
            <li className="mobile-buttons">
              <NavLink to="/found">FOUND A PET</NavLink>
            </li>
            <li className="mobile-buttons">
              <NavLink to="/map">SEARCH BY MAP</NavLink>
            </li>
            <li className="mobile-buttons">
              <NavLink to="/search">PET REPORTS</NavLink>
            </li>
            <li className="mobile-buttons">
              <NavLink to="/myaccount">MY ACCOUNT</NavLink>
            </li>
            <li className="mobile-buttons">
              <button
                className="logout-button danger-btn"
                onClick={handleLogout}
              >
                <BsBoxArrowRight /> Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
