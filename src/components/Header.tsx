import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
          Your Name
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Menu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;