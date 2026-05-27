import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const serviceInterest = searchParams.get('service') || '';
  const success = searchParams.get('success') === 'true';

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen relative z-10 max-w-2xl mx-auto">
      <Helmet>
        <title>{t('contact.title')} | Digital Constructions</title>
        <meta name="description" content={t('contact.subtitle')} />
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }} 
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} 
        exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }} 
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-4xl md:text-6xl mb-4">{t('contact.title')}</h1>
        <p className="text-vercel-gray-400 mb-10 text-lg">
          {t('contact.subtitle')}
        </p>
        {success && (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 mb-8 text-emerald-100">
            <strong>¡Gracias!</strong>
            <p>Hemos recibido tu mensaje. Te contactaremos pronto.</p>
          </div>
        )}

        <form 
          name="contact" 
          method="POST" 
          action="/gracias"
          data-netlify="true" 
          netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-vercel-gray-300">{t('contact.form.name')}</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-vercel-gray-300">{t('contact.form.company')}</label>
              <input
                type="text"
                name="company"
                className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                placeholder="Acme Corp"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-vercel-gray-300">{t('contact.form.email')}</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
              placeholder="john@company.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-vercel-gray-300">{t('contact.form.phone')}</label>
            <input
              type="tel"
              name="phone"
              required
              pattern="\+\d{1,3}[\s\d\-]{4,}$"
              title={t('contact.form.phoneHelp')}
              className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
              placeholder={t('contact.form.phonePlaceholder')}
            />
            <p className="text-xs text-vercel-gray-400">{t('contact.form.phoneHelp')}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-vercel-gray-300">{t('contact.form.message')}</label>
            <textarea
              name="message"
              required
              rows={5}
              defaultValue={serviceInterest ? t('contact.form.prefilledMessage', { service: serviceInterest }) : ''}
              className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-vercel-gray-200 transition-colors mt-4"
          >
            {t('contact.form.submit')}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}
