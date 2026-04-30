type KPICardProps = {
  title: string;
  value: string;
  note: string;
};

export default function KPICard({ title, value, note }: KPICardProps) {
  return (
    <article className="metric-card">
      <h3>{title}</h3>
      <p className="metric-value">{value}</p>
      <p className="metric-note">{note}</p>
    </article>
  );
}
