/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ServiceDetail from './pages/ServiceDetail';
import AutomationDetail from './pages/AutomationDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-vercel-pink selection:text-white relative flex flex-col">
        <MatrixBackground />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/automations" element={<AutomationDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
