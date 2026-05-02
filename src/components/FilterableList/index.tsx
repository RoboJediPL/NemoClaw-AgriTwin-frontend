// src/components/FilterableList/index.tsx
import React from 'react';

interface FilterableListProps {
  items: string[];
}

const FilterableList: React.FC<FilterableListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default FilterableList;