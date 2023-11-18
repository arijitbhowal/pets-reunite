import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PetCards from './PetCards';
import './ReportedPets.css';
import { auth } from '../FirebaseConfig';
import UpdatePet from './UpdatePet';

const ReportedPets = ({ filterData }) => {
  const location = useLocation();
  const showViewAllButton = location.pathname !== '/search';

  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  const fetchPets = async () => {
    try {

       let apiUrl = '/api/pets';

    if (filterData.petStatus || filterData.type || filterData.sex) {
      apiUrl += `?petStatus=${filterData.petStatus}&type=${filterData.type}&sex=${filterData.sex}`;
    }

    const response = await fetch(apiUrl);
      

      if (!response.ok) {
        throw new Error('Failed to fetch pets');
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('Fetched pets:', data);
        setPets(data);
      } else {
        console.error('Invalid content type. Expected JSON.');
        setPets([]);
      }
    } catch (error) {
      console.error(error);
      setPets([]);
    }
  };

  

  const handleUpdate = (petId) => {
    const petToUpdate = pets.find((pet) => pet._id === petId);
    setSelectedPet(petToUpdate);
  };

  const handleDelete = async (deletedPetId) => {
    try {
      await fetch(`/api/pets/${deletedPetId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: auth.currentUser.uid,
        }),
      });
      console.log(`Pet with ID ${deletedPetId} deleted successfully.`);
      setPets((prevPets) => prevPets.filter((pet) => pet._id !== deletedPetId));
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [filterData]);

 

  return (
    <div className="reported-pets">
      <h1 className="reported-header">Reported Pets</h1>
      {showViewAllButton && <Link to="/search" className="view-all-link">View All</Link>}
      {pets.length > 0 ? (
        <PetCards pets={pets} onUpdate={handleUpdate} onDelete={handleDelete} />
      ) : (
        <p>No pets found with the selected criteria.</p>
      )}
    </div>
  );
};

export default ReportedPets;
