import { ASSETS, CLOUDBEDS_URL } from '../constants';
import { useI18n } from '../i18n';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useAnalytics } from '../hooks/useAnalytics';

// ─── Sección 2: Hook / Diferencial ────────────────────────────────────────────
// Copy AL PIE DE LA LETRA — feedback Lina 2026-05-11
// Patrón split layout (imagen + texto), inspirado en LP-ET-AVES.
export default function HookSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollReveal();
  const { trackAvailabilityClick } = useAnalytics();

  return (
    <section
      id="hook"
      ref={ref}
      className={`py-20 sm:py-24 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="hook-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={ASSETS.HOOK}
              alt={t('hook.img.alt')}
              className="w-full h-[440px] sm:h-[520px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
              {t('hook.subtitle')}
            </p>
            <h2
              id="hook-titulo"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-6 leading-tight"
            >
              {t('hook.title')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
              {t('hook.p1')}
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              {t('hook.p2')}
            </p>

            {/* CTA inline (Lina pidió CTA cada 2 secciones) */}
            <a
              href={CLOUDBEDS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAvailabilityClick('hook')}
              className="inline-block bg-brand-pink text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1"
            >
              {t('hook.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
