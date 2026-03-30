import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen relative z-10 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{t('contact.title')}</h1>
        <p className="text-vercel-gray-400 mb-10 text-lg font-light">
          {t('contact.subtitle')}
        </p>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-vercel-gray-300">{t('contact.form.name')}</label>
              <input 
                type="text" 
                className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all" 
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-vercel-gray-300">{t('contact.form.company')}</label>
              <input 
                type="text" 
                className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all" 
                placeholder="Acme Corp" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-vercel-gray-300">{t('contact.form.email')}</label>
            <input 
              type="email" 
              className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all" 
              placeholder="john@company.com" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-vercel-gray-300">{t('contact.form.message')}</label>
            <textarea 
              rows={5} 
              className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all resize-none" 
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-vercel-gray-200 transition-colors mt-4"
          >
            {t('contact.form.submit')}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}
