import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const CTA = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'background.default', py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Ready to Start Your Project?
        </Typography>
        <Typography variant="h6" paragraph>
          Let's work together to bring your ideas to life!
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get in Touch
        </Button>
      </Container>
    </Box>
  );
};

export default CTA;