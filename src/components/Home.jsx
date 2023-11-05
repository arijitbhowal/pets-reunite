import React from "react";
import "./Home.css";
import Findpet from "./Findpet";
import OurModel from "./OurModel";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Transparent Navbar */}
      <div className="navbar transparent">
        <div className="logo">
        <img src="/logo.svg" alt="Logo" />
          <span>Pets Reunite</span>
        </div>
        <div className="signup-signin">
        <Link to="/login">
          <button className="signup-button">Sign Up/Sign In</button>
          </Link>
        </div>
      </div>
      <div className="main-content">
        <Findpet />
        <OurModel />
      </div>
    </div>
  );
}

export default Home;

