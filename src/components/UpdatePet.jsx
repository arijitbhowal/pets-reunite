import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePet = () => {
  const { petId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    petName: '',
    description: '',
    location: '',
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
    <div className="update-form-container">
      <h2>Update Pet Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pet Name:
          <input type="text" name="petName" value={formData.petName} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePet;