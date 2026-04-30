type FeedRouteProps = {
  stops: {
    name: string;
    status: string;
    occupancy: string;
  }[];
};

export default function FeedRoute({ stops }: FeedRouteProps) {
  return (
    <article className="route-card">
      <h3>Feed route</h3>
      <div className="route-pills">
        {stops.map((stop) => (
          <span key={stop.name} className="pill">
            {stop.name} · {stop.status} · {stop.occupancy}
          </span>
        ))}
      </div>
    </article>
  );
}
