import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'secondary.main', color: 'background.default', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Your Name
            </Typography>
            <Typography variant="body2">
              Creating amazing web experiences and solving complex problems through code.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block">Home</Link>
            <Link href="#" color="inherit" display="block">About</Link>
            <Link href="#" color="inherit" display="block">Services</Link>
            <Link href="#" color="inherit" display="block">Contact</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit"><Github /></Link>
              <Link href="#" color="inherit"><Linkedin /></Link>
              <Link href="#" color="inherit"><Twitter /></Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;