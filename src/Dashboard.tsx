import React from 'react';
import DashboardShell from '../components/DashboardShell';
import KPICard from '../components/KPICard';
import Summary from '../components/Summary';
import { internalArtifactOnly } from '../apiClient';

const Dashboard = () => {
  return (
    <DashboardShell title='Dashboard'>
      {internalArtifactOnly ? (
        <div>Internal artifact mode</div>
      ) : (
        <div>
          <Summary />
          <KPICard label='KPI Card' value='123' />
        </div>
      )}
    </DashboardShell>
  );
};

export default Dashboard;