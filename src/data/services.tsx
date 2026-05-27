import { Brain, Zap, Layers, Code2, Database, Shield } from 'lucide-react';

export const servicesData = [
  {
    id: 'ai-implementation',
    icon: <Brain className="w-6 h-6 text-vercel-purple" />,
    iconLarge: <Brain className="w-12 h-12 text-vercel-purple" />,
    color: 'text-vercel-purple',
    title: 'AI Implementation',
    description: 'Integrate cutting-edge artificial intelligence into your existing workflows to optimize decision-making and automate complex tasks.',
    longDescription: 'Our AI Implementation services help you harness the power of machine learning, natural language processing, and predictive analytics. We build custom AI models tailored to your business needs, enabling you to automate repetitive tasks, gain deep insights from your data, and deliver personalized experiences to your customers. From intelligent chatbots to complex forecasting algorithms, we bring the future of technology to your current operations.',
    features: [
      'Custom Large Language Model (LLM) integration',
      'Predictive analytics and forecasting',
      'Computer vision and image processing',
      'Natural Language Processing (NLP) pipelines',
      'AI-driven customer support automation'
    ]
  },
  {
    id: 'b2c-automations',
    icon: <Zap className="w-6 h-6 text-vercel-cyan" />,
    iconLarge: <Zap className="w-12 h-12 text-vercel-cyan" />,
    color: 'text-vercel-cyan',
    title: 'B2C Automations',
    description: 'Create magical experiences for your customers by automating marketing, sales, and support interactions.',
    longDescription: 'Deliver personalized experiences at scale. We design and implement customer-facing workflows that engage your audience automatically. From intelligent email marketing sequences based on user behavior to seamless chatbots for instant support and dynamic loyalty programs, we ensure every interaction feels personal, immediate, and perfectly timed.',
    features: [
      'Personalized customer journey mapping',
      'Automated email and SMS campaigns',
      'Intelligent 24/7 customer support bots',
      'Cart abandonment recovery flows',
      'Dynamic loyalty and rewards programs'
    ]
  },
  {
    id: 'custom-software',
    icon: <Code2 className="w-6 h-6 text-vercel-blue" />,
    iconLarge: <Code2 className="w-12 h-12 text-vercel-blue" />,
    color: 'text-vercel-blue',
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to fit your unique business requirements and scale with your growth.',
    longDescription: 'Off-the-shelf software rarely fits perfectly. We engineer bespoke web applications, SaaS platforms, and internal tools from the ground up. Using modern, cloud-native architectures and cutting-edge frameworks, we deliver highly performant, scalable, and maintainable software that aligns exactly with your strategic objectives.',
    features: [
      'Full-stack web application development',
      'Cloud-native SaaS architecture',
      'Progressive Web Apps (PWAs)',
      'Microservices and serverless computing',
      'UI/UX design and prototyping'
    ]
  },
  {
    id: 'data-engineering',
    icon: <Database className="w-6 h-6 text-white" />,
    iconLarge: <Database className="w-12 h-12 text-white" />,
    color: 'text-white',
    title: 'Data Engineering',
    description: 'Build robust data infrastructure to support your AI models and business intelligence initiatives.',
    longDescription: 'Data is the foundation of modern business intelligence and AI. We design and implement scalable data architectures, including data lakes, warehouses, and real-time streaming pipelines. Our data engineering team ensures your data is clean, accessible, and structured perfectly for analytics, reporting, and machine learning models.',
    features: [
      'ETL/ELT pipeline development',
      'Data warehouse design (Snowflake, BigQuery)',
      'Real-time data streaming (Kafka, Kinesis)',
      'Data quality and governance frameworks',
      'Database optimization and migration'
    ]
  },
  {
    id: 'system-integration',
    icon: <Layers className="w-6 h-6 text-white" />,
    iconLarge: <Layers className="w-12 h-12 text-white" />,
    color: 'text-white',
    title: 'System Integration',
    description: 'Connect disparate systems and APIs to create a unified, efficient technological ecosystem.',
    longDescription: 'Silos destroy efficiency. We specialize in connecting fragmented software ecosystems into a cohesive, unified platform. Whether you need to integrate a newly acquired SaaS tool with your legacy on-premise database, or build a unified dashboard that pulls from dozens of APIs, we create the connective tissue your business needs to operate smoothly.',
    features: [
      'Third-party API integration',
      'Legacy system modernization',
      'Unified dashboard development',
      'Identity and access management (SSO)',
      'Event-driven architecture design'
    ]
  },
  {
    id: 'security-compliance',
    icon: <Shield className="w-6 h-6 text-vercel-gray-400" />,
    iconLarge: <Shield className="w-12 h-12 text-vercel-gray-400" />,
    color: 'text-vercel-gray-400',
    title: 'Security & Compliance',
    description: 'Ensure your automated workflows and AI models meet the highest standards of security and industry compliance.',
    longDescription: 'In an era of increasing cyber threats and strict regulatory requirements, security cannot be an afterthought. We embed security into every layer of our software and automation pipelines. From end-to-end encryption to comprehensive audit logging, we ensure your digital infrastructure complies with industry standards like SOC2, GDPR, and HIPAA.',
    features: [
      'End-to-end data encryption',
      'Compliance auditing (SOC2, GDPR, HIPAA)',
      'Vulnerability assessments and penetration testing',
      'Secure API gateway implementation',
      'Automated security monitoring and alerting'
    ]
  }
];
