import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'es' | 'en';

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

// Traducciones completas ES/EN — Landing "Escapadas cerca de Bogotá"
// Copy AL PIE DE LA LETRA: feedback Lina 2026-05-11
const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    'nav.porque': 'Por qué venir',
    'nav.experiencia': 'Experiencia',
    'nav.incluye': 'Qué incluye',
    'nav.adicionales': 'Adicionales',
    'nav.ubicacion': 'Ubicación',
    'nav.reservar': 'Ver disponibilidad',

    // ─── 1. HERO ─────────────────────────────────────────────────────────────
    'hero.badge': 'A 90 minutos de Bogotá · Zipacón, Cundinamarca',
    'hero.title': 'Escápate de Bogotá y reconecta con la naturaleza 🌿',
    'hero.subtitle': 'Hospédate entre cafetales y bosque de niebla, vive una experiencia auténtica de café de especialidad y desconéctate a solo 90 minutos de la ciudad.',
    'hero.description': 'Cabañas privadas, senderos naturales, desayuno incluido y una de las experiencias de café más reconocidas de Colombia.',
    'hero.cta.reservar': 'Ver disponibilidad',
    'hero.cta.experiencia': 'Conocer la experiencia',
    // StatsBar (sección dark debajo del Hero — patrón Aves)
    'statsbar.0.label': 'Coffee Tour',
    'statsbar.0.sublabel': 'Degustación de cafés de especialidad',
    'statsbar.1.label': 'Senderos naturales',
    'statsbar.1.sublabel': 'Caminos rodeados de naturaleza',
    'statsbar.2.label': 'Desayuno',
    'statsbar.2.sublabel': 'Incluido en tu estadía',
    'statsbar.3.label': 'Cabañas privadas',
    'statsbar.3.sublabel': 'Rodeadas de naturaleza',
    'statsbar.4.label': 'Actividades',
    'statsbar.4.sublabel': 'Adicionales para tu experiencia',

    // ─── 2. HOOK / DIFERENCIAL ───────────────────────────────────────────────
    'hook.subtitle': 'POR QUÉ SOMOS DIFERENTES',
    'hook.title': 'Mucho más que un hotel cerca de Bogotá',
    'hook.p1': 'En La Palma & El Tucán Hotel no vienes solo a descansar. Vienes a vivir el café desde su origen, caminar entre bosque de niebla y descubrir un lugar donde la naturaleza, el bienestar y la autenticidad se encuentran.',
    'hook.p2': 'Nuestra finca cafetera ha sido reconocida internacionalmente por la calidad de sus cafés especiales y su modelo de agricultura regenerativa, creando una experiencia única para viajeros que buscan algo diferente cerca de Bogotá. 🌿☕',
    'hook.cta': 'Ver disponibilidad',
    'hook.img.alt': 'Naturaleza, bosque de niebla y cafetales en La Palma & El Tucán',

    // ─── 3. ¿POR QUÉ ELEGIRNOS? ──────────────────────────────────────────────
    'why.subtitle': '¿POR QUÉ ELEGIRNOS?',
    'why.title': 'Una escapada diferente cerca de Bogotá',
    'why.description': 'Cuatro razones por las que esta escapada se siente distinta desde el primer minuto.',
    'why.0.emoji': '🌿',
    'why.0.title': 'Desconexión real',
    'why.0.desc': 'Silencio, aire puro y naturaleza en medio del bosque andino.',
    'why.1.emoji': '☕',
    'why.1.title': 'Café de especialidad',
    'why.1.desc': 'Conoce el proceso de uno de los cafés más reconocidos de Colombia.',
    'why.2.emoji': '🏡',
    'why.2.title': 'Hotel boutique',
    'why.2.desc': 'Cabañas privadas diseñadas para descansar y bajar el ritmo.',
    'why.3.emoji': '🍃',
    'why.3.title': 'Experiencia auténtica',
    'why.3.desc': 'Naturaleza, gastronomía local y conexión con el territorio.',

    // ─── 4. EXPERIENCIA (Storytelling) ───────────────────────────────────────
    'exp.subtitle': 'ASÍ SE VIVE',
    'exp.title': 'Así se vive una escapada en La Palma & El Tucán Hotel',
    'exp.p1': 'Sales de Bogotá y, poco a poco, el paisaje cambia. Las montañas aparecen, el aire se vuelve más fresco y el ruido de la ciudad desaparece.',
    'exp.p2': 'Llegas a una finca cafetera rodeada de bosque de niebla, caminas entre cafetales, descubres cómo nace el café de especialidad y terminas el día descansando en una cabaña privada rodeada de naturaleza.',
    'exp.closing': 'Sin afán. Sin ruido. Solo experiencia. 🌿☕',
    'exp.img.alt': 'Cafetales, bosque de niebla y cabañas en La Palma & El Tucán',

    // ─── 5. QUÉ INCLUYE ──────────────────────────────────────────────────────
    'incluye.subtitle': 'TODO INCLUIDO',
    'incluye.title': 'Todo lo que necesitas para desconectarte',
    'incluye.description': 'Sin sorpresas. Todo lo esencial para que solo te ocupes de disfrutar.',
    'incluye.0.emoji': '☕',
    'incluye.0.title': 'Coffee Tour incluido',
    'incluye.0.desc': 'Recorrido guiado por nuestra finca cafetera y degustación de cafés de especialidad.',
    'incluye.1.emoji': '🍽️',
    'incluye.1.title': 'Desayuno incluido',
    'incluye.1.desc': 'Preparado con ingredientes frescos y productos locales.',
    'incluye.2.emoji': '🏡',
    'incluye.2.title': 'Cabaña privada',
    'incluye.2.desc': 'Espacios independientes en medio de cafetales y bosque nativo.',
    'incluye.3.emoji': '🌿',
    'incluye.3.title': 'Senderos naturales',
    'incluye.3.desc': 'Acceso libre a 3.3 km de caminos rodeados de naturaleza.',

    // ─── 6. EXPERIENCIAS ADICIONALES ─────────────────────────────────────────
    'extra.subtitle': 'COMPLEMENTA TU VIAJE',
    'extra.title': 'Complementa tu experiencia 🌿',
    'extra.description': 'Haz de tu escapada una experiencia aún más memorable con actividades adicionales diseñadas para conectar con la naturaleza, el bienestar y el territorio.',
    'extra.0.emoji': '🐦',
    'extra.0.title': 'Avistamiento de aves',
    'extra.1.emoji': '🍃',
    'extra.1.title': 'Caminatas de naturaleza',
    'extra.2.emoji': '💆',
    'extra.2.title': 'Masajes relajantes',
    'extra.3.emoji': '🧘',
    'extra.3.title': 'Clases de yoga',
    'extra.4.emoji': '🦋',
    'extra.4.title': 'Visita un Mariposario o un meliponario',
    'extra.5.emoji': '🍽️',
    'extra.5.title': 'Restaurante farm to table',
    'extra.cta': 'Consultar disponibilidad',

    // ─── 7. PRUEBA SOCIAL ────────────────────────────────────────────────────
    'social.subtitle': 'RECONOCIDOS POR EL MUNDO',
    'social.title': 'Un destino reconocido por viajeros de todo el mundo',
    'social.0.emoji': '⭐',
    'social.0.label': 'Calificación TripAdvisor: 5.0 / 5.0',
    'social.1.emoji': '⭐',
    'social.1.label': 'Más de 9.5 en Booking',
    'social.2.emoji': '🌍',
    'social.2.label': 'Visitantes nacionales e internacionales',
    'social.3.emoji': '☕',
    'social.3.label': 'Café reconocido mundialmente',
    'social.4.emoji': '📍',
    'social.4.label': 'El destino mejor valorado en Zipacón',
    'social.closing': 'La Palma & El Tucán Hotel combina hospitalidad, naturaleza y café de especialidad en una experiencia difícil de encontrar cerca de Bogotá.',

    // ─── 8. UBICACIÓN ────────────────────────────────────────────────────────
    'location.subtitle': 'CÓMO LLEGAR',
    'location.title': 'Cerca de Bogotá, lejos de la rutina',
    'location.description': 'Ubicado en Zipacón, Cundinamarca, a solo 90 minutos de Bogotá, nuestro hotel boutique se encuentra inmerso entre cafetales y bosque de niebla andino. El equilibrio perfecto entre accesibilidad y desconexión. 🌿',
    'location.howto': '¿Cómo llegar?',
    'location.item.0': '90 minutos en carro desde Bogotá',
    'location.item.1': 'Ruta: Bogotá → Facatativá → Zipacón',
    'location.item.2': 'Clima templado de montaña (18-24°C)',
    'location.item.3': '1.800 metros sobre el nivel del mar',

    // ─── 9. CTA FINAL ────────────────────────────────────────────────────────
    'cta.badge': 'Cupos limitados · Fines de semana se agotan rápido',
    'cta.title': 'Reserva tu próxima escapada 🌿',
    'cta.urgency': 'Contamos con pocas cabañas y la disponibilidad suele ser limitada, especialmente fines de semana y festivos.',
    'cta.subtitle': 'Escríbenos y planea tu experiencia en la naturaleza.',
    'cta.button': 'Ver disponibilidad',
    'cta.whatsapp': 'Reservar por WhatsApp',
    'cta.email': 'Escribir por correo',
    'cta.trust': 'Respuesta inmediata · Confirmación al instante',

    // ─── 10. FOOTER ──────────────────────────────────────────────────────────
    'footer.description': 'Hotel boutique en bosque de niebla y cafetales, a 90 minutos de Bogotá. Una escapada hecha para reconectar con lo esencial.',
    'footer.enlaces': 'Enlaces',
    'footer.contacto': 'Contacto',
    'footer.derechos': 'Todos los derechos reservados.',
    'footer.location': '📍 Zipacón, Cundinamarca',
    'footer.website': '🌐 www.lapalmayeltucan.com',
    'footer.instagram': '📸 @lapalmayeltucanhotel',
    'footer.phone': '📲 +57 318 956 5617',
    'footer.romantica.label': '¿Buscas una escapada romántica?',
    'footer.romantica.cta': 'Visita aquí',

    // FloatingCTA
    'floating.tooltip': 'Consulta sobre tu escapada 🌿',
  },
  en: {
    // Navbar
    'nav.porque': 'Why come',
    'nav.experiencia': 'Experience',
    'nav.incluye': "What's included",
    'nav.adicionales': 'Add-ons',
    'nav.ubicacion': 'Location',
    'nav.reservar': 'Check availability',

    // ─── 1. HERO ─────────────────────────────────────────────────────────────
    'hero.badge': '90 minutes from Bogotá · Zipacón, Cundinamarca',
    'hero.title': 'Escape Bogotá and reconnect with nature 🌿',
    'hero.subtitle': 'Stay among coffee plantations and cloud forest, live an authentic specialty-coffee experience and disconnect just 90 minutes from the city.',
    'hero.description': 'Private cabins, nature trails, breakfast included and one of the most renowned coffee experiences in Colombia.',
    'hero.cta.reservar': 'Check availability',
    'hero.cta.experiencia': 'See the experience',
    // StatsBar (dark section below the Hero — Aves pattern)
    'statsbar.0.label': 'Coffee Tour',
    'statsbar.0.sublabel': 'Specialty-coffee tasting',
    'statsbar.1.label': 'Nature trails',
    'statsbar.1.sublabel': 'Surrounded by forest',
    'statsbar.2.label': 'Breakfast',
    'statsbar.2.sublabel': 'Included with your stay',
    'statsbar.3.label': 'Private cabins',
    'statsbar.3.sublabel': 'Surrounded by nature',
    'statsbar.4.label': 'Activities',
    'statsbar.4.sublabel': 'Extra experiences for you',

    // ─── 2. HOOK / DIFFERENTIATOR ────────────────────────────────────────────
    'hook.subtitle': 'WHY WE ARE DIFFERENT',
    'hook.title': 'So much more than a hotel near Bogotá',
    'hook.p1': 'At La Palma & El Tucán Hotel you do not come only to rest. You come to experience coffee at its origin, walk through cloud forest and discover a place where nature, wellness and authenticity meet.',
    'hook.p2': 'Our coffee farm has been internationally recognized for the quality of its specialty coffees and its regenerative-agriculture model, creating a unique experience for travelers looking for something different near Bogotá. 🌿☕',
    'hook.cta': 'Check availability',
    'hook.img.alt': 'Nature, cloud forest and coffee plantations at La Palma & El Tucán',

    // ─── 3. WHY CHOOSE US ────────────────────────────────────────────────────
    'why.subtitle': 'WHY CHOOSE US',
    'why.title': 'A different kind of getaway near Bogotá',
    'why.description': 'Four reasons this escape feels different from the very first moment.',
    'why.0.emoji': '🌿',
    'why.0.title': 'Real disconnection',
    'why.0.desc': 'Silence, fresh air and nature in the heart of the Andean forest.',
    'why.1.emoji': '☕',
    'why.1.title': 'Specialty coffee',
    'why.1.desc': 'Discover the process behind one of Colombia’s most renowned coffees.',
    'why.2.emoji': '🏡',
    'why.2.title': 'Boutique hotel',
    'why.2.desc': 'Private cabins designed for rest and slowing the pace.',
    'why.3.emoji': '🍃',
    'why.3.title': 'Authentic experience',
    'why.3.desc': 'Nature, local cuisine and a true connection with the land.',

    // ─── 4. EXPERIENCE (Storytelling) ────────────────────────────────────────
    'exp.subtitle': 'HOW IT FEELS',
    'exp.title': 'How a getaway at La Palma & El Tucán Hotel feels',
    'exp.p1': 'You leave Bogotá and, little by little, the landscape changes. Mountains appear, the air turns fresher and the noise of the city fades away.',
    'exp.p2': 'You arrive at a coffee farm surrounded by cloud forest, walk through coffee plantations, discover how specialty coffee is born and end the day resting in a private cabin surrounded by nature.',
    'exp.closing': 'No rush. No noise. Just experience. 🌿☕',
    'exp.img.alt': 'Coffee plantations, cloud forest and cabins at La Palma & El Tucán',

    // ─── 5. WHAT'S INCLUDED ──────────────────────────────────────────────────
    'incluye.subtitle': 'EVERYTHING INCLUDED',
    'incluye.title': 'Everything you need to disconnect',
    'incluye.description': 'No surprises. Everything essential so all you need to do is enjoy.',
    'incluye.0.emoji': '☕',
    'incluye.0.title': 'Coffee Tour included',
    'incluye.0.desc': 'Guided tour of our coffee farm and tasting of specialty coffees.',
    'incluye.1.emoji': '🍽️',
    'incluye.1.title': 'Breakfast included',
    'incluye.1.desc': 'Prepared with fresh, locally sourced ingredients.',
    'incluye.2.emoji': '🏡',
    'incluye.2.title': 'Private cabin',
    'incluye.2.desc': 'Independent spaces in the heart of coffee plantations and native forest.',
    'incluye.3.emoji': '🌿',
    'incluye.3.title': 'Nature trails',
    'incluye.3.desc': 'Free access to 3.3 km of paths surrounded by nature.',

    // ─── 6. ADDITIONAL EXPERIENCES ───────────────────────────────────────────
    'extra.subtitle': 'COMPLEMENT YOUR TRIP',
    'extra.title': 'Complement your experience 🌿',
    'extra.description': 'Turn your getaway into something even more memorable with additional activities designed to connect you with nature, wellness and the land.',
    'extra.0.emoji': '🐦',
    'extra.0.title': 'Bird watching',
    'extra.1.emoji': '🍃',
    'extra.1.title': 'Nature walks',
    'extra.2.emoji': '💆',
    'extra.2.title': 'Relaxing massages',
    'extra.3.emoji': '🧘',
    'extra.3.title': 'Yoga classes',
    'extra.4.emoji': '🦋',
    'extra.4.title': 'Visit a butterfly garden or a meliponary',
    'extra.5.emoji': '🍽️',
    'extra.5.title': 'Farm-to-table restaurant',
    'extra.cta': 'Check availability',

    // ─── 7. SOCIAL PROOF ─────────────────────────────────────────────────────
    'social.subtitle': 'RECOGNIZED WORLDWIDE',
    'social.title': 'A destination recognized by travelers from around the world',
    'social.0.emoji': '⭐',
    'social.0.label': 'TripAdvisor rating: 5.0 / 5.0',
    'social.1.emoji': '⭐',
    'social.1.label': 'Over 9.5 on Booking',
    'social.2.emoji': '🌍',
    'social.2.label': 'National and international guests',
    'social.3.emoji': '☕',
    'social.3.label': 'Globally recognized coffee',
    'social.4.emoji': '📍',
    'social.4.label': 'The top-rated destination in Zipacón',
    'social.closing': 'La Palma & El Tucán Hotel combines hospitality, nature and specialty coffee in an experience that is hard to find near Bogotá.',

    // ─── 8. LOCATION ─────────────────────────────────────────────────────────
    'location.subtitle': 'HOW TO GET HERE',
    'location.title': 'Close to Bogotá, far from the routine',
    'location.description': 'Located in Zipacón, Cundinamarca, just 90 minutes from Bogotá, our boutique hotel is nestled between coffee plantations and Andean cloud forest. The perfect balance of accessibility and disconnection. 🌿',
    'location.howto': 'How to get here?',
    'location.item.0': '90 minutes by car from Bogotá',
    'location.item.1': 'Route: Bogotá → Facatativá → Zipacón',
    'location.item.2': 'Temperate mountain climate (18-24°C)',
    'location.item.3': '1,800 meters above sea level',

    // ─── 9. CTA FINAL ────────────────────────────────────────────────────────
    'cta.badge': 'Limited availability · Weekends sell out fast',
    'cta.title': 'Book your next escape 🌿',
    'cta.urgency': 'We have only a few cabins and availability tends to be limited, especially on weekends and holidays.',
    'cta.subtitle': 'Write us and plan your experience in nature.',
    'cta.button': 'Check availability',
    'cta.whatsapp': 'Book via WhatsApp',
    'cta.email': 'Send an email',
    'cta.trust': 'Immediate response · Instant confirmation',

    // ─── 10. FOOTER ──────────────────────────────────────────────────────────
    'footer.description': 'Boutique hotel in cloud forest and coffee plantations, 90 minutes from Bogotá. An escape made to reconnect with what truly matters.',
    'footer.enlaces': 'Links',
    'footer.contacto': 'Contact',
    'footer.derechos': 'All rights reserved.',
    'footer.location': '📍 Zipacón, Cundinamarca',
    'footer.website': '🌐 www.lapalmayeltucan.com',
    'footer.instagram': '📸 @lapalmayeltucanhotel',
    'footer.phone': '📲 +57 318 956 5617',
    'footer.romantica.label': 'Looking for a romantic getaway?',
    'footer.romantica.cta': 'Visit here',

    // FloatingCTA
    'floating.tooltip': 'Ask about your escape 🌿',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lpet-escapadas-lang') as Lang) || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('lpet-escapadas-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  const t = (key: string): string => {
    return translations[lang][key] || translations['es'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
