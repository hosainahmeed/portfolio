import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const NavbarContent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);


  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'About Me', to: 'about' },
    { label: 'Services', to: 'services' },
    { label: 'Skills', to: 'skills' },
    { label: 'Work strategy ', to: 'strategy' },
    { label: 'Sample Work', to: 'sample' },
    { label: 'Blog', to: 'blog' },
    { label: 'Contact', to: 'contact' },
  ];

  const activeStyle = {
    borderBottom:"2px solid #E61513",
    color:"#E61513"
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#111',marginBottom:'20px',borderEndStartRadius:'20px',borderEndEndRadius:'20px'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
          Farzana Houqe
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
          {menuItems.map((item) => (
            <Button
              key={item.to}
              color="inherit"
              sx={{ '& .active': activeStyle}} 
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                className='px-2 py-1 text-xs hover:text-[#E61513]'
              >
                {item.label}
              </Link>
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: 'flex', lg: 'none' } }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton
                  sx={{ '& .active': activeStyle }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="active"
                  >
                    <ListItemText primary={item.label} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavbarContent;
