// Implementation of Severity Visual Treatment component
import React from 'react';

const SeverityVisualTreatment: React.FC = () => {
  const items = [
    { id: 1, name: 'Item 1', severity: 'High' },
    { id: 2, name: 'Item 2', severity: 'Medium' },
    { id: 3, name: 'Item 3', severity: 'Low' }
  ];

  return (
    <div>
      {items.map(item => (
        <div key={item.id} style={{ color: item.severity === 'High' ? 'red' : item.severity === 'Medium' ? 'orange' : 'green' }}>{item.name}</div>
      ))}
    </div>
  );
};

export default SeverityVisualTreatment;