import Hero from '../components/Hero';
import Services from '../components/Services';
import Automations from '../components/Automations';
import CostComparison from '../components/CostComparison';
import TechStack from '../components/TechStack';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (searchParams.get('success')) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setSearchParams({}, { replace: true });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams, setSearchParams]);

  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }} 
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} 
      exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }} 
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md"
          >
            <div className="bg-white text-black p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-sm">¡Mensaje enviado!</p>
                  <p className="text-xs text-vercel-gray-600">Nos pondremos en contacto contigo pronto.</p>
                </div>
              </div>
              <button onClick={() => setShowSuccess(false)} className="p-1 hover:bg-black/5 rounded-full transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Helmet>
        <title>Digital Constructions | {t('hero.badge')}</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>
      <Hero />
      <Services />
      <Automations />
      <CostComparison />
      <TechStack />
    </motion.main>
  );
}
