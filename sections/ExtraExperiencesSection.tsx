import { Bird, Leaf, HandHeart, Flower2, Bug, UtensilsCrossed } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import { useI18n } from '../i18n';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useAnalytics } from '../hooks/useAnalytics';

// ─── Sección 6: Experiencias adicionales ──────────────────────────────────────
// 6 cards (grid 3x2 desktop / 1 col mobile / 2 col tablet) — feedback Lina
// Cada card: icono lucide + emoji + título. Banner escapadas-tour-extra arriba.
export default function ExtraExperiencesSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick } = useAnalytics();

  // 6 actividades — orden exacto del brief de Lina
  const ACTIVITIES = [
    { icon: Bird, emojiKey: 'extra.0.emoji', titleKey: 'extra.0.title' },
    { icon: Leaf, emojiKey: 'extra.1.emoji', titleKey: 'extra.1.title' },
    { icon: HandHeart, emojiKey: 'extra.2.emoji', titleKey: 'extra.2.title' },
    { icon: Flower2, emojiKey: 'extra.3.emoji', titleKey: 'extra.3.title' },
    { icon: Bug, emojiKey: 'extra.4.emoji', titleKey: 'extra.4.title' },
    { icon: UtensilsCrossed, emojiKey: 'extra.5.emoji', titleKey: 'extra.5.title' },
  ];

  return (
    <section
      id="adicionales"
      ref={ref}
      className={`py-20 sm:py-24 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="extra-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — sin imagen (feedback usuario) */}
        <div className="text-center mb-12">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('extra.subtitle')}
          </p>
          <h2
            id="extra-titulo"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-5 max-w-3xl mx-auto leading-tight"
          >
            {t('extra.title')}
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            {t('extra.description')}
          </p>
        </div>

        {/* Cards grid 6 actividades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ACTIVITIES.map(({ icon: Icon, emojiKey, titleKey }, i) => (
            <article
              key={titleKey}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-brand-beige/40 hover:shadow-lg hover:-translate-y-1 hover:border-brand-green/30 transition-all duration-200 group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/15 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-brand-green" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-2xl leading-none mb-1.5" aria-hidden="true">
                    {t(emojiKey)}
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl text-brand-dark leading-snug group-hover:text-brand-green transition-colors duration-200">
                    {t(titleKey)}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA inline secundario — WhatsApp para consultas */}
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('extra_experiences')}
            className="inline-flex items-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-brand-green/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {t('extra.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
