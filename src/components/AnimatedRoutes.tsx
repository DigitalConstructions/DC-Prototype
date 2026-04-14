import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ThankYou from '../pages/ThankYou';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import ServiceDetail from '../pages/ServiceDetail';
import AutomationDetail from '../pages/AutomationDetail';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gracias" element={<ThankYou />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/automations" element={<AutomationDetail />} />
      </Routes>
    </AnimatePresence>
  );
}
