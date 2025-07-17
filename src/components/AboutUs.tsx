// import React from 'react';
import { Users, Award, Book, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  const stats = [
    { id: 1, label: t('about.icons.0'), value: '10,000+', icon: Users },
    { id: 2, label: t('about.icons.1'), value: '150+', icon: Book },
    { id: 3, label: t('about.icons.2'), value: '25+', icon: Award },
    { id: 4, label: t('about.icons.3'), value: '92%', icon: Target },
  ];

  const values = [
    {
      id: 1,
      title: t('our values.Quality Education.0'),
      description: t('our values.Quality Education.1'),
    },
    {
      id: 2,
      title: t('our values.Accessibility.0'),
      description: t('our values.Accessibility.1'),
    },
    {
      id: 3,
      title: t('our values.Innovation.0'),
      description: t('our values.Innovation.1'),
    },
    {
      id: 4,
      title: t('our values.Student Success.0'),
      description: t('our values.Student Success.1'),
    },
  ];

  return (
    <div id="about" className="py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c2928]">{t('about.title')}</h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#2c2928] mb-4">{t('about.Our Story')}</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              {t('about.one')}
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              {t('about.two.0')}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('about.two.1')}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('about.two.2')}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('about.two.3')}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('about.two.4')}
            </p>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {t('about.two.5')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('about.three')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#117CA2]/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-[#117CA2]" />
                </div>
                <div className="text-3xl font-bold text-[#117CA2]">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-[#2c2928] text-center mb-8">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-[#117CA2]">
                <h4 className="text-xl font-semibold text-[#2c2928] mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;