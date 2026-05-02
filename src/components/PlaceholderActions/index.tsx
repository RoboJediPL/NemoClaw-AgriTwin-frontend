// src/components/PlaceholderActions/index.tsx
import React from 'react';

interface PlaceholderActionsProps {
  actions: string[];
}

const PlaceholderActions: React.FC<PlaceholderActionsProps> = ({ actions }) => {
  return (
    <div>
      {actions.map((action, index) => (
        <button key={index}>{action}</button>
      ))}
    </div>
  );
};

export default PlaceholderActions;