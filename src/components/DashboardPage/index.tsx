// src/components/DashboardPage/index.tsx
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <KpiCard title="Revenue" value="$10,000" />
        <KpiCard title="Yield" value="5.2 t/ha" />
        <KpiCard title="Water Usage" value="10 m³/day" />
      </div>
    </div>
  );
};

export default DashboardPage;
