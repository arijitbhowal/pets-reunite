import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdatePet.css'; // Import the provided styling

const UpdatePet = () => {
  const { petId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    petName: '',
    description: '',
    lastSeenAdd: '',
  });

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pets/${petId}`);
        if (response.ok) {
          const data = await response.json();
          setFormData({
            petName: data.petName,
            description: data.description,
            lastSeenAdd: data.lastSeenAdd,
          });
        } else {
          console.error('Failed to fetch pet details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetails();
  }, [petId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/pets/${petId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log('Pet details updated successfully:', data);
        navigate(`/search`);
      } else {
        console.error('Failed to update pet details:', data.error);
        navigate('/search');
      }
    } catch (error) {
      console.error('Error updating pet details:', error);
      navigate('/search');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="update-pet-container">
      <h2 className="update-pet-heading">Update Pet Details</h2>
      <form className="update-pet-form" onSubmit={handleSubmit}>
        <label className="update-pet-label">
          Pet Name:
          <input
            className="update-pet-input"
            type="text"
            name="petName"
            placeholder='e.g. "Bella"'
            value={formData.petName}
            onChange={handleChange}
          />
        </label>
        <label className="update-pet-label">
          Description:
          <textarea
            className="update-pet-textarea"
            name="description"
            value={formData.description}
            placeholder='Descripton of the pet, e.g. "Black and white cat with a red collar"'
            onChange={handleChange}
          />
        </label>
        <label className="update-pet-label">
          Location:
          <input
            className="update-pet-input"
            type="text"
            name="petLocation"
            value={formData.lastSeenAdd}
            placeholder='e.g. "123 Main St, New York, NY 10001"'
            onChange={handleChange}
          />
        </label>
        <button className="update-pet-button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePet;
