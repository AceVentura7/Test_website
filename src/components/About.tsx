import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center">
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                My Background
              </Typography>
              <Typography>
                I'm a skilled web developer with experience in creating responsive and user-friendly websites. My passion for coding and problem-solving drives me to continuously learn and improve my skills.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                My Skills
              </Typography>
              <Typography>
                - Front-end: React, Vue.js, HTML5, CSS3, JavaScript<br />
                - Back-end: Node.js, Express, Python<br />
                - Databases: MongoDB, MySQL, PostgreSQL<br />
                - Tools: Git, Docker, AWS
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;