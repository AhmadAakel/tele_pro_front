import React from 'react';
import { CheckCircle, Landmark, BookOpen, TrendingUp, Package, LifeBuoy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Roadmap = () => {
  const { t } = useTranslation();

  const roadmapItems = [
    {
      id: 1,
      title: t('roadmap.one.title'),
      description: t('roadmap.one.description'),
      icon: Landmark,
      highlights: t('roadmap.one.details', { returnObjects: true })
    },
    {
      id: 2,
      title: t('roadmap.two.title'),
      description: t('roadmap.two.description'),
      icon: Package,
      highlights: t('roadmap.two.details', { returnObjects: true })
    },
    {
      id: 3,
      title: t('roadmap.three.title'),
      description: t('roadmap.three.description'),
      icon: TrendingUp,
      highlights: t('roadmap.three.details', { returnObjects: true })
    },
    {
      id: 4,
      title: t('roadmap.four.title'),
      description: t('roadmap.four.description'),
      icon: BookOpen,
      highlights: t('roadmap.four.details', { returnObjects: true })
    },
    {
      id: 5,
      title: t('roadmap.five.title'),
      description: t('roadmap.five.description'),
      icon: LifeBuoy,
      highlights: t('roadmap.five.details', { returnObjects: true })
    }
  ];

  const RoadmapItem = ({ item, index, isLast }) => {
    return (
      <div className="relative flex items-start group">
        {!isLast && (
          <div className="absolute top-6 left-4 w-0.5 h-full bg-[#D9D9D9] group-hover:bg-[#117CA2] transition-colors duration-300"></div>
        )}
        
        <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#117CA2] text-white mr-4 shrink-0">
          <item.icon className="w-4 h-4" />
        </div>
        
        <div className="pt-1 pb-8">
          <div className="flex items-center">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#D9D9D9] text-[#2c2928] mr-3">
              {index + 1}
            </span>
            <h3 className="text-xl font-semibold text-[#2c2928]">{item.title}</h3>
          </div>
          <p className="mt-2 text-gray-600">{item.description}</p>
          <ul className="mt-4 space-y-2">
            {item.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-4 h-4 text-[#117CA2] mt-1 mr-2 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div id="roadmap" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c2928]">{t('roadmap.title')}</h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('roadmap.description')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12">
          {roadmapItems.map((item, index) => (
            <RoadmapItem 
              key={item.id} 
              item={item} 
              index={index}
              isLast={index === roadmapItems.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;