// Implementation of Filterable List component
import React, { useState } from 'react';

const FilterableList: React.FC = () => {
  const [filter, setFilter] = useState('');

  const items = [
    { id: 1, name: 'Item 1', severity: 'High' },
    { id: 2, name: 'Item 2', severity: 'Medium' },
    { id: 3, name: 'Item 3', severity: 'Low' }
  ];

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input type='text' value={filter} onChange={e => setFilter(e.target.value)} placeholder='Filter...' />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;