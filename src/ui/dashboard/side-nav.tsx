import { signOut } from "@/auth";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";

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
    <Box sx={{ width: '30%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav>
        { links.map(link => (
          <List key={link.name}>
            <ListItemButton href={link.href}>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </List>
        ))}
      </nav>
      <nav>
        <form action={handleSignOut}>
          <button>Sign out</button>
        </form>
      </nav>
    </Box>
  );
}