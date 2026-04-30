import { mockDashboard } from './apiClient';
import KPICard from './KPICard';
import DeliverySlice from './DeliverySlice';
import KPI from './components/KPI';

export default function Summary() {
  return (
    <section className="panel">
      <div className="section-copy">
        First-pass operational summary for the separate frontend repository.
      </div>
      <div className="metrics-grid" style={{ marginTop: '18px' }}>
        {mockDashboard.overview.map((item) => (
          <KPICard key={item.label} title={item.label} value={item.value} note={item.note} />
        ))}
      </div>
      <div className="summary-grid" style={{ marginTop: '18px' }}>
        <article className="split-card">
          <h3>Feed snapshot</h3>
          <KPI label="Morning mix" value="$1,280" detail="Most recent ration cost" />
          <KPI label="Supplement drift" value="$430" detail="Within the acceptable band" />
          <DeliverySlice label="Rotation readiness" value="62%" accent={62} />
        </article>
        <article className="split-card">
          <h3>Milk snapshot</h3>
          <KPI label="Daily average" value="1,324 L" detail="All milking cows" />
          <KPI label="Week trend" value="+3.2%" detail="Compared to prior week" />
          <DeliverySlice label="Collection status" value="89%" accent={89} />
        </article>
      </div>
    </section>
  );
}
