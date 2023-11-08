import React from 'react';
import Filter from './Filter';
import ReportCard from './ReportedPets';
import './SearchPet.css'; // You can create a CSS file for styling
import ReportedPets from './ReportedPets';

const SearchPet = () => {
  return (
    <div className="search-pet-container">
      <Filter />
      <ReportedPets />
    </div>
  );
}

export default SearchPet;
