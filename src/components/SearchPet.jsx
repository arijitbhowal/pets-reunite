import React, { useState } from 'react'; 
import Filter from './Filter'; 
import ReportedPets from './ReportedPets'; 
import ReportCard from './ReportedPets'; 
import './SearchPet.css';  
 
 
const SearchPet = () => { 
 
  const [filterData, setFilterData] = useState({ 
    status: "All", 
    type: "All", 
    sex: "All", 
    address: "", 
    date: "All", 
  }); 
 
  const handleFilterChange = (newFilterData) => { 
    setFilterData(newFilterData); 
  }; 
 
  return ( 
    <div className="search-pet-container"> 
      <Filter onFilterChange={handleFilterChange} /> 
      <ReportedPets filterData={filterData} /> 
    </div> 
  ); 
} 
 
export default SearchPet;
