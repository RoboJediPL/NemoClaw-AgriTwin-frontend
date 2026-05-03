// src/KPICard.tsx
import React from 'react';

interface KPICardProps {
  title: string;
  value: number | string;
}

function KPICard({ title, value }: KPICardProps) {
  return (
    <div className="KPICard">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}

export default KPICard;