import { motion } from 'motion/react';
import { ArrowLeft, Workflow, Zap, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function AutomationDetail() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen relative z-10">
      <Helmet>
        <title>{t('automationDetail.badge')} | Digital Constructions</title>
        <meta name="description" content={t('automationDetail.title')} />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-vercel-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('automationDetail.back')}
        </Link>

        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }} 
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} 
          exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <Workflow className="w-4 h-4 text-vercel-cyan" />
            <span className="text-xs font-medium tracking-wide text-vercel-gray-300 uppercase">
              {t('automationDetail.badge')}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {t('automationDetail.title')}
          </h1>

          <p className="text-xl text-vercel-gray-400 mb-12 leading-relaxed">    
            {t('automationDetail.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Zap className="w-8 h-8 text-vercel-cyan mb-6" />
            <h3 className="text-xl font-bold mb-4">{t('automationDetail.features.syncTitle')}</h3>
            <p className="text-vercel-gray-400 leading-relaxed">
              {t('automationDetail.features.syncText')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Database className="w-8 h-8 text-vercel-blue mb-6" />
            <h3 className="text-xl font-bold mb-4">{t('automationDetail.features.legacyTitle')}</h3>
            <p className="text-vercel-gray-400 leading-relaxed">
              {t('automationDetail.features.legacyText')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <ShieldCheck className="w-8 h-8 text-vercel-cyan mb-6" />
            <h3 className="text-xl font-bold mb-4">{t('automationDetail.features.securityTitle')}</h3>    
            <p className="text-vercel-gray-400 leading-relaxed">
              {t('automationDetail.features.securityText')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Workflow className="w-8 h-8 text-vercel-purple mb-6" />
            <h3 className="text-xl font-bold mb-4">{t('automationDetail.features.customTitle')}</h3>        
            <p className="text-vercel-gray-400 leading-relaxed">
              {t('automationDetail.features.customText')}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent text-center"
        >
          <h2 className="text-3xl font-bold mb-6">{t('automationDetail.ctaTitle')}</h2>
          <p className="text-vercel-gray-400 mb-8 max-w-2xl mx-auto">
            {t('automationDetail.ctaText')}
          </p>
          <Link to="/contact?service=b2b-automations">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-vercel-gray-200 transition-colors inline-flex items-center gap-2"      
            >
              {t('automationDetail.ctaButton')}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
