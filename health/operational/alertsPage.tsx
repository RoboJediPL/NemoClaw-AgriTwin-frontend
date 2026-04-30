// AlertsPage.tsx
import React from 'react';
import { Alert } from '@material-ui/lab';

interface AlertItem {
  id: string;
  type: string;
  message: string;
}

const alerts: AlertItem[] = [
  { id: '1', type: 'error', message: 'System down' },
  { id: '2', type: 'warning', message: 'High CPU usage' }
];

interface FilterableAlertListProps {
  filterText: string;
}

const FilterableAlertList: React.FC<FilterableAlertListProps> = ({ filterText }) => (
  <ul>
    {alerts.filter(alert => alert.message.toLowerCase().includes(filterText.toLowerCase())).map(alert => (
      <li key={alert.id}>
        <Alert severity={alert.type}>{alert.message}</Alert>
      </li>
    ))}
  </ul>
);

const AlertsPage: React.FC = () => {
  const [filterText, setFilterText] = React.useState('');

  return (
    <div>
      <input
type='text'
placeholder='Filter alerts'
onChange={e => setFilterText(e.target.value)}
value={filterText}
style={{ width: '100%', padding: '8px', margin: '8px' }}
      />
      <FilterableAlertList filterText={filterText} />
    </div>
  );
};

export default AlertsPage;