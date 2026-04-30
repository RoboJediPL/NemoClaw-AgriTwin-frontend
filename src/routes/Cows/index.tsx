// Import necessary libraries and components
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CowsList from '../CowsList';
import FeedRoute from '../FeedRoute';

// Define the Cows route component
const Cows: React.FC = () => {
  return (
    <Routes>
      <Route path='/cows' element={<CowsList />} />
      <Route path='/feed-route' element={<FeedRoute />} />
    </Routes>
  );
};

export default Cows;
