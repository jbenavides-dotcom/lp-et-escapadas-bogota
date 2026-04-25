import { useI18n } from '../i18n';

export default function LangToggle() {
  const { lang, toggleLang } = useI18n();
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-brand-gold/50 transition-all text-sm font-medium tracking-wide"
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className={lang === 'es' ? 'text-brand-gold' : 'text-white/50'}>ES</span>
      <span className="text-white/30">|</span>
      <span className={lang === 'en' ? 'text-brand-gold' : 'text-white/50'}>EN</span>
    </button>
  );
}
