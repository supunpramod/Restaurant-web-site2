import React from 'react';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;