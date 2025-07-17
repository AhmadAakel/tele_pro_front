// import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="relative pt-20 bg-gradient-to-b from-[#117CA2] to-[#117CA2]/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              {t('hero.title')}
            </h2>
            <p className="text-lg md:text-xl text-[#D9D9D9] leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a href='#courses' className="border-2 border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white/10 transition-colors">
                {t('hero.button')}
              </a>
            </div>
            <div className="pt-6 text-[#D9D9D9]">
              <p>{t('hero.slogen')}</p>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/hero.jpg" 
              alt="Students learning" 
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;