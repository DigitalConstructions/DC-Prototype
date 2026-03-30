import { motion } from 'motion/react';
import { Workflow, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Automations() {
  const { t } = useTranslation();
  
  // We can get the features array from translations
  const features = t('automations.features', { returnObjects: true }) as string[];

  return (
    <section id="automations" className="py-32 px-6 relative border-t border-white/10 overflow-hidden z-10">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vercel-cyan/10 rounded-full blur-[150px] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <Workflow className="w-4 h-4 text-vercel-blue" />
            <span className="text-xs font-medium tracking-wide text-vercel-gray-300 uppercase">
              {t('automations.badge')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            {t('automations.title')}
          </h2>
          
          <p className="text-lg text-vercel-gray-400 mb-10 leading-relaxed">
            {t('automations.subtitle')}
          </p>
          
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3 text-vercel-gray-300"
              >
                <CheckCircle2 className="w-5 h-5 text-vercel-cyan shrink-0 mt-0.5" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-10"
          >
            <Link to="/automations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-vercel-cyan hover:text-white transition-colors font-medium"
              >
                {t('automations.explore')}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-vercel-blue/20 to-vercel-purple/20 rounded-3xl blur-3xl opacity-50" />
          <div className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-vercel-gray-800 flex items-center justify-center border border-white/10">
                  <span className="text-xl font-bold">ERP</span>
                </div>
                <div className="h-0.5 w-16 bg-gradient-to-r from-vercel-gray-600 to-vercel-cyan relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-vercel-cyan animate-ping" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-vercel-gray-800 flex items-center justify-center border border-white/10">
                  <span className="text-xl font-bold">CRM</span>
                </div>
              </div>
              <div className="text-sm text-vercel-cyan font-mono bg-vercel-cyan/10 px-3 py-1 rounded-full border border-vercel-cyan/20">
                {t('automations.ui.syncActive')}
              </div>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-vercel-gray-400">{t('automations.ui.orderProcessed')}</span>
                <span className="text-green-400">{t('automations.ui.success')}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-vercel-gray-400">{t('automations.ui.inventoryUpdated')}</span>
                <span className="text-green-400">{t('automations.ui.success')}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-vercel-gray-400">{t('automations.ui.invoiceGenerated')}</span>
                <span className="text-green-400">{t('automations.ui.success')}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5 opacity-50">
                <span className="text-vercel-gray-400">{t('automations.ui.awaiting')}</span>
                <span className="text-vercel-gray-600">{t('automations.ui.pending')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
