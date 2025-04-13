
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { i18n } = useTranslation();
  
  return (
    <section id="about" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-96 bg-primary-600 rounded-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary-200 dark:bg-secondary-700 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-6">
              {i18n.language === 'ar' ? 'من نحن' : 'About Us'}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {i18n.language === 'ar' 
                ? 'مرافق هي شركة رائدة في مجال إدارة المرافق في المملكة العربية السعودية، توفر حلولًا متكاملة تضمن كفاءة تشغيلية عالية وبيئة آمنة ومريحة.'
                : 'Marafiq is a leading facility management company in Saudi Arabia, providing integrated solutions that ensure high operational efficiency and a safe, comfortable environment.'}
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {i18n.language === 'ar'
                ? 'تأسست شركتنا على مبادئ الاحتراف والابتكار والالتزام، ونحن نسعى جاهدين لتقديم أفضل الخدمات لعملائنا من خلال فريق من المتخصصين ذوي الكفاءة العالية وباستخدام أحدث التقنيات.'
                : 'Our company was founded on the principles of professionalism, innovation, and commitment, and we strive to provide the best services to our clients through a team of highly competent specialists and using the latest technologies.'}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                <div className="text-gray-600 dark:text-gray-300">
                  {i18n.language === 'ar' ? 'سنوات من الخبرة' : 'Years of Experience'}
                </div>
              </div>
              
              <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">500+</div>
                <div className="text-gray-600 dark:text-gray-300">
                  {i18n.language === 'ar' ? 'مشاريع منجزة' : 'Completed Projects'}
                </div>
              </div>
              
              <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                <div className="text-gray-600 dark:text-gray-300">
                  {i18n.language === 'ar' ? 'عملاء سعداء' : 'Happy Clients'}
                </div>
              </div>
              
              <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">200+</div>
                <div className="text-gray-600 dark:text-gray-300">
                  {i18n.language === 'ar' ? 'موظف محترف' : 'Professional Staff'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
