import { useTranslation } from 'react-i18next';
import { Bot, Code2, Database, Cloud, Workflow, Cpu, Layers, Zap, Server, Globe } from 'lucide-react';

const technologies = [
  { name: 'OpenAI', icon: Bot },
  { name: 'Anthropic', icon: Cpu },
  { name: 'Python', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'React', icon: Globe },
  { name: 'Node.js', icon: Server },
  { name: 'AWS', icon: Cloud },
  { name: 'Google Cloud', icon: Cloud },
  { name: 'n8n', icon: Workflow },
  { name: 'Zapier', icon: Zap },
  { name: 'Make', icon: Layers },
  { name: 'LangChain', icon: Database },
];

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 border-t border-white/10 bg-black/50 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{t('techStack.title')}</h2>
        <p className="text-vercel-gray-400">{t('techStack.subtitle')}</p>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="animate-marquee flex whitespace-nowrap items-center gap-12 py-4">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <tech.icon className="w-8 h-8 text-vercel-cyan" />
              <span className="text-xl font-semibold text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
