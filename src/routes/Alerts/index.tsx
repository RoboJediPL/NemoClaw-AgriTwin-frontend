// Implementation of the Alerts route
// Include filterable list, severity-based visual treatment, and placeholder actions
import React from 'react';
import { List } from '@mui/material';
import FilterableList from '../FilterableList';
import SeverityVisualTreatment from '../SeverityVisualTreatment';
import PlaceholderActions from '../PlaceholderActions';

const Alerts: React.FC = () => {
  return (
    <div>
      <h1>Alerts</h1>
      <FilterableList />
      <SeverityVisualTreatment />
      <PlaceholderActions />
    </div>
  );
};

export default Alerts;