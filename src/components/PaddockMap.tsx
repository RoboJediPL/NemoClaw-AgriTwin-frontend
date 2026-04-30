type PaddockMapProps = {
  paddocks: {
    name: string;
    status: string;
    occupancy: string;
  }[];
};

export default function PaddockMap({ paddocks }: PaddockMapProps) {
  return (
    <article className="map-card">
      <h3>Paddock map</h3>
      <div className="map-grid">
        {paddocks.map((paddock) => (
          <div key={paddock.name} className="map-tile">
            <strong>{paddock.name}</strong>
            <div>{paddock.status}</div>
            <div className="tile-foot">{paddock.occupancy}</div>
          </div>
        ))}
      </div>
    </article>
  );
}
