import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, UserCheck, DollarSign, Calendar, Shield, Briefcase, ListTodo, Calculator, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CostComparison() {
  const { t } = useTranslation();
  
  // State for inputs
  const [currentTeam, setCurrentTeam] = useState<number>(3);
  const [aiEmployees, setAiEmployees] = useState<number>(1);
  const [monthlySalary, setMonthlySalary] = useState<number>(600);
  const [annualPayments, setAnnualPayments] = useState<number>(12);
  const [socialSecurity, setSocialSecurity] = useState<number>(12);
  const [indirectCosts, setIndirectCosts] = useState<number>(15);
  const [dailyTasks, setDailyTasks] = useState<number>(15);

  // Calculations
  const costPerEmployee = monthlySalary * annualPayments * (1 + (socialSecurity / 100) + (indirectCosts / 100));
  const currentCost = currentTeam * costPerEmployee;
  
  // AI Cost estimation (simplified for the demo to match the screenshot's logic roughly)
  const aiPlatformCost = 7210; // Fixed base cost for the AI platform
  const hybridCost = (aiEmployees * costPerEmployee) + aiPlatformCost;
  
  const savings = currentCost - hybridCost;

  const formatCurrencyK = (value: number) => {
    return `$${Math.round(value / 1000)} k`;
  };

  const formatCurrencyFull = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value).replace(',', '.');
  };

  const maxChartValue = Math.max(currentCost, hybridCost) * 1.2; // Add 20% headroom

  return (
    <section id="roi-calculator" className="py-32 px-6 relative border-t border-white/10 z-10 bg-[#0B0D14]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('roi.title1')}<span className="text-orange-500">{t('roi.titleHighlight')}</span>{t('roi.title2')}
          </h2>
          <p className="text-lg text-vercel-gray-400 max-w-2xl">
            {t('roi.subtitle')}
          </p>
        </motion.div>

        <div className="bg-[#161B22] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Chart */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-vercel-gray-500 text-sm tracking-widest uppercase mb-12">
                {t('roi.annualComparison')}
              </p>
              
              <div className="flex items-end justify-center gap-8 md:gap-16 h-64 w-full max-w-md border-b border-white/10 pb-4 relative">
                {/* Current Cost Bar */}
                <div className="flex flex-col items-center justify-end h-full w-24 md:w-32 gap-2">
                  <span className="text-white font-bold">{formatCurrencyK(currentCost)}</span>
                  <div className="w-full flex-1 flex items-end">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(currentCost / maxChartValue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="w-full bg-[#4B5563] rounded-t-xl"
                    />
                  </div>
                  <span className="text-xs text-vercel-gray-400 text-center leading-tight h-8 flex flex-col justify-center">
                    {t('roi.currentCost').split(' ').map((word, i) => <span key={i}>{word}</span>)}
                  </span>
                </div>

                {/* Hybrid Cost Bar */}
                <div className="flex flex-col items-center justify-end h-full w-24 md:w-32 gap-2">
                  <span className="text-orange-500 font-bold">{formatCurrencyK(hybridCost)}</span>
                  <div className="w-full flex-1 flex items-end">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(hybridCost / maxChartValue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="w-full flex flex-col justify-end rounded-t-xl overflow-hidden"
                    >
                      {/* AI Portion (Orange) */}
                      <div 
                        style={{ height: `${(aiPlatformCost / hybridCost) * 100}%` }} 
                        className="w-full bg-orange-500"
                      />
                      {/* Human Portion (Gray) */}
                      <div 
                        style={{ height: `${((aiEmployees * costPerEmployee) / hybridCost) * 100}%` }} 
                        className="w-full bg-[#4B5563]"
                      />
                    </motion.div>
                  </div>
                  <span className="text-xs text-vercel-gray-400 text-center leading-tight h-8 flex flex-col justify-center">
                    {t('roi.hybridCost').split(' ').map((word, i) => <span key={i}>{word}</span>)}
                  </span>
                </div>
              </div>

              {/* Savings Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-10 bg-[#064E3B]/40 border border-[#059669]/30 text-[#10B981] px-6 py-3 rounded-full flex items-center gap-3 font-semibold text-lg"
              >
                <TrendingUp className="w-5 h-5" />
                {t('roi.savings')}: {formatCurrencyFull(savings)}{t('roi.perYear')}
              </motion.div>
            </div>

            {/* Right Column: Inputs */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <InputField 
                  icon={Users} 
                  label={t('roi.fields.currentTeam')} 
                  unit={t('roi.fields.people')} 
                  value={currentTeam} 
                  onChange={setCurrentTeam} 
                />
                <InputField 
                  icon={UserCheck} 
                  label={t('roi.fields.aiEmployees')} 
                  unit={t('roi.fields.people')} 
                  value={aiEmployees} 
                  onChange={setAiEmployees} 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InputField 
                  icon={DollarSign} 
                  label={t('roi.fields.monthlySalary')} 
                  unit={t('roi.fields.usd')} 
                  value={monthlySalary} 
                  onChange={setMonthlySalary} 
                />
                <InputField 
                  icon={Calendar} 
                  label={t('roi.fields.annualPayments')} 
                  unit="" 
                  value={annualPayments} 
                  onChange={setAnnualPayments} 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InputField 
                  icon={Shield} 
                  label={t('roi.fields.socialSecurity')} 
                  unit={t('roi.fields.percent')} 
                  value={socialSecurity} 
                  onChange={setSocialSecurity} 
                />
                <InputField 
                  icon={Briefcase} 
                  label={t('roi.fields.indirectCosts')} 
                  unit={t('roi.fields.percent')} 
                  value={indirectCosts} 
                  onChange={setIndirectCosts} 
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <InputField 
                  icon={ListTodo} 
                  label={t('roi.fields.dailyTasks')} 
                  unit={t('roi.fields.tasks')} 
                  value={dailyTasks} 
                  onChange={setDailyTasks} 
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
              >
                <Calculator className="w-5 h-5" />
                {t('roi.viewCalculator')}
              </motion.button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ icon: Icon, label, unit, value, onChange }: any) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-vercel-gray-300">
          <Icon className="w-4 h-4 text-orange-500" />
          <span>{label}</span>
        </div>
        {unit && <span className="text-vercel-gray-500 text-xs">{unit}</span>}
      </div>
      <input 
        type="number" 
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="bg-[#0D1117] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all font-mono"
      />
    </div>
  );
}
