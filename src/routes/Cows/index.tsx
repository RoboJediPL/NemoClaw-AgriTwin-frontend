// src/routes/Cows/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import CowList from '../../components/CowList';

const CowsPage = () => {
  return (
    <div>
      <h1>Cows</h1>
      <Link to='/cows/summary'>Summary</Link>
      <CowList />
    </div>
  );
};

export default CowsPage;