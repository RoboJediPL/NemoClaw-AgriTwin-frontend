type KPIProps = {
  label: string;
  value: string;
  detail?: string;
};

export default function KPI({ label, value, detail }: KPIProps) {
  return (
    <div className="kpi-inline">
      <span>{label}</span>
      <div>
        <strong>{value}</strong>
        {detail ? <div className="footer-note">{detail}</div> : null}
      </div>
    </div>
  );
}
