import React from 'react';
import './Findpet.css';

const Findpet = () => {
  return (
    <div className='findpet'>
      <p>We help missing pets reunite with their owners</p>
      <div className='find-buttons'>
        <button className='find-button'>Found a Pet</button>
        <button className='find-button'>Lost a Pet</button>
      </div>
    </div>
  );
}

export default Findpet;
