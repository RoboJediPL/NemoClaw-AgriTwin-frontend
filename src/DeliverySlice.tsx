type DeliverySliceProps = {
  label: string;
  value: string;
  accent?: number;
};

export default function DeliverySlice({ label, value, accent = 62 }: DeliverySliceProps) {
  return (
    <div className="slice">
      <div className="slice-meta">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className="slice-bar" aria-hidden="true">
        <span style={{ width: `${accent}%` }} />
      </div>
    </div>
  );
}
