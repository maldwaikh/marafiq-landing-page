
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-lg mb-6">{t('description')}</p>
      <button onClick={toggleLanguage} className="px-4 py-2 bg-indigo-600 text-white rounded shadow">
        {t('language')}
      </button>
    </main>
  );
}
