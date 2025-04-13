
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <section id="home" className="section bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-primary-900 dark:to-secondary-900">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-bold text-primary-800 dark:text-primary-100 leading-tight animate-fade-in">
            {t('title')}
          </h1>
          <p className="text-lg text-center lg:text-left mt-6 text-gray-600 dark:text-gray-300 max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('description')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#services" className="btn-primary">
              {i18n.language === 'ar' ? 'استكشف خدماتنا' : 'Explore Our Services'}
            </a>
            <a href="#contact" className="px-6 py-2.5 border-2 border-primary-600 text-primary-600 font-medium text-sm rounded hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150 ease-in-out">
              {i18n.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </a>
          </div>
        </div>
        
        <div className="flex flex-1 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-full h-auto max-w-md bg-primary-600 rounded-xl shadow-2xl overflow-hidden">
            <div className="h-64 bg-primary-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
