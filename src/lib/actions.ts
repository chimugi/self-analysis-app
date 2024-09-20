'use server';
import { z } from "zod";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ExperienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  experience: z.string(),
  positivePoint: z.coerce.number(),
  negativePoint: z.coerce.number(),
  startDate: z.string(),
  endDate: z.string(),
});

export async function addExperience(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const id = new Date().getTime().toString();
  
  const exp = Object.assign({}, data, { id });

  const experience = ExperienceSchema.parse(exp);
  const startDate = new Date(experience.startDate).toISOString();
  const endDate = new Date(experience.endDate).toISOString();

  await prisma.experiences.create({
    data: { ...experience, startDate, endDate },
  });

  revalidatePath('/dashboard/experiences');
  redirect('/dashboard/experiences');
}
