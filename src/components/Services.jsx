
import React from 'react';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-slide-up hover:shadow-lg transition-shadow duration-300">
      <div className="w-14 h-14 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-6">
        <div className="text-primary-600 dark:text-primary-300 text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Services = () => {
  const { i18n } = useTranslation();
  
  const services = [
    {
      title: i18n.language === 'ar' ? 'إدارة المرافق' : 'Facility Management',
      description: i18n.language === 'ar' 
        ? 'إدارة كاملة للمرافق مع صيانة دورية وخدمات تشغيل احترافية.'
        : 'Comprehensive facility management with routine maintenance and professional operations services.',
      icon: '🏢'
    },
    {
      title: i18n.language === 'ar' ? 'أنظمة أمان متطورة' : 'Advanced Security Systems',
      description: i18n.language === 'ar'
        ? 'أنظمة حماية متطورة مع مراقبة على مدار الساعة وتقنيات متقدمة.'
        : 'Cutting-edge security systems with 24/7 monitoring and advanced technologies.',
      icon: '🔒'
    },
    {
      title: i18n.language === 'ar' ? 'حلول الطاقة' : 'Energy Solutions',
      description: i18n.language === 'ar'
        ? 'حلول طاقة مستدامة تساعد في تقليل التكاليف وتحسين كفاءة المباني.'
        : 'Sustainable energy solutions that help reduce costs and improve building efficiency.',
      icon: '⚡'
    },
    {
      title: i18n.language === 'ar' ? 'خدمات النظافة' : 'Cleaning Services',
      description: i18n.language === 'ar'
        ? 'خدمات نظافة احترافية للحفاظ على مرافقك في أفضل حالة دائمًا.'
        : 'Professional cleaning services to keep your facilities in optimal condition at all times.',
      icon: '✨'
    },
  ];

  return (
    <section id="services" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-4">
            {i18n.language === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            {i18n.language === 'ar' 
              ? 'نقدم مجموعة متكاملة من خدمات إدارة المرافق المصممة خصيصًا لتلبية احتياجاتك.'
              : 'We offer a comprehensive suite of facility management services tailored to meet your needs.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} style={{ animationDelay: `${0.1 * index}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
