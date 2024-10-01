import { User } from '@/lib/definission';
import prisma from '@/lib/prisma';
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

async function getUser(email: string): Promise<User | null> {
  const user = await prisma.users.findFirst({
    where: { email }
  });
  return user;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
      const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse(credentials);
      
      if (parsedCredentials.success) {
        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);
        if (!user) return null;
        //const passwordMatch = await bcrypt.compare(password, user.password);
        //console.log({email, password}, user, passwordMatch);
        const passwordMatch = password === user.password;
        if (passwordMatch) {
          return user;
        }
      }
      
      return null;
    },
  })],
});