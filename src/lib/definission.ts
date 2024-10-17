export type Experience = {
  experienceId: string;
  title: string;
  experience: string;
  positivePoint: number;
  negativePoint: number;
  eventDate: Date;
};

export type Resume = {
  resumeId: string;
  belongsTo: string;
  startDate: Date;
  endDate: Date;
};

export type User = {
  id: string;
  email: string;
  password: string;
};
