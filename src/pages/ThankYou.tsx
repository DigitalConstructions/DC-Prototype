import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ThankYou() {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen relative z-10 max-w-2xl mx-auto">
      <Helmet>
        <title>{t('thankYou.title')} | Digital Constructions</title>
        <meta name="description" content={t('thankYou.subtitle')} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 shadow-2xl shadow-black/10"
      >
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80 mb-4">{t('thankYou.badge')}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">{t('thankYou.title')}</h1>
          <p className="text-vercel-gray-400 text-lg leading-8 mb-8">{t('thankYou.subtitle')}</p>
          <div className="inline-flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white text-black px-6 py-3 text-sm font-semibold transition hover:bg-white/90"
            >
              {t('thankYou.returnButton')}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white px-6 py-3 text-sm font-semibold transition hover:bg-white/5"
            >
              {t('thankYou.homeButton')}
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
