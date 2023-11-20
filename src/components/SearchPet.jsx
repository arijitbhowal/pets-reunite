// SearchPet.js
import React, { useState } from 'react';
import Filter from './Filter';
import ReportedPets from './ReportedPets';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './SearchPet.css'; // Import your custom CSS for SearchPet
import Navbar from './Navbar';

const SearchPet = () => {
  const [filterData, setFilterData] = useState({
    status: 'All',
    type: 'All',
    sex: 'All',
    address: '',
    date: 'All',
  });

  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  return (
    <>
    <Navbar/>
    <div className="search-pet-container">
      <div className="row">
        {/* Sidebar (Filter component) */}
        <div className="col-md-3">
          <div className="sidebar">
            <Filter onFilterChange={handleFilterChange} />
          </div>
        </div>

        {/* Main Content (ReportedPets component) */}
        <div className="col-md-9">
          <div className="main-content">
            <ReportedPets filterData={filterData} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SearchPet;
