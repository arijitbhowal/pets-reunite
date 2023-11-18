import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './PetCards.css';
import { auth } from '../FirebaseConfig';

function PetCard({ pet, onUpdate, onDelete }) {
  const { _id, petName, description, reportImage, userId,lastSeenAdd,email} = pet;
  const currentUserID = auth.currentUser ? auth.currentUser.uid : null;

  

  const handleContact = () => {
    window.location.href = `mailto:${email}`;
  };



  const handleDelete = async () => {
    try {
      if (currentUserID && currentUserID === userId) {
        await fetch(`/api/pets/${_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: currentUserID,
          }),
        });
        console.log(`Pet with ID ${_id} deleted successfully.`);
        onDelete(_id); 
      } else {
        console.log("Permission denied: You can only delete your own pets.");
      }
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  return (
    <Card key={_id} className="pet-card">
      <Card.Img variant="top" src={reportImage} className="card-img-top" alt={petName} />
      <Card.Body>
        <Card.Title className="card-title">{petName}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>
        <Card.Text className='card-text'>Last seen at: {lastSeenAdd}</Card.Text>
        {currentUserID && currentUserID!==userId && (<Button variant='info' className='petcard-btn' onClick={handleContact}>Contact</Button> )}
        <Link to={`/update/${_id}`}>
          {currentUserID && currentUserID === userId && (
            <Button variant="safe" className="petcard-btn" onClick={() => onUpdate(_id)}>
              UPDATE
            </Button>
          )}
        </Link>
        {currentUserID && currentUserID === userId && (
          <Button variant="danger" className="petcard-btn" onClick={handleDelete}>
            DELETE
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

function PetCards({ pets, onUpdate, onDelete }) {
  return (
    <div className="pet-cards-container">
      {pets.map((pet) => (
        <PetCard key={pet._id} pet={pet} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PetCards;
