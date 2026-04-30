// src/components/DashboardPage/KpiCard.tsx
import React from 'react';

interface KpiCardProps {
  title: string;
  value: string | number;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value }) => {
  return (
    <div style={{ margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default KpiCard;
