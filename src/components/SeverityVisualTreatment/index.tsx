// src/components/SeverityVisualTreatment/index.tsx
import React from 'react';

interface SeverityVisualTreatmentProps {
  severity: string;
  message: string;
}

const SeverityVisualTreatment: React.FC<SeverityVisualTreatmentProps> = ({ severity, message }) => {
  return (
    <div className={`severity-${severity.toLowerCase()}`}>{message}</div>
  );
};

export default SeverityVisualTreatment;