import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className='findpet'>
        <p className='text'>We help missing pets reunite with their owners</p>
        <div className='find-buttons'>
          <Link to="/lost">
            <button className='find-button' style={{ marginRight: '10px' }}>Lost a Pet</button>
            </Link>
            <Link to="/found">
            <button className='find-button'>Found a Pet</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
