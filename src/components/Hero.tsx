import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        color: 'background.default',
        py: 12,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to My Personal Website
        </Typography>
        <Typography variant="h5" component="p" paragraph>
          I'm a passionate developer creating amazing web experiences.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;