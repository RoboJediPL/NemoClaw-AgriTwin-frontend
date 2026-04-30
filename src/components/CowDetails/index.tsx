import type { HerdCow } from '../../apiClient';

type CowDetailsProps = {
  cow: HerdCow | undefined;
};

export default function CowDetails({ cow }: CowDetailsProps) {
  if (!cow) {
    return (
      <article className="detail-card">
        <h3>Cow details</h3>
        <p className="section-copy">Select a cow to see the profile summary.</p>
      </article>
    );
  }

  return (
    <article className="detail-card">
      <div className="cow-detail-layout">
        <div className="cow-detail-header">
          <div>
            <h3>Cow details</h3>
            <h2 style={{ margin: '0 0 8px' }}>{cow.name}</h2>
            <div className="tag-row">
              <span className="pill">{cow.tag}</span>
              <span className="tag">{cow.status}</span>
              <span className="pill">{cow.paddock}</span>
            </div>
          </div>
          <div className="metric-card" style={{ minWidth: '160px', padding: '14px 16px' }}>
            <h3>Lactation day</h3>
            <p className="metric-value" style={{ fontSize: '1.6rem' }}>
              {cow.lactationDay}
            </p>
          </div>
        </div>
        <div className="detail-grid">
          <article className="split-card">
            <h3>Profile</h3>
            <ul className="detail-list">
              <li>
                <span>Milk yield</span>
                <strong>{cow.milkYield}</strong>
              </li>
              <li>
                <span>Feed intake</span>
                <strong>{cow.feed}</strong>
              </li>
              <li>
                <span>Health</span>
                <strong>{cow.health}</strong>
              </li>
            </ul>
          </article>
          <article className="split-card">
            <h3>Notes</h3>
            <p className="section-copy">{cow.notes}</p>
          </article>
        </div>
      </div>
    </article>
  );
}
