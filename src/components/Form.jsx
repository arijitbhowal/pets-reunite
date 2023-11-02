import React, { useState } from 'react';
import './Form.css';

function LostPetForm() {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use the form data here for further processing
    console.log('Submitted Data:', {
      petName,
      ownerName,
      date,
      city,
      email,
      description,
    });

    // You can add your logic to handle the form submission, like sending it to a server, etc.
  };

  return (
    <div className="form-container">
      <div className="lost-pet-form-container">
        <h2 className="lost-pet-form-title">Lost Pet Report Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group-item">
              <label htmlFor="petName">Pet Name:</label>
              <input
                type="text"
                id="petName"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                required
              />
            </div>
            <div className="form-group-item">
              <label htmlFor="ownerName">Owner Name:</label>
              <input
                type="text"
                id="ownerName"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <div className="left"></div>
      <div className="right"></div>
    </div>
  );
}

export default LostPetForm;
