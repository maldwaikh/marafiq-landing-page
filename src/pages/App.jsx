
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Import components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function App() {
  const { i18n } = useTranslation();

  // Set the initial document direction based on the language
  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className={`min-h-screen flex flex-col ${i18n.language === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
