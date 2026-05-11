import { STATS_ESCAPADAS } from '../constants';
import { useI18n } from '../i18n';

export default function StatsBar() {
  const { t } = useI18n();

  return (
    <section
      id="stats"
      className="bg-brand-dark py-12 sm:py-16"
      aria-label="Lo que incluye tu escapada"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS_ESCAPADAS.map((stat, i) => (
            <div
              key={i}
              className={`text-center group ${
                i > 0 ? 'lg:border-l lg:border-brand-gold/20 lg:pl-6' : ''
              }`}
            >
              <div className="font-serif text-3xl sm:text-4xl text-brand-gold mb-2 transition-transform duration-200 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-1">
                {t(`statsbar.${i}.label`)}
              </div>
              <div className="text-white/50 text-xs sm:text-sm leading-snug">
                {t(`statsbar.${i}.sublabel`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
