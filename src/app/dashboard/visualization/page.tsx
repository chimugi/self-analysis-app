import { getExperiences, getResumes } from "@/lib/getter";
import LineChart from "@/ui/dashboard/line-chart";

export default async function Visualization() {
  const [resumes, experiences] = await Promise.all([
    getResumes(),
    getExperiences(),
  ]);

  const startDates = resumes.map(r => r.startDate);
  const startYear = new Date(Math.min(...startDates.map(date => new Date(date).getTime()))).getFullYear();
  
  const endDates = resumes.map(r => r.endDate);
  const endYear = new Date(Math.max(...endDates.map(date => new Date(date).getTime()))).getFullYear();

  const labels = Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return Array.from({ length: 12 }, (_, j) => new Date(year, j));
  }).flat();

  const positivePoints = Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return Array.from({ length: 12 }, (_, j) => {
      const newDate = new Date(year, j);
      const [newYear, newMonth] = [newDate.getFullYear(), newDate.getMonth()];
      const positivePoint = experiences.filter(e => {
        const year = e.eventDate.getFullYear();
        const month = e.eventDate.getMonth();
        return year === newYear && month === newMonth;
      })[0]?.positivePoint;
      return positivePoint ?? new Date(year, j);
    });
  }).flat().map((point: Date | number) => point instanceof Date ? null : point);

  const negativePoints = Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return Array.from({ length: 12 }, (_, j) => {
      const newDate = new Date(year, j);
      const [newYear, newMonth] = [newDate.getFullYear(), newDate.getMonth()];
      const negativePoint = experiences.filter(e => {
        const year = e.eventDate.getFullYear();
        const month = e.eventDate.getMonth();
        return year === newYear && month === newMonth;
      })[0]?.negativePoint;
      return negativePoint ?? new Date(year, j);
    });
  }).flat()
    .map((point: Date | number) => point instanceof Date ? null : point)
    .map((point: number | null) => point === null ? null : -point);

  return (
    <div>
      <h1>Visualization</h1>
      <LineChart labels={labels} positivePoints={positivePoints} negativePoints={negativePoints} />
    </div>
  );  
}