import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
      <div className='image-container'>
        <div className='about-text'>
          <h1>About Us</h1>
          <p>"Pets Reunite Hub" is a dedicated online platform designed to bring pet owners and their lost or found pets together. Our mission is to facilitate the safe and swift reunion of beloved pets with their owners. Whether your pet is missing, or you have found a lost pet, our platform provides a central hub for sharing information, posting listings, and connecting with fellow pet lovers in your community. With the power of a caring community, we aim to make the process of reuniting lost pets with their families as seamless as possible. At Pets Reunite Hub, we believe in the power of coming together to support our furry friends and the families who love them.</p>
          <Link to="/successstories">
            <button className="success-button">Check out the success stories</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
