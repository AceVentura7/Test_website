import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { Code, Palette, Globe } from 'lucide-react';

const services = [
  { title: 'Web Development', icon: Code, description: 'Custom web applications tailored to your needs.' },
  { title: 'UI/UX Design', icon: Palette, description: 'Beautiful and intuitive user interfaces that engage users.' },
  { title: 'SEO Optimization', icon: Globe, description: 'Improve your online visibility and reach more customers.' },
];

const Services = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center">
          My Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    <service.icon size={48} color="#FF6600" />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography>
                    {service.description}
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

export default Services;