import Hero from '../components/Hero';
import Services from '../components/Services';
import Automations from '../components/Automations';
import CostComparison from '../components/CostComparison';
import TechStack from '../components/TechStack';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function Home() {
  const { t } = useTranslation();
  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }} 
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} 
      exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }} 
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Helmet>
        <title>Digital Constructions | {t('hero.badge')}</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>
      <Hero />
      <Services />
      <Automations />
      <CostComparison />
      <TechStack />
    </motion.main>
  );
}
