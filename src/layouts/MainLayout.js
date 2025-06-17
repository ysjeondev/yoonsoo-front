import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { Box, CssBaseline, Toolbar } from '@mui/material';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default MainLayout;
