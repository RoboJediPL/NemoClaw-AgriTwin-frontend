// src/App.js
import React from 'react';
import KPICard from './KPICard';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Agritwin</h1>
      <KPICard title="Example KPI" value="42" />
    </div>
  );
}

export default App;