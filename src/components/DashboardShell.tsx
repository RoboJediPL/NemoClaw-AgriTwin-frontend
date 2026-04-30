import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { API_BASE_URL } from '../api';

type DashboardShellProps = {
  children: ReactNode;
};

const navItems = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/cows', label: 'Cows' },
  { to: '/paddocks', label: 'Paddocks' },
];

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="app-shell">
      <aside className="shell-sidebar">
        <div className="brand-mark">
          <span className="brand-dot" />
          AgriTwin Frontend
        </div>
        <h1>Herd operations, first pass</h1>
        <p>
          Separate frontend repo shell for dashboard, cows, feed, milk, and paddock views.
        </p>
        <nav className="shell-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              <span>{item.label}</span>
              <span aria-hidden="true">→</span>
            </NavLink>
          ))}
        </nav>
        <div className="shell-meta">
          <div>API base: {API_BASE_URL}</div>
          <div>Frontend repo root only</div>
        </div>
      </aside>
      <main className="shell-main">{children}</main>
    </div>
  );
}
