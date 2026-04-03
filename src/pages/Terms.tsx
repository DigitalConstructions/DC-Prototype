import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen relative z-10 max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }} 
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} 
        exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }} 
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-vercel-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('serviceDetail.back')}
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">{t('terms.title')}</h1>
        <div className="space-y-8 text-vercel-gray-400 font-light leading-relaxed">
          <p>{t('terms.intro')}</p>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">{t('terms.h1')}</h2>
            <p>
              {t('terms.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">{t('terms.h2')}</h2>
            <p>
              {t('terms.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">{t('terms.h3')}</h2>
            <p>
              {t('terms.p3')}
            </p>
          </section>

          <p className="text-sm mt-12 pt-8 border-t border-white/10">
            {t('terms.lastUpdated')}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
