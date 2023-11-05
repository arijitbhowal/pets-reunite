import React from 'react';
import Navbar from './Navbar';
import './Loginhome.css';
import { Link } from 'react-router-dom';
import About from './About';
import Intro from './Intro';
import Footer from './Footer';

const Loginhome = () => {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="content">
        <Intro />
        <About />
      </div>
      </div>
  );
};

export default Loginhome;
