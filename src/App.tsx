import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardShell from './components/DashboardShell';
import CowsRoute from './routes/Cows';
import PaddocksView from './views/PaddocksView';

export default function App() {
  return (
    <BrowserRouter>
      <DashboardShell>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Navigate to="/" replace />} />
          <Route path="/cows" element={<CowsRoute />} />
          <Route path="/cows/:cowId" element={<CowsRoute />} />
          <Route path="/paddocks" element={<PaddocksView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </DashboardShell>
    </BrowserRouter>
  );
}
