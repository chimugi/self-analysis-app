import { Experience } from "./definission";
import { getExperiences, getResumes } from "./getter";

export function generateLabels(startYear: number, endYear: number): string[] {
  return Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return Array.from({ length: 12 }, (_, j) => {
      return `${year}-${j + 1}`;
    });
  }).flat();
}

export function generatePoints(startYear: number, endYear: number, experiences: Experience[], pointType: 'positivePoint' | 'negativePoint'): (number | null)[] {
  return Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return Array.from({ length: 12 }, (_, j) => {
      const newDate = new Date(year, j);
      const [newYear, newMonth] = [newDate.getFullYear(), newDate.getMonth()];
      const point = experiences.filter(e => {
        const year = e.eventDate.getFullYear();
        const month = e.eventDate.getMonth();
        return year === newYear && month === newMonth;
      })[0]?.[pointType];
      return point ?? new Date(year, j);
    });
  }).flat().map((point: Date | number) => point instanceof Date ? null : point);
}

export  async function getMotivationData(): Promise<{
  labels: string[];
  positivePoints: (number | null)[];
  negativePoints: (number | null)[];
}> {
  const [resumes, experiences] = await Promise.all([
    getResumes(),
    getExperiences(),
  ]);
  const startDates = resumes.map(e => e.startDate);
  const startYear = new Date(Math.min(...startDates.map(date => new Date(date).getTime()))).getFullYear();
  
  const endDates = resumes.map(e => e.endDate);
  const endYear = new Date(Math.max(...endDates.map(date => new Date(date).getTime()))).getFullYear();

  const labels = generateLabels(startYear, endYear);

  const positivePoints = generatePoints(startYear, endYear, experiences, 'positivePoint');
  const negativePoints = generatePoints(startYear, endYear, experiences, 'negativePoint').map(point => point === null ? null : -point);

  return { labels, positivePoints, negativePoints };
}