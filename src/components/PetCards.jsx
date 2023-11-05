import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PetCards.css'; // Import the CSS file

function PetCards() {
  const cardsData = [
    {
      id: 1,
      title: 'Doggy',
      text: 'Some quick example text for Card 1.',
      imageUrl: '/pet1.jpg',
    },
    {
      id: 2,
      title: 'Doggo',
      text: 'Some quick example text for Card 2.',
      imageUrl: '/pet2.jpg',
    },
    {
      id: 3,
      title: 'Cat',
      text: 'Some quick example text for Card 3.',
      imageUrl: '/pet3.jpg',
    },
  ];

  return (
    <div className="pet-cards-container">
      {cardsData.map((card) => (
        <Card key={card.id} className="pet-card">
          <Card.Img
            variant="top"
            src={card.imageUrl}
            className="card-img-top"
            alt={card.title} // Add an alt attribute for accessibility
          />
          <Card.Body>
            <Card.Title className="card-title">{card.title}</Card.Title>
            <Card.Text className="card-text">{card.text}</Card.Text>
            <Button variant="primary" className="petcard-btn">
              Contact
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PetCards;