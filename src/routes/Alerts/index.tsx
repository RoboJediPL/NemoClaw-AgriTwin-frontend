// src/routes/Alerts/index.tsx
import React from 'react';
import FilterableList from '../../components/FilterableList';
import SeverityVisualTreatment from '../../components/SeverityVisualTreatment';
import PlaceholderActions from '../../components/PlaceholderActions';

const Alerts: React.FC = () => {
  return (
    <div>
      <h1>Alerts</h1>
      <FilterableList items={['Alert 1', 'Alert 2', 'Alert 3']} />
      <SeverityVisualTreatment severity={'high'} message={'High Severity Alert'} />
      <PlaceholderActions actions={['Action 1', 'Action 2', 'Action 3']} />
    </div>
  );
};

export default Alerts;