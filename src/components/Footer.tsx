import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-white/10 py-12 px-6 z-10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="ABVC Digital Constructions Logo" className="h-8 w-auto opacity-90" />
        </Link>

        <div className="flex gap-6 text-sm text-vercel-gray-400">
          <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
          <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          <Link to="/contact" className="hover:text-white transition-colors">{t('footer.contact')}</Link>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-1 text-sm text-vercel-gray-500">
          <span>{t('footer.rights', { year: new Date().getFullYear() })}</span>
          <span className="flex items-center gap-1.5 opacity-80">
            <MapPin className="w-3.5 h-3.5" />
            Guayaquil, Ecuador
          </span>
        </div>
      </div>
    </footer>
  );
}
