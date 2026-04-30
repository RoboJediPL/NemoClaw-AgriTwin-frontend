// src/components/CowDetails/index.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CowDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Cow Details: {id}</h2>
    </div>
  );
};

export default CowDetails;