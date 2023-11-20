import React, { useState } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import About from './About';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import './Loginhome.css'; // Import the external CSS file

function Loginhome() {
  const [showReportedPets, setShowReportedPets] = useState(true);

  return (
    <div className="homepage-container">
      <Navbar />
      <Intro />
      <About />
      <ProgressBar />
      <Footer />
    </div>
  );
}

export default Loginhome;
