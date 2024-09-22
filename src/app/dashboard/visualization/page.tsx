import { getMotivationData } from "@/lib/chart-actions";
import LineChart from "@/ui/dashboard/line-chart";

export default async function Visualization() {
  const { labels, positivePoints, negativePoints } = await getMotivationData();
  return (
    <div>
      <h1>Visualization</h1>
      <LineChart labels={labels} positivePoints={positivePoints} negativePoints={negativePoints} />
    </div>
  );
}
