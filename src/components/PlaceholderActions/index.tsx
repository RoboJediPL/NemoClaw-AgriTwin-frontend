// src/components/PlaceholderActions/index.tsx
import React from 'react';
import { Button } from '@mui/material';

interface PlaceholderActionsProps {
  actions: string[];
}

const PlaceholderActions = ({ actions }: PlaceholderActionsProps) => {
  return (
    <Button variant="contained" disabled>Placeholder Actions</Button>
  );
};

export default PlaceholderActions;