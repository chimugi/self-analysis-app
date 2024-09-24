import { Experience, Resume } from "./definission";
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

export function generatePeriodsData(startYear: number, endYear: number, resumes: Resume[]) {
  return Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return Array.from({ length: 12 }, (_, j) => {
      const newDate = new Date(year, j);
      const [newYear, newMonth] = [newDate.getFullYear(), newDate.getMonth()];
      const period = resumes.filter(e => {
        const year = e.startDate.getFullYear();
        const month = e.startDate.getMonth();
        return year <= newYear && newYear <= e.endDate.getFullYear() && (year < newYear || month >= e.startDate.getMonth()) && (newYear < e.endDate.getFullYear() || newMonth <= e.endDate.getMonth());
      });
      return period;
    });
  }).flat();
}
export function generateBelongsToData(startYear: number, endYear: number, resumes: Resume[]) {
  const totalMonths = (endYear - startYear + 1) * 12;
  const belongsToData: {
    label: string;
    data: (number | null)[];
    backgroundColor: string;
  }[] = resumes.map(resume => {
    const startMonthIndex = (resume.startDate.getFullYear() - startYear) * 12 + resume.startDate.getMonth();
    const endMonthIndex = (resume.endDate.getFullYear() - startYear) * 12 + resume.endDate.getMonth();

    const data = Array(totalMonths).fill(null).map((_, i) => {
      return i >= startMonthIndex && i <= endMonthIndex ? 15 : null;
    });

    return {
      label: resume.belongsTo,
      data,
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},0.3)`,
    };
  });

  return belongsToData;
}

export  async function getMotivationData(): Promise<{
  labels: string[];
  positivePoints: (number | null)[];
  negativePoints: (number | null)[];
  belongsToData: {
    label: string;
    data: (number | null)[];
    backgroundColor: string;
  }[];
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
  const belongsToData = generateBelongsToData(startYear, endYear, resumes);

  return { labels, positivePoints, negativePoints, belongsToData };
}