import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import About from './About';
import PetCards from './PetCards';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import ReportedPets from './ReportedPets';
function Homepage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <ProgressBar />
      <ReportedPets />
      <Footer />
    </div>
  );
}

export default Homepage;
