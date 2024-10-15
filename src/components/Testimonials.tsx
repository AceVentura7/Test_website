import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Corp',
    content: 'Working with this developer was a game-changer for our project. Their expertise and dedication are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, Brand Co',
    content: 'The website they created for us not only looks great but also performs exceptionally well. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={3}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Avatar src={testimonial.avatar} sx={{ width: 80, height: 80, mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {testimonial.role}
                  </Typography>
                  <Typography variant="body1">
                    "{testimonial.content}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;