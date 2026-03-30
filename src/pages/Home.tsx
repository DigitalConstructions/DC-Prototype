import Hero from '../components/Hero';
import Services from '../components/Services';
import Automations from '../components/Automations';
import CostComparison from '../components/CostComparison';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Automations />
      <CostComparison />
      <TechStack />
    </main>
  );
}
