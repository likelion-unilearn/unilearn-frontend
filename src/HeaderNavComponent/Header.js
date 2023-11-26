import React from 'react';
import './Header.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import unilearn from '../img/unilearn.png';
import backButton from '../img/back.png'; 

const Header = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='header'>
      <div className="logo-container">
        <img className='logo' src={unilearn} alt="unilearn" />
        <img className='backButton' src={backButton} alt="Back" onClick={handleBackClick} />
      </div><br />
      <div className='border-div1'></div>
    </div>
  );
}

export default Header;
