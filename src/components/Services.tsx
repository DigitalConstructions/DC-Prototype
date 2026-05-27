import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-32 px-6 relative border-t border-white/10 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            {t('services.title')}
          </h2>
           <p className="text-xl text-vercel-gray-400 max-w-3xl">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Link to={`/services/${service.id}`} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black border border-white/10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-white transition-colors">
                    {t(`services.items.${service.id}.title`)}
                  </h3>
                  <p className="text-vercel-gray-400 leading-relaxed flex-grow">
                    {t(`services.items.${service.id}.description`)}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
