
import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-800">
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary-600">Marafiq</span>
        </div>
        
        <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
          <a href="#home" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
            {i18n.language === 'ar' ? 'الرئيسية' : 'Home'}
          </a>
          <a href="#services" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
            {i18n.language === 'ar' ? 'الخدمات' : 'Services'}
          </a>
          <a href="#about" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
            {i18n.language === 'ar' ? 'عن الشركة' : 'About'}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
            {i18n.language === 'ar' ? 'اتصل بنا' : 'Contact'}
          </a>
        </div>
        
        <button 
          onClick={toggleLanguage} 
          className="flex items-center space-x-2 rtl:space-x-reverse bg-secondary-100 dark:bg-secondary-800 px-4 py-2 rounded-full"
        >
          <span className="text-sm font-medium">{t('language')}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
