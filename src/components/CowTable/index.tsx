// src/components/CowTable/index.tsx
import React from 'react';
import { useCows } from '../../apiClient';

const CowTable = () => {
  const { cows } = useCows();
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {cows.map((cow) => (
          <tr key={cow.id}>
            <td>{cow.id}</td>
            <td><Link to={`/cows/${cow.id}`}>{cow.name}</Link></td>
            <td>{cow.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CowTable;