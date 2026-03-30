import { motion } from 'motion/react';
import { ArrowLeft, Workflow, Zap, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AutomationDetail() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-screen relative z-10">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/#automations" 
          className="inline-flex items-center gap-2 text-sm text-vercel-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <Workflow className="w-4 h-4 text-vercel-cyan" />
            <span className="text-xs font-medium tracking-wide text-vercel-gray-300 uppercase">
              B2B Automations
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Streamline your operations with intelligent workflows.
          </h1>

          <p className="text-xl text-vercel-gray-400 mb-12 leading-relaxed">
            Our B2B automation solutions are designed to eliminate manual data entry, reduce errors, and connect your disparate systems into a unified, efficient ecosystem. We build custom integrations that work exactly the way your business needs them to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Zap className="w-8 h-8 text-vercel-pink mb-6" />
            <h3 className="text-xl font-bold mb-4">Real-time Synchronization</h3>
            <p className="text-vercel-gray-400 leading-relaxed">
              Keep your data consistent across all platforms. When an order is placed in your e-commerce system, it instantly reflects in your ERP and CRM, triggering the necessary fulfillment workflows without human intervention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Database className="w-8 h-8 text-vercel-blue mb-6" />
            <h3 className="text-xl font-bold mb-4">Legacy System Integration</h3>
            <p className="text-vercel-gray-400 leading-relaxed">
              Don't let outdated software hold you back. We specialize in building secure bridges between modern cloud applications and legacy on-premise systems, unlocking trapped data and extending the life of your investments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <ShieldCheck className="w-8 h-8 text-vercel-cyan mb-6" />
            <h3 className="text-xl font-bold mb-4">Secure Data Handling</h3>
            <p className="text-vercel-gray-400 leading-relaxed">
              Security is paramount in B2B integrations. We implement robust encryption, secure authentication protocols (like OAuth 2.0 and SAML), and comprehensive audit logging to ensure your sensitive business data is always protected.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Workflow className="w-8 h-8 text-vercel-purple mb-6" />
            <h3 className="text-xl font-bold mb-4">Custom Workflows</h3>
            <p className="text-vercel-gray-400 leading-relaxed">
              Every business is unique. We don't just offer out-of-the-box solutions; we map out your specific business processes and build tailored automation workflows that align perfectly with your operational goals.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to automate your business?</h2>
          <p className="text-vercel-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our B2B automation solutions can save you time, reduce errors, and accelerate your growth.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-vercel-gray-200 transition-colors inline-flex items-center gap-2"
            >
              Get a Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
