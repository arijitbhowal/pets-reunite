import React from 'react';
import PetCards from './PetCards';
import './ReportedPets.css'; // Make sure to import the CSS file

const ReportedPets = () => {
  return (
    <div className='reported-pets'>
      <div className='centered-header'>
        <h1 className='reported-header'>Reported Pets</h1>
      </div>
      <PetCards />
    </div>
  );
};

export default ReportedPets;
