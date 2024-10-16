import Link from "next/link";
import { signOut } from "@/auth";

const links = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Resumes', href: '/dashboard/resumes' },
  { name: 'Experiences', href: '/dashboard/experiences' },
  { name: 'Visualization', href: '/dashboard/visualization' },
];

export default function SideNav() {
  const handleSignOut = async () => {
    'use server';
    await signOut();
  };

  return (
    <div>
      {links.map(link => (  
        <Link key={link.name} href={link.href} className="block p-3 w-full h-full text-xl hover:bg-sky-100">
          {link.name}
        </Link>
      ))}
      <form action={handleSignOut}>
        <button className="block p-3 w-full h-full text-xl text-left hover:bg-sky-100">Sign out</button>
      </form>
    </div>
  );
}