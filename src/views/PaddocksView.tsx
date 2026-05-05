// src/views/PaddocksView.tsx
import React from 'react';
import PaddockMap from '../components/PaddockMap';
import { Card } from 'antd';

// Paddocks view component
const PaddocksView = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Card title="Overview" style={{ width: '30%' }}>
        {/* Overview content goes here */}
      </Card>
      <PaddockMap />
      <Card title="Status Indicators" style={{ width: '30%' }}>
        {/* Status indicators content goes here */}
      </Card>
    </div>
  );
};

export default PaddocksView;
