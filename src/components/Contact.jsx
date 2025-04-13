
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };
  
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-4">
            {i18n.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            {i18n.language === 'ar'
              ? 'نحن هنا للإجابة على استفساراتك وتقديم الدعم اللازم. لا تتردد في التواصل معنا.'
              : 'We\'re here to answer your questions and provide the support you need. Don\'t hesitate to get in touch.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {i18n.language === 'ar' ? 'الاسم' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {i18n.language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {i18n.language === 'ar' ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="btn-primary w-full"
              >
                {formStatus === 'sending'
                  ? (i18n.language === 'ar' ? 'جاري الإرسال...' : 'Sending...')
                  : (i18n.language === 'ar' ? 'إرسال الرسالة' : 'Send Message')}
              </button>
              
              {formStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                  {i18n.language === 'ar'
                    ? 'تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.'
                    : 'Your message has been sent successfully. We\'ll be in touch soon.'}
                </div>
              )}
            </form>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {i18n.language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-primary-600 dark:text-primary-400 mt-1">📍</div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {i18n.language === 'ar'
                      ? 'شارع الملك فهد، الرياض، المملكة العربية السعودية'
                      : 'King Fahd Road, Riyadh, Saudi Arabia'}
                  </span>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-primary-600 dark:text-primary-400 mt-1">📞</div>
                  <span className="text-gray-600 dark:text-gray-300">+966 11 123 4567</span>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-primary-600 dark:text-primary-400 mt-1">✉️</div>
                  <span className="text-gray-600 dark:text-gray-300">info@marafiq.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {i18n.language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>{i18n.language === 'ar' ? 'الأحد - الخميس: 9 صباحًا - 6 مساءً' : 'Sunday - Thursday: 9am - 6pm'}</p>
                <p>{i18n.language === 'ar' ? 'الجمعة: مغلق' : 'Friday: Closed'}</p>
                <p>{i18n.language === 'ar' ? 'السبت: 10 صباحًا - 2 مساءً' : 'Saturday: 10am - 2pm'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
