import type { HerdCow } from '../../apiClient';

type CowListProps = {
  cows: HerdCow[];
  selectedCowId: string;
  onSelectCow: (cowId: string) => void;
};

export default function CowList({ cows, selectedCowId, onSelectCow }: CowListProps) {
  return (
    <article className="list-card">
      <h3>Cow list</h3>
      <div className="cow-list">
        {cows.map((cow) => (
          <button
            key={cow.id}
            type="button"
            className={`cow-row${cow.id === selectedCowId ? ' active' : ''}`}
            onClick={() => onSelectCow(cow.id)}
          >
            <span>
              <strong>{cow.name}</strong>
              <small>
                {cow.tag} · {cow.status} · {cow.paddock}
              </small>
            </span>
            <span>{cow.milkYield}</span>
          </button>
        ))}
      </div>
    </article>
  );
}
