import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import LangToggle from './LangToggle';
import { NAV_LINKS, CLOUDBEDS_URL } from '../constants';
import { useI18n } from '../i18n';
import { useAnalytics } from '../hooks/useAnalytics';

const NAV_KEY_MAP: Record<string, string> = {
  '#por-que': 'nav.porque',
  '#experiencia': 'nav.experiencia',
  '#incluye': 'nav.incluye',
  '#ubicacion': 'nav.ubicacion',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();
  const { trackAvailabilityClick } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-shrink-0"
          aria-label="La Palma & El Tucán — Inicio"
        >
          <Logo variant="light" size="md" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {t(NAV_KEY_MAP[link.href] ?? link.href)}
            </a>
          ))}
          <LangToggle />
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('navbar')}
            className="bg-brand-pink text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
          >
            {t('nav.reservar')}
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: scrolled ? '61px' : '73px' }}
      >
        <div
          className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className="relative flex flex-col items-center justify-center gap-8 h-full"
          aria-label="Menú móvil"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-white text-2xl font-medium font-serif hover:text-brand-gold transition-colors duration-200"
            >
              {t(NAV_KEY_MAP[link.href] ?? link.href)}
            </a>
          ))}
          <LangToggle />
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setMenuOpen(false);
              trackAvailabilityClick('navbar_mobile');
            }}
            className="bg-brand-pink text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-brand-pink/90 transition-all duration-200 mt-4"
          >
            {t('nav.reservar')}
          </a>
        </nav>
      </div>
    </header>
  );
}
