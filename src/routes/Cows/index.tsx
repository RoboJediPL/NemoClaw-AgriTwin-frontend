import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockCows } from '../../apiClient';
import CowDetails from '../../components/CowDetails';
import CowList from '../../components/CowList';
import CowTable from '../../components/CowTable';

export default function CowsRoute() {
  const params = useParams();
  const initialCowId = params.cowId ?? mockCows[0]?.id ?? '';
  const [selectedCowId, setSelectedCowId] = useState(initialCowId);

  useEffect(() => {
    setSelectedCowId(initialCowId);
  }, [initialCowId]);

  const selectedCow = useMemo(
    () => mockCows.find((cow) => cow.id === selectedCowId) ?? mockCows[0],
    [selectedCowId],
  );

  return (
    <div className="page-frame">
      <section className="page-hero">
        <div className="pill">Herd views</div>
        <h2>Browse the herd, open a cow profile, and review the table together.</h2>
        <p>
          The list, details, and table views are wired in one pass so the frontend shell covers
          the core product scope.
        </p>
      </section>
      <div className="cow-grid">
        <CowList
          cows={mockCows}
          selectedCowId={selectedCowId}
          onSelectCow={setSelectedCowId}
        />
        <div className="stack">
          <CowDetails cow={selectedCow} />
          <CowTable cows={mockCows} selectedCowId={selectedCowId} />
        </div>
      </div>
    </div>
  );
}
