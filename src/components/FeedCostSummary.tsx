import KPI from './KPI';

type FeedCostItem = {
  title: string;
  value: string;
  detail: string;
};

type FeedCostSummaryProps = {
  items: FeedCostItem[];
};

export default function FeedCostSummary({ items }: FeedCostSummaryProps) {
  return (
    <article className="summary-card">
      <h3>Feed cost summary</h3>
      {items.map((item) => (
        <KPI key={item.title} label={item.title} value={item.value} detail={item.detail} />
      ))}
    </article>
  );
}
