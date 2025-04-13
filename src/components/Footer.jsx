
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Marafiq</h3>
            <p className="text-gray-400 mb-4">
              {i18n.language === 'ar'
                ? 'شركة رائدة في مجال إدارة المرافق والخدمات المتكاملة في المملكة العربية السعودية.'
                : 'A leading company in facility management and integrated services in Saudi Arabia.'}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {i18n.language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {i18n.language === 'ar' ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {i18n.language === 'ar' ? 'الخدمات' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {i18n.language === 'ar' ? 'عن الشركة' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {i18n.language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {i18n.language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {i18n.language === 'ar' ? 'إدارة المرافق' : 'Facility Management'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {i18n.language === 'ar' ? 'أنظمة الأمان' : 'Security Systems'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {i18n.language === 'ar' ? 'حلول الطاقة' : 'Energy Solutions'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {i18n.language === 'ar' ? 'خدمات النظافة' : 'Cleaning Services'}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {i18n.language === 'ar' ? 'النشرة الإخبارية' : 'Newsletter'}
            </h3>
            <p className="text-gray-400 mb-4">
              {i18n.language === 'ar'
                ? 'اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والتحديثات.'
                : 'Subscribe to our newsletter for the latest news and updates.'}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={i18n.language === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 rounded-r-md"
              >
                {i18n.language === 'ar' ? 'إرسال' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            {i18n.language === 'ar'
              ? `© ${year} مرافق. جميع الحقوق محفوظة.`
              : `© ${year} Marafiq. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
