import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { MdTranslate } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { CIcon } from '@coreui/icons-react';
import { cifSa } from '@coreui/icons';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#117CA2] shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-white mr-2" />
            <span className="text-white font-bold text-xl">{t('navitem.logo')}</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-[#D9D9D9] transition-colors">{t('navitem.items.0')}</a>
            <a href="#courses" className="text-white hover:text-[#D9D9D9] transition-colors">{t('navitem.items.1')}</a>
            <a href="#roadmap" className="text-white hover:text-[#D9D9D9] transition-colors">{t('navitem.items.2')}</a>
            <a href="#about" className="text-white hover:text-[#D9D9D9] transition-colors">{t('navitem.items.3')}</a>
            <a href="#contact" className="text-white hover:text-[#D9D9D9] transition-colors">{t('navitem.items.4')}</a>
            <a href='#register' className="bg-white text-[#117CA2] font-semibold py-2 px-4 rounded-md hover:bg-[#D9D9D9] transition-colors">
              {t('navitem.button')}
            </a>
            <button onClick={toggleLanguage} className="p-1">
              {i18n.language === 'en' ? 
                <MdTranslate color="#FFF" size={25} /> : 
                <AiOutlineGlobal color="#FFF" size={25} />

              }
              
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#117CA2] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-white block px-3 py-2 rounded-md hover:bg-[#2c2928]/20">{t('navitem.items.0')}</a>
            <a href="#courses" className="text-white block px-3 py-2 rounded-md hover:bg-[#2c2928]/20">{t('navitem.items.1')}</a>
            <a href="#roadmap" className="text-white block px-3 py-2 rounded-md hover:bg-[#2c2928]/20">{t('navitem.items.2')}</a>
            <a href="#about" className="text-white block px-3 py-2 rounded-md hover:bg-[#2c2928]/20">{t('navitem.items.3')}</a>
            <a href="#contact" className="text-white block px-3 py-2 rounded-md hover:bg-[#2c2928]/20">{t('navitem.items.4')}</a>
            <button 
              onClick={toggleLanguage}
              className="text-white block px-3 py-2 rounded-md hover:bg-[#2c2928]/20 w-full text-left"
            >
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
            <a href='#register' className="w-full text-center bg-white text-[#117CA2] font-semibold py-2 px-4 rounded-md hover:bg-[#D9D9D9] transition-colors mt-3 block">
              {t('navitem.button')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}