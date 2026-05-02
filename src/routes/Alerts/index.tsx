// src/routes/Alerts/index.tsx
import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import AlertItem from '../components/AlertItem';
import FilterableList from '../components/FilterableList';
import SeverityVisualTreatment from '../components/SeverityVisualTreatment';
import PlaceholderActions from '../components/PlaceholderActions';

const Alerts = () => {
  const alerts = [
    { id: '1', title: 'High severity alert', severity: 'high' },
    { id: '2', title: 'Medium severity alert', severity: 'medium' },
    { id: '3', title: 'Low severity alert', severity: 'low' }
  ];

  return (
    <Box>
      <TextField label="Filter alerts" variant="outlined" fullWidth />
      <SeverityVisualTreatment severity={alerts[0].severity} />
      <FilterableList items={alerts} renderItem={(item) => <AlertItem key={item.id} {...item} />} />
      <PlaceholderActions actions={['Action 1', 'Action 2']} />
    </Box>
  );
};

export default Alerts;