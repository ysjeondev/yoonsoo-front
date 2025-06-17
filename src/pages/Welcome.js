import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Welcome = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/main');
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/bgi.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{ color: '#fff' }}>yoonsoo's iot world</h1>
      <p style={{ color: '#fff' }}>Welcome to my IoT monitoring system!</p>
      <Button variant="contained" color="primary" onClick={handleEnter}>
        ENTER
      </Button>
    </div>
  );
};

export default Welcome;
