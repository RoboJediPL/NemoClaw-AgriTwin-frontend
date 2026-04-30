import { Link } from 'react-router-dom';
import type { HerdCow } from '../../apiClient';

type CowTableProps = {
  cows: HerdCow[];
  selectedCowId: string;
};

export default function CowTable({ cows, selectedCowId }: CowTableProps) {
  return (
    <article className="table-card">
      <h3>Cow table</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cow</th>
              <th>Status</th>
              <th>Paddock</th>
              <th>Milk</th>
              <th>Feed</th>
              <th>Health</th>
            </tr>
          </thead>
          <tbody>
            {cows.map((cow) => (
              <tr key={cow.id} style={cow.id === selectedCowId ? { background: 'rgba(47, 109, 66, 0.06)' } : undefined}>
                <td>
                  <Link to={`/cows/${cow.id}`}>
                    <strong>{cow.name}</strong>
                    <div className="footer-note">{cow.tag}</div>
                  </Link>
                </td>
                <td>{cow.status}</td>
                <td>{cow.paddock}</td>
                <td>{cow.milkYield}</td>
                <td>{cow.feed}</td>
                <td>{cow.health}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
