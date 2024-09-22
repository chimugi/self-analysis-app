import prisma from "./prisma";

export async function getLatestId() {
  const latestExperience = await prisma.experiences.findFirst({
    orderBy: { id: 'desc' },
    select: { id: true },
  });

  return latestExperience ? latestExperience.id + 1 : 1;
}

export async function getExperiences() {
  return await prisma.experiences.findMany();
}

export async function getExperienceById(id: string) {
  return await prisma.experiences.findFirst({
    where: { id },
  });
}

export async function getResumes() {
  return await prisma.resumes.findMany();
}