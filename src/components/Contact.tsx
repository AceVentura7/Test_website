import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Typography paragraph>
              Have a question or want to work together? Fill out the form, and I'll get back to you as soon as possible.
            </Typography>
            <Typography>
              Email: your.email@example.com<br />
              Phone: (123) 456-7890<br />
              Location: City, Country
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Name" variant="outlined" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email" variant="outlined" type="email" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Message" variant="outlined" multiline rows={4} required />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" size="large" type="submit">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;