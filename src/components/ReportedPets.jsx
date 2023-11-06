import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import PetCards from './PetCards';
import './ReportedPets.css'; // Make sure to import the CSS file

const ReportedPets = () => {
  const location = useLocation();
  const showViewAllButton = location.pathname !== '/search';

  return (
    <div className='reported-pets'>
        <h1 className='reported-header'>Reported Pets</h1>
        {showViewAllButton && (
          <Link to='/search' className='view-all-link'>View All</Link>
        )}
      <PetCards />
    </div>
  );
};

export default ReportedPets;
