import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen relative z-10 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }} 
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} 
        exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }} 
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-4xl md:text-6xl mb-8">{t('about.title')}</h1>
        <div className="space-y-6 text-lg text-vercel-gray-400 leading-relaxed">
          <p>
            {t('about.subtitle')}
          </p>
          
          <h2 className="text-2xl text-white mt-12 mb-4">{t('about.missionTitle')}</h2>
          <p>
            {t('about.missionText')}
          </p>

          <h2 className="text-2xl text-white mt-12 mb-4">{t('about.approachTitle')}</h2>
          <p>
            {t('about.approachText')}
          </p>
          
          <h2 className="text-2xl text-white mt-12 mb-4">{t('about.whoWeAreTitle')}</h2>
          <p>
            {t('about.whoWeAreText')}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
