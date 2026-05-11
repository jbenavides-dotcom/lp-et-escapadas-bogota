import { MapPin, Instagram, Globe, Phone } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logo from './components/Logo';
import StatsBar from './sections/StatsBar';
import HookSection from './sections/HookSection';
import ExtraExperiencesSection from './sections/ExtraExperiencesSection';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useAnalytics } from './hooks/useAnalytics';
import { useI18n } from './i18n';

import {
  ASSETS,
  WHATSAPP_URL,
  CLOUDBEDS_URL,
  EMAIL,
  ROMANTICAS_URL,
  NAV_LINKS,
  HOTEL_LOCATION_DISPLAY,
  HOTEL_WEBSITE,
  HOTEL_INSTAGRAM,
  HOTEL_PHONE_DISPLAY,
} from './constants';

// ─── WhatsApp floating button ─────────────────────────────────────────────────
// Color brand-green (NO verde WhatsApp #25D366) — regla del ecosistema LP&ET.
// Ícono de chat limpio, NO el logo de WhatsApp.
function FloatingCTA() {
  const { trackWhatsAppClick } = useAnalytics();
  const { t } = useI18n();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('floating_button')}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Consulta sobre tu escapada"
    >
      {/* Tooltip */}
      <span className="hidden sm:block bg-white text-brand-dark text-sm font-medium px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {t('floating.tooltip')}
      </span>
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-green text-white shadow-lg hover:bg-brand-green/90 hover:shadow-xl hover:shadow-brand-green/40 hover:-translate-y-1 transition-all duration-300">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </span>
    </a>
  );
}

// ─── Sección 3: ¿Por qué elegirnos? ───────────────────────────────────────────
function WhySection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  return (
    <section
      id="por-que"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="porque-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('why.subtitle')}
          </p>
          <h2
            id="porque-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4"
          >
            {t('why.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('why.description')}
          </p>
        </div>

        {/* 4 cards con imagen + título + texto — fotos Diego/Lina 2026-05-11 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: 0, img: ASSETS.WHY_DESCONEXION, alt: 'Estación de catación en medio del bosque — desconexión real' },
            { i: 1, img: ASSETS.WHY_CAFE, alt: 'Mesa de café de especialidad con visitantes' },
            { i: 2, img: ASSETS.WHY_BOUTIQUE, alt: 'Interior de cabaña boutique con vista al bosque' },
            { i: 3, img: ASSETS.WHY_AUTENTICA, alt: 'Mesa con platos de gastronomía local' },
          ].map(({ i, img, alt }) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-brand-beige/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-xl text-brand-dark mb-2 group-hover:text-brand-green transition-colors duration-200">
                  {t(`why.${i}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`why.${i}.desc`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sección 4: Experiencia narrativa (Storytelling) ──────────────────────────
// 2 párrafos + cierre destacado + imagen storytelling grande
function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  return (
    <section
      id="experiencia"
      ref={ref}
      className={`py-20 sm:py-24 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="experiencia-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('exp.subtitle')}
          </p>
          <h2
            id="experiencia-titulo"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-4 max-w-3xl mx-auto leading-tight"
          >
            {t('exp.title')}
          </h2>
        </div>

        {/* Imagen storytelling grande — paisaje aéreo finca */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 max-w-5xl mx-auto">
          <img
            src={ASSETS.ASI_SE_VIVE}
            alt={t('exp.img.alt')}
            className="w-full h-[300px] sm:h-[440px] lg:h-[520px] object-cover"
            loading="lazy"
          />
        </div>

        {/* 2 párrafos */}
        <div className="max-w-3xl mx-auto space-y-5 mb-12">
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-center">
            {t('exp.p1')}
          </p>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-center">
            {t('exp.p2')}
          </p>
        </div>

        {/* Cierre destacado */}
        <div className="text-center max-w-3xl mx-auto pt-10 border-t border-brand-beige/50">
          <p className="font-serif italic text-2xl sm:text-3xl text-brand-dark leading-snug">
            {t('exp.closing')}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Sección 5: Qué incluye ──────────────────────────────────────────────────
// 4 cards grid: Coffee Tour + Cabaña con foto · Desayuno + Senderos solo icono
function IncludeSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();
  const { trackAvailabilityClick } = useAnalytics();

  // 4 cards con foto real (fotos Diego/Lina 2026-05-11 PM)
  const ITEMS = [
    { key: 0, img: ASSETS.INCLUYE_COFFEE, imgAlt: 'Coffee Tour: visitantes y proceso del café en la finca', pos: 'center' },
    { key: 1, img: ASSETS.INCLUYE_DESAYUNO, imgAlt: 'Desayuno incluido con vista al bosque andino', pos: 'bottom' },
    { key: 2, img: ASSETS.INCLUYE_CABANA, imgAlt: 'Cabaña privada con balcón al bosque', pos: 'center' },
    { key: 3, img: ASSETS.INCLUYE_SENDEROS, imgAlt: '3.3 km de senderos naturales rodeados de bosque', pos: 'center' },
  ];

  return (
    <section
      id="incluye"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="incluye-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('incluye.subtitle')}
          </p>
          <h2
            id="incluye-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4 max-w-3xl mx-auto leading-tight"
          >
            {t('incluye.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('incluye.description')}
          </p>
        </div>

        {/* Grid 4 cards con foto + texto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map(({ key: i, img, imgAlt, pos }) => (
            <article
              key={i}
              className="bg-white rounded-3xl shadow-sm border border-brand-beige/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: pos }}
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-xl text-brand-dark mb-2 group-hover:text-brand-green transition-colors duration-200">
                  {t(`incluye.${i}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`incluye.${i}.desc`)}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA inline (Lina pidió CTA cada 2 secciones) */}
        <div className="text-center mt-12">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('incluye')}
            className="inline-block bg-brand-pink text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1"
          >
            {t('hero.cta.reservar')}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Sección 7: Prueba social ─────────────────────────────────────────────────
// 5 stats con emoji + label (reemplaza las 3 stats anteriores)
function SocialProofSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  return (
    <section
      ref={ref}
      className={`py-20 bg-brand-dark scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="social-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">
            {t('social.subtitle')}
          </p>
          <h2
            id="social-titulo"
            className="font-serif text-3xl sm:text-4xl text-white mb-4 max-w-3xl mx-auto leading-tight"
          >
            {t('social.title')}
          </h2>
        </div>

        {/* 5 bloques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 mb-12">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-brand-gold/40 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl mb-3" aria-hidden="true">
                {t(`social.${i}.emoji`)}
              </div>
              <div className="text-white font-medium text-sm sm:text-base leading-snug">
                {t(`social.${i}.label`)}
              </div>
            </div>
          ))}
        </div>

        {/* Cierre */}
        <div className="text-center pt-8 border-t border-white/10 max-w-3xl mx-auto">
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            {t('social.closing')}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Sección 8: Ubicación ─────────────────────────────────────────────────────
function LocationSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  return (
    <section
      id="ubicacion"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="ubicacion-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('location.subtitle')}
          </p>
          <h2
            id="ubicacion-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4 max-w-3xl mx-auto leading-tight"
          >
            {t('location.title')}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('location.description')}
          </p>
        </div>

        {/* Mapa removido (feedback usuario) — solo queda el copy de la sección */}
      </div>
    </section>
  );
}

// ─── Sección 9: CTA Final ─────────────────────────────────────────────────────
function CtaFinal() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick, trackEmailClick, trackAvailabilityClick } = useAnalytics();
  const { t } = useI18n();

  return (
    <section
      id="reservar"
      ref={ref}
      className={`relative py-28 overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="cta-titulo"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.SUNSET}
          alt="Atardecer en La Palma & El Tucán"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge urgencia */}
        <div className="inline-flex items-center gap-2 bg-brand-pink/20 border border-brand-pink/50 text-brand-gold px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          {t('cta.badge')}
        </div>

        <h2
          id="cta-titulo"
          className="font-serif text-4xl sm:text-5xl text-white mb-5 leading-tight"
        >
          {t('cta.title')}
        </h2>

        <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-3 max-w-xl mx-auto">
          {t('cta.urgency')}
        </p>
        <p className="text-white/65 text-sm sm:text-base mb-10 max-w-xl mx-auto">
          {t('cta.subtitle')}
        </p>

        {/* CTAs — pink (principal Cloudbeds) + green WhatsApp (secundario) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_final')}
            className="w-full sm:w-auto order-2 sm:order-1 flex items-center justify-center gap-2 bg-brand-green text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-green/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {t('cta.whatsapp')}
          </a>
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('cta_final')}
            className="w-full sm:w-auto order-1 sm:order-2 bg-brand-pink text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            {t('cta.button')}
          </a>
        </div>
        <a
          href={`mailto:${EMAIL}`}
          onClick={() => trackEmailClick('cta_final')}
          className="text-white/60 hover:text-white text-sm underline underline-offset-4 transition-colors duration-200 inline-block mb-6"
        >
          {t('cta.email')}
        </a>

        <p className="text-white/50 text-sm">
          {t('cta.trust')}
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const { trackWhatsAppClick, trackEmailClick } = useAnalytics();
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  const NAV_KEY_MAP: Record<string, string> = {
    '#por-que': 'nav.porque',
    '#experiencia': 'nav.experiencia',
    '#incluye': 'nav.incluye',
    '#adicionales': 'nav.adicionales',
    '#ubicacion': 'nav.ubicacion',
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Link cruzado a romántica */}
        <div className="border-b border-white/10 pb-8 mb-10 text-center">
          <p className="text-white/50 text-sm">
            {t('footer.romantica.label')}{' '}
            <a
              href={ROMANTICAS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-white underline underline-offset-4 transition-colors duration-200"
            >
              {t('footer.romantica.cta')}
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo variant="light" size="lg" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.enlaces')}
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {t(NAV_KEY_MAP[link.href] ?? link.href)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — datos Lina */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.contacto')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/65">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-gold" aria-hidden="true" />
                <span>{HOTEL_LOCATION_DISPLAY}</span>
              </li>
              <li>
                <a
                  href={`https://${HOTEL_WEBSITE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/65 hover:text-brand-pink transition-colors duration-200"
                >
                  <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{HOTEL_WEBSITE}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lapalmayeltucanhotel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/65 hover:text-brand-pink transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{HOTEL_INSTAGRAM}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer')}
                  className="flex items-start gap-2 text-white/65 hover:text-brand-pink transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{HOTEL_PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => trackEmailClick('footer')}
                  className="text-white/50 hover:text-brand-pink text-sm transition-colors duration-200 break-all underline-offset-4 hover:underline"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} La Palma &amp; El Tucán Hotel. {t('footer.derechos')}
          </p>
          <p className="text-white/20 text-xs">
            Escapadas cerca de Bogotá · Hotel boutique · Bosque de niebla
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  useAnalytics(true);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <HookSection />
        <WhySection />
        <ExperienceSection />
        <IncludeSection />
        <ExtraExperiencesSection />
        <SocialProofSection />
        <LocationSection />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
