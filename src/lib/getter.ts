import { auth } from '@/auth';
import { User } from './definission';
import prisma from './prisma';

export async function getExperiences() {
  const user = await getSessionUser();
  return await prisma.experiences.findMany({ where: { user: { email: user.email } } });
}

export async function getExperienceById(experienceId: string) {
  const user = await getSessionUser();
  return await prisma.experiences.findFirst({
    where: { experienceId, user: { email: user.email } }
  });
}

export async function getResumes() {
  const user = await getSessionUser();
  return await prisma.resumes.findMany({ where: { user: { email: user.email } } });
}

export async function getResumeById(resumeId: string) {
  const user = await getSessionUser();
  return await prisma.resumes.findFirst({
    where: { resumeId, user: { email: user.email } }
  });
}

export async function getUser(email: string): Promise<User | null> {
  const user = await prisma.users.findFirst({
    where: { email }
  });
  return user;
}

export async function getSessionUser() {
  const session = await auth();
  if (!session || !session.user?.email) throw new Error('User not authenticated');
  return (await getUser(session.user.email)) as User;
}
