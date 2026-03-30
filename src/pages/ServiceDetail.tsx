import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <main className="pt-32 pb-20 px-6 min-h-screen relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-vercel-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen relative z-10 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/#services" 
          className="inline-flex items-center gap-2 text-sm text-vercel-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Services
        </Link>

        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-2xl">
            {service.iconLarge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{service.title}</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-vercel-gray-300 leading-relaxed font-light mb-12">
            {service.longDescription}
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6 tracking-tight">Key Capabilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 text-vercel-gray-300"
                >
                  <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${service.color}`} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center gap-4 border-t border-white/10 pt-12">
          <h3 className="text-lg font-medium mr-auto">Ready to transform your workflow?</h3>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-vercel-gray-200 transition-colors w-full sm:w-auto"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
