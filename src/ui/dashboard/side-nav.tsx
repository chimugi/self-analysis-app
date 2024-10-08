import { signOut } from "@/auth";
import Link from "next/link";

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
        <div key={link.name}
          className="p-3">
          <Link href={link.href} className="block w-full h-full text-xl hover:bg-sky-100">
            {link.name}
          </Link>
        </div>
      ))}
      <div className="p-3">
        <form action={handleSignOut}>
          <button className="block w-full h-full text-xl text-left hover:bg-sky-100">Sign out</button>
        </form>
      </div>
    </div>
  );
}