// src/components/SeverityVisualTreatment/index.tsx
import React from 'react';
import { Box } from '@mui/material';

interface SeverityVisualTreatmentProps {
  severity: string;
}

const SeverityVisualTreatment = ({ severity }: SeverityVisualTreatmentProps) => {
  let color = 'primary';
  if (severity === 'medium') {
    color = 'warning';
  } else if (severity === 'low') {
    color = 'info';
  }

  return (
    <Box color={color}>{severity}</Box>
  );
};

export default SeverityVisualTreatment;