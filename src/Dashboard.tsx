import Summary from './Summary';
import { mockDashboard } from './apiClient';
import FeedCostSummary from './components/FeedCostSummary';
import MilkProductionSummary from './components/MilkProductionSummary';
import DeliverySlice from './DeliverySlice';

export default function Dashboard() {
  return (
    <div className="page-frame">
      <section className="page-hero">
        <div className="pill">First-pass dashboard</div>
        <h2>See herd, feed, milk, and paddock status from a single shell.</h2>
        <p>
          This app shell is intentionally simple but complete enough for first-pass frontend
          validation and future backend integration.
        </p>
        <div className="hero-grid">
          <DeliverySlice label="Herd movement" value="Stable" accent={76} />
          <DeliverySlice label="Route health" value="Ready" accent={84} />
        </div>
      </section>
      <Summary />
      <div className="dashboard-grid">
        <FeedCostSummary items={mockDashboard.feedCost} />
        <MilkProductionSummary items={mockDashboard.milk} />
      </div>
    </div>
  );
}
