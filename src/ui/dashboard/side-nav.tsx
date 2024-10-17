import Link from 'next/link';
import { signOut } from '@/auth';

const links = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Resumes', href: '/dashboard/resumes' },
  { name: 'Experiences', href: '/dashboard/experiences' },
  { name: 'Visualization', href: '/dashboard/visualization' }
];

export default function SideNav() {
  const handleSignOut = async () => {
    'use server';
    await signOut();
  };

  return (
    <div>
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="block size-full p-3 text-xl hover:bg-sky-100">
          {link.name}
        </Link>
      ))}
      <form action={handleSignOut}>
        <button className="block size-full p-3 text-left text-xl hover:bg-sky-100">Sign out</button>
      </form>
    </div>
  );
}
