import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { servicesData } from '../data/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img src="/logo.svg" alt="Digital Constructions Logo" className="w-6 h-6" />
          <span className="font-semibold text-sm tracking-tight">{t('nav.brand')}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-vercel-gray-400">
          <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
          <div className="relative group py-6">
            <button className="flex items-center gap-1 hover:text-white transition-colors outline-none cursor-pointer">
              {t('nav.services')}
              <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 overflow-hidden flex flex-col gap-1 -mt-2">
              {servicesData.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="flex items-center px-4 py-3 rounded-lg hover:bg-white/5 transition-colors gap-3"
                >
                  <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-white/90 font-medium text-sm leading-tight hover:text-white">{t(`services.items.${service.id}.title`, { defaultValue: service.title })}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link to="/automations" className="hover:text-white transition-colors">{t('nav.automations')}</Link>
          <Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm text-vercel-gray-400 hover:text-white transition-colors"
            title="Toggle Language"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{i18n.language.substring(0, 2)}</span>
          </button>
          <Link to="/contact" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-vercel-gray-200 transition-colors"
            >
              {t('nav.contact')}
            </motion.button>
          </Link>
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-sm text-vercel-gray-300">                <Link to="/" onClick={closeMenu} className="flex items-center justify-between py-2 text-left hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between py-2 text-left hover:text-white transition-colors"
                >
                  {t('nav.services')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-2 pl-4 border-l border-white/10 overflow-hidden"
                    >
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          onClick={closeMenu}
                          className="py-2 flex items-center gap-2 hover:text-white transition-colors"
                        >
                          <div className="w-4 h-4 shrink-0">{service.icon}</div>
                          <span>{t(`services.items.${service.id}.title`, { defaultValue: service.title })}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/automations" onClick={closeMenu} className="py-2 hover:text-white transition-colors">{t('nav.automations')}</Link>
              <Link to="/about" onClick={closeMenu} className="py-2 hover:text-white transition-colors">{t('nav.about')}</Link>
              <Link to="/contact" onClick={closeMenu} className="py-2 hover:text-white transition-colors text-white font-medium">{t('nav.contact')}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
</nav>
  );
}
