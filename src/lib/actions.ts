'use server';
import { z } from "zod";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cuid from "cuid";

const ExperienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  experience: z.string(),
  positivePoint: z.coerce.number(),
  negativePoint: z.coerce.number(),
  eventDate: z.string(),
});

export async function addExperience(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const id = cuid();
  
  const exp = Object.assign({}, data, { id });

  const experience = ExperienceSchema.parse(exp);
  const eventDate = new Date(experience.eventDate).toISOString();

  await prisma.experiences.create({
    data: { ...experience, eventDate},
  });

  revalidatePath('/dashboard/experiences');
  redirect('/dashboard/experiences');
}

export async function updateExperience(formData: FormData) {
  const experience = ExperienceSchema.parse(Object.fromEntries(formData.entries()));
  const id = experience.id;
  const eventDate = new Date(experience.eventDate).toISOString();

  await prisma.experiences.update({
    where: { id },
    data: { ...experience, eventDate },
  });

  revalidatePath('/dashboard/experiences');
  redirect('/dashboard/experiences');
}

export async function deleteExperience(id: string) {
  await prisma.experiences.delete({ where: { id } });
  revalidatePath('/dashboard/experiences');
  redirect('/dashboard/experiences');
}

const ResumesSchema = z.object({
  id: z.string(),
  belongsTo: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export async function addResume(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const id = cuid();
  
  const resume = Object.assign({}, data, { id });
  console.log(resume);

  const resumeData = ResumesSchema.parse(resume);
  const startDate = new Date(resumeData.startDate).toISOString();
  const endDate = new Date(resumeData.endDate).toISOString();

  await prisma.resumes.create({
    data: { ...resumeData, startDate, endDate },
  });

  revalidatePath('/dashboard/resumes');
  redirect('/dashboard/resumes');
}

export async function updateResume(formData: FormData) {
  const resume = ResumesSchema.parse(Object.fromEntries(formData.entries()));
  const id = resume.id;
  const startDate = new Date(resume.startDate).toISOString();
  const endDate = new Date(resume.endDate).toISOString();

  await prisma.resumes.update({
    where: { id },
    data: { ...resume, startDate, endDate },
  });

  revalidatePath('/dashboard/resumes');
  redirect('/dashboard/resumes');
}

export async function deleteResume(id: string) {
  await prisma.resumes.delete({ where: { id } });
  revalidatePath('/dashboard/resumes');
  redirect('/dashboard/resumes');
}