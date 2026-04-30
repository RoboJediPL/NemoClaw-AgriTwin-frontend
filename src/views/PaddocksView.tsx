import { mockDashboard } from '../apiClient';
import FeedRoute from '../components/FeedRoute';
import PaddockMap from '../components/PaddockMap';

export default function PaddocksView() {
  return (
    <div className="page-frame">
      <section className="page-hero">
        <div className="pill">Paddock operations</div>
        <h2>Visualize the current rotation and feed route at a glance.</h2>
        <p>
          The first pass keeps the map and route views light, readable, and ready for later API
          wiring.
        </p>
      </section>
      <div className="dashboard-grid">
        <PaddockMap paddocks={mockDashboard.paddocks} />
        <FeedRoute stops={mockDashboard.paddocks} />
      </div>
    </div>
  );
}
