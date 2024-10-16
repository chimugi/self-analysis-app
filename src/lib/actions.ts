'use server';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { z } from "zod";
import { signIn } from "../auth";
import { getSessionUser } from "./getter";
import prisma from "./prisma";

const ExperienceSchema = z.object({
  title: z.string(),
  experience: z.string(),
  positivePoint: z.coerce.number(),
  negativePoint: z.coerce.number(),
  eventDate: z.string(),
});

export async function addExperience(formData: FormData) {
  const user = await getSessionUser();
  const exp = Object.fromEntries(formData.entries());

  const experience = ExperienceSchema.parse(exp);
  const eventDate = new Date(experience.eventDate).toISOString();

  await prisma.experiences.create({
    data: {
      ...experience,
      eventDate,
      user: { connect: { email: user.email } },
    },
  });

  revalidatePath('/dashboard/experiences');
  redirect('/dashboard/experiences');
}

export async function updateExperience(formData: FormData, experienceId: string) {
  const user = await getSessionUser();
  const experience = ExperienceSchema.parse(Object.fromEntries(formData.entries()));
  const eventDate = new Date(experience.eventDate).toISOString();

  await prisma.experiences.update({
    where: { experienceId },
    data: {
      ...experience,
      eventDate,
      user: { connect: { email: user.email } },
    },
  });

  revalidatePath('/dashboard/experiences');
  redirect('/dashboard/experiences');
}

export async function deleteExperience(experienceId: string) {
  await prisma.experiences.delete({ where: { experienceId } });
  revalidatePath('/dashboard/experiences');
  redirect('/dashboard/experiences');
}

const ResumesSchema = z.object({
  belongsTo: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export async function addResume(formData: FormData) {
  const user = await getSessionUser();
  const resume = Object.fromEntries(formData.entries());

  const resumeData = ResumesSchema.parse(resume);
  const startDate = new Date(resumeData.startDate).toISOString();
  const endDate = new Date(resumeData.endDate).toISOString();

  await prisma.resumes.create({
    data: {
      ...resumeData,
      startDate,
      endDate,
      user: { connect: { email: user.email } },
    },
  });

  revalidatePath('/dashboard/resumes');
  redirect('/dashboard/resumes');
}

export async function updateResume(formData: FormData, resumeId: string) {
  const user = await getSessionUser();
  const resume = ResumesSchema.parse(Object.fromEntries(formData.entries()));
  const startDate = new Date(resume.startDate).toISOString();
  const endDate = new Date(resume.endDate).toISOString();

  await prisma.resumes.update({
    where: { resumeId },
    data: {
      ...resume,
      startDate,
      endDate,
      user: { connect: { email: user.email } },
    },
  });
}

export async function deleteResume(resumeId: string) {
  await prisma.resumes.delete({ where: { resumeId } });
  revalidatePath('/dashboard/resumes');
  redirect('/dashboard/resumes');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Someting went wrong.';
      }
    }
    throw error;
  }
}