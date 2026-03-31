import React from 'react';
import logo from './icon.png';

const HeroSection = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ margin: 0 }}>Designing with Power <img src={logo} alt='Logo' style={{ width: '20px', height: '20px', marginLeft: '8px' }} /></h1>
    </div>
  );
};

export default HeroSection;