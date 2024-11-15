import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function NavListDrawer({ navArrayLinks, NavLink, setOpen }) {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "white",
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        paddingTop: '20px',
      }}
    >
      <img src="afa.jpg" alt="AFA Logo" style={{ height: '80px', marginBottom: '10px' }} />

      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
                sx={{
                  padding: '16px',
                  '&:hover': {
                    backgroundColor: 'rgb(116, 172, 223)',
                    transform: 'scale(1.05)',
                    color: 'white',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'black' }}>{item.icon}</ListItemIcon>
                <ListItemText sx={{ fontSize: '18px', color: 'black' }}>
                  {item.title}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
