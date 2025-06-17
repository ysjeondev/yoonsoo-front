import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 최초 도메인 입력시 */}
        <Route path="/" element={<Welcome />} />

        {/* 이 이후부터는 Sidebar 포함된 전체 Layout 적용 */}
        <Route path="/main/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
