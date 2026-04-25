import { Trees, Coffee, Home, Mountain, Check, MapPin, Star } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logo from './components/Logo';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useAnalytics } from './hooks/useAnalytics';
import { useI18n } from './i18n';

import {
  ASSETS,
  STATS,
  WHATSAPP_URL,
  CLOUDBEDS_URL,
  EMAIL,
  ROMANTICAS_URL,
  NAV_LINKS,
} from './constants';

// ─── WhatsApp floating button ─────────────────────────────────────────────────
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
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-pink text-white shadow-lg hover:bg-brand-pink/90 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 transition-all duration-300">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </span>
    </a>
  );
}

// ─── Stats Bar (réplica exacta de Aves) ───────────────────────────────────────
function StatsBar() {
  const { t } = useI18n();
  return (
    <section className="bg-brand-dark py-10" aria-label="Estadísticas clave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-0.5">
                {t(`stats.${i}.label`)}
              </div>
              <div className="text-white/50 text-xs sm:text-sm">{t(`stats.${i}.sublabel`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sección 3: ¿Por qué venir? ───────────────────────────────────────────────
function WhySection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  const ICONS = [Trees, Coffee, Home, Mountain];

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

        {/* 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ICONS.map((Icon, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-brand-beige/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand-green" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg text-brand-dark mb-2 group-hover:text-brand-green transition-colors duration-200">
                {t(`why.${i}.title`)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t(`why.${i}.desc`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sección 4: Experiencia narrativa ─────────────────────────────────────────
function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  const STEPS = [
    { img: ASSETS.STEP_1, alt: 'Llegada al hotel desde Bogotá' },
    { img: ASSETS.STEP_2, alt: 'Coffee Tour entre cafetales' },
    { img: ASSETS.STEP_3, alt: 'Cabaña al atardecer rodeada de naturaleza' },
  ];

  return (
    <section
      id="experiencia"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="experiencia-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('exp.subtitle')}
          </p>
          <h2
            id="experiencia-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4"
          >
            {t('exp.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('exp.intro')}
          </p>
        </div>

        {/* 3 pasos en grid con imagen + número */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="group relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Imagen */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg mb-6 relative">
                <img
                  src={step.img}
                  alt={step.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
                {/* Step number */}
                <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center font-serif text-xl font-bold shadow-lg">
                  {i + 1}
                </div>
                {/* Step label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em] mb-1">
                    {t(`exp.step.${i}.label`)}
                  </p>
                </div>
              </div>

              {/* Texto */}
              <h3 className="font-serif text-xl text-brand-dark mb-2">
                {t(`exp.step.${i}.title`)}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                {t(`exp.step.${i}.desc`)}
              </p>
            </div>
          ))}
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
function IncludeSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  return (
    <section
      id="incluye"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="incluye-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto + lista */}
          <div>
            <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
              {t('incluye.subtitle')}
            </p>
            <h2
              id="incluye-titulo"
              className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4"
            >
              {t('incluye.title')}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
              {t('incluye.description')}
            </p>

            <ul className="space-y-4">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/15 flex items-center justify-center mt-0.5">
                    <Check className="w-5 h-5 text-brand-green" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-brand-dark text-lg leading-relaxed pt-1.5">
                    {t(`incluye.${i}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagen */}
          <div className="rounded-3xl overflow-hidden shadow-2xl order-first lg:order-last">
            <img
              src={ASSETS.CABANA}
              alt="Cabaña privada al atardecer en La Palma & El Tucán"
              className="w-full h-[440px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sección 6: Prueba social ─────────────────────────────────────────────────
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
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">
            {t('social.subtitle')}
          </p>
          <h2
            id="social-titulo"
            className="font-serif text-3xl sm:text-4xl text-white mb-4"
          >
            {t('social.title')}
          </h2>
        </div>

        {/* 3 stats grandes */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-brand-gold/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-serif text-5xl sm:text-6xl text-brand-gold mb-3">
                {t(`social.${i}.value`)}
              </div>
              {/* Stars row only for stat 0 */}
              {i === 0 && (
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-brand-gold"
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              )}
              <div className="text-white font-semibold text-base sm:text-lg mb-1">
                {t(`social.${i}.label`)}
              </div>
              <div className="text-white/50 text-sm">{t(`social.${i}.sublabel`)}</div>
            </div>
          ))}
        </div>

        {/* Cierre */}
        <div className="text-center pt-6 border-t border-white/10">
          <p className="font-serif italic text-2xl sm:text-3xl text-brand-gold">
            {t('social.closing')}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Sección 7: Ubicación ─────────────────────────────────────────────────────
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
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('location.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-video md:aspect-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.3!2d-74.3878!3d4.7547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDUnMTcuMCJOIDc0wrAyMycxNi4xIlc!5e0!3m2!1ses!2sco!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación La Palma & El Tucán"
            />
          </div>

          {/* Directions */}
          <div className="bg-brand-dark rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl">{t('location.howto')}</h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 leading-tight">🚗</span>
                <span className="text-white/85 leading-relaxed">{t('location.item.0')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 leading-tight">🛣️</span>
                <span className="text-white/85 leading-relaxed">{t('location.item.1')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 leading-tight">🌤️</span>
                <span className="text-white/85 leading-relaxed">{t('location.item.2')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 leading-tight">🌿</span>
                <span className="text-white/85 leading-relaxed">{t('location.item.3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sección 8: CTA Final ─────────────────────────────────────────────────────
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
          className="font-serif text-4xl sm:text-5xl text-white mb-5"
        >
          {t('cta.title')}
        </h2>

        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-3 max-w-xl mx-auto">
          {t('cta.urgency')}
        </p>
        <p className="text-white/60 text-sm sm:text-base mb-10 max-w-xl mx-auto">
          {t('cta.subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('cta_final')}
            className="w-full sm:w-auto bg-brand-pink text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            {t('cta.button')}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_final')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/40 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-200 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            WhatsApp
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
    '#ubicacion': 'nav.ubicacion',
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Link cruzado a romántica — sobrio, integrado al footer */}
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

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.contacto')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer')}
                  className="flex items-center gap-2 text-white/50 hover:text-brand-pink text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => trackEmailClick('footer')}
                  className="text-white/50 hover:text-brand-pink text-sm transition-colors duration-200 break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="text-white/50 text-sm">
                  {t('footer.location')}
                </span>
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
        <WhySection />
        <ExperienceSection />
        <IncludeSection />
        <SocialProofSection />
        <LocationSection />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
