import { motion } from 'motion/react';
import { Terminal, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-white" />
          <span className="font-semibold text-sm tracking-tight">{t('nav.brand')}</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-vercel-gray-400">
          {isHome ? (
            <>
              <a href="#services" className="hover:text-white transition-colors">{t('nav.services')}</a>
              <a href="#automations" className="hover:text-white transition-colors">{t('nav.automations')}</a>
            </>
          ) : (
            <>
              <Link to="/#services" className="hover:text-white transition-colors">{t('nav.services')}</Link>
              <Link to="/#automations" className="hover:text-white transition-colors">{t('nav.automations')}</Link>
            </>
          )}
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
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-vercel-gray-400 hover:text-white transition-colors hidden md:block"
          >
            {t('nav.login')}
          </motion.button>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-vercel-gray-200 transition-colors"
            >
              {t('nav.contact')}
            </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
