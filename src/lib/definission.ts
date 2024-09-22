export type Experience = {
  id: string;
  title: string;
  experience: string;
  positivePoint: number;
  negativePoint: number;
  eventDate: Date;
};

export type Resume = {
  id: string;
  belongsTo: string;
  startDate: Date;
  endDate: Date;
};