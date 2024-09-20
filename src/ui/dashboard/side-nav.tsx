import { Box, List, ListItemButton, ListItemText } from "@mui/material";

const links = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Experiences', href: '/dashboard/experiences' },
  { name: 'Visualization', href: '/dashboard/visualization' },
];

export default function SideNav() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav>
        { links.map(link => (
          <List key={link.name}>
            <ListItemButton href={link.href}>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </List>
        ))}
      </nav>
    </Box>
  );
}