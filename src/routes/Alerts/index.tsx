// Implementation of Alerts route
import React from 'react';
import FilterableList from '../components/FilterableList';
import SeverityVisualTreatment from '../components/SeverityVisualTreatment';
import PlaceholderActions from '../components/PlaceholderActions';

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