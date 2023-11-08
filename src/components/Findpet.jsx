import React from 'react';
import './Findpet.css';
import  { Link } from 'react-router-dom';
const Findpet = () => {
  return (
    <div className='findpet'>
      <p className='text'>We help missing pets reunite with their owners</p>
      <div className='button'>
      <Link to="/login">
        <button className='get-started'>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Findpet;
