import React, { useState } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import About from './About';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import ReportedPets from './ReportedPets';
import MapComponent from './MapComponent';
import './Loginhome.css'; // Import the external CSS file

function Loginhome() {
  const [showReportedPets, setShowReportedPets] = useState(true);

  const toggleComponent = () => {
    setShowReportedPets(!showReportedPets);
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <Intro />
      <About />
      <ProgressBar />

      <div className="toggle-button-container">
        <button onClick={toggleComponent} className="toggle-button">
          {showReportedPets ? 'View on Map' : 'Show Reported Pets'}
        </button>
      </div>

      {showReportedPets && <ReportedPets />}
      {!showReportedPets && (
        <div className="map-container">
          <MapComponent />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Loginhome;
