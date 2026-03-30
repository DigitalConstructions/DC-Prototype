import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vercel-purple/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-vercel-blue/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-vercel-cyan" />
          <span className="text-xs font-medium tracking-wide text-vercel-gray-300 uppercase">
            {t('hero.badge')}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          {t('hero.title1')}
          <br />
          {t('hero.title2')}
        </h1>

        <p className="text-lg md:text-xl text-vercel-gray-400 max-w-2xl font-light leading-relaxed">
          {t('hero.subtitle')}
        </p>
      </motion.div>
    </section>
  );
}
