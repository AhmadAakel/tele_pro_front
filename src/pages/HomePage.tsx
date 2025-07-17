import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrialVideos from '../components/TrialVideos';
import Roadmap from '../components/Roadmap';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import RegistrationForm from '../components/RegistrationForm';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RegistrationForm />
      <TrialVideos />
      <Roadmap />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default HomePage;