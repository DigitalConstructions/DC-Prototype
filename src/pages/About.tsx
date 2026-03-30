import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen relative z-10 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">{t('about.title')}</h1>
        <div className="space-y-6 text-lg text-vercel-gray-400 leading-relaxed font-light">
          <p>
            {t('about.subtitle')}
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-12 mb-4 tracking-tight">{t('about.missionTitle')}</h2>
          <p>
            {t('about.missionText')}
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-4 tracking-tight">{t('about.approachTitle')}</h2>
          <p>
            {t('about.approachText')}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
