import { getMotivationData } from '@/lib/chart-actions';
import LineChart from '@/ui/dashboard/line-chart';
import TitleBar from '@/ui/dashboard/titile-bar';

export default async function Visualization() {
  const { labels, positivePoints, negativePoints, belongsToData } = await getMotivationData();
  return (
    <>
      <TitleBar title="Visualization" />
      <LineChart
        labels={labels}
        positivePoints={positivePoints}
        negativePoints={negativePoints}
        belongsToData={belongsToData}
      />
    </>
  );
}
