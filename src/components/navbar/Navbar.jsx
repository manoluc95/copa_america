import { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Menu, MenuItem, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import NavListDrawer from "./NavListDrawer"; 

export default function Navbar({ navArrayLinks }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "rgb(116, 172, 223, 0.5)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <img src="/img/ESCUDO.png" alt="AFA Logo" style={{ height: "40px", marginLeft: "10px" }} />
          </Box>
          <Box>
            <IconButton color="inherit" size="large" onClick={() => setOpen(true)} edge="start">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={() => { navigate("/copa_america"); handleMenuClose(); }}>
                Copa América
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen} />
      </Drawer>
    </>
  );
}
