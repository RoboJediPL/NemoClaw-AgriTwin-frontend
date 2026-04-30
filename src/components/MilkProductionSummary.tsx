import KPI from './KPI';

type MilkProductionItem = {
  title: string;
  value: string;
  detail: string;
};

type MilkProductionSummaryProps = {
  items: MilkProductionItem[];
};

export default function MilkProductionSummary({ items }: MilkProductionSummaryProps) {
  return (
    <article className="summary-card">
      <h3>Milk production summary</h3>
      {items.map((item) => (
        <KPI key={item.title} label={item.title} value={item.value} detail={item.detail} />
      ))}
    </article>
  );
}
