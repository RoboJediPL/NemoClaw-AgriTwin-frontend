// src/views/PaddocksView.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CowsPage from '../routes/Cows';

const PaddocksView = () => {
  return (
    <Router>
      <Routes>
        <Route path='/cows' element={<CowsPage />} />
        <Route path='/cows/summary' element={<Summary />} />
      </Routes>
    </Router>
  );
};

export default PaddocksView;