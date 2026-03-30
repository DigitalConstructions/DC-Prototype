import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen relative z-10 max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">{t('privacy.title')}</h1>
        <div className="space-y-8 text-vercel-gray-400 font-light leading-relaxed">
          <p>{t('privacy.intro')}</p>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">{t('privacy.h1')}</h2>
            <p>
              {t('privacy.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">{t('privacy.h2')}</h2>
            <p>
              {t('privacy.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">{t('privacy.h3')}</h2>
            <p>
              {t('privacy.p3')}
            </p>
          </section>
          
          <p className="text-sm mt-12 pt-8 border-t border-white/10">
            {t('privacy.lastUpdated')}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
