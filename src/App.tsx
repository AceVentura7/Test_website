import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Testimonials />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;