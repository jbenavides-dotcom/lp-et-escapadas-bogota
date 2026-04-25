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
const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    'nav.porque': 'Por qué venir',
    'nav.experiencia': 'Experiencia',
    'nav.incluye': 'Qué incluye',
    'nav.ubicacion': 'Ubicación',
    'nav.reservar': 'Reservar Ahora',

    // Hero
    'hero.badge': 'A 90 minutos de Bogotá · Zipacón, Cundinamarca',
    'hero.title.pre': 'Escápate de la ciudad y',
    'hero.title.highlight': 'reconecta con la naturaleza',
    'hero.subtitle': 'Vive una experiencia única en medio del bosque de niebla y cafetales, a solo 90 minutos de Bogotá',
    'hero.description': 'Cabañas privadas, café de especialidad y el silencio que no encuentras en la ciudad',
    'hero.cta.reservar': 'Ver disponibilidad',
    'hero.cta.experiencia': 'Conocer la experiencia',
    'hero.chip.coffee': 'Coffee Tour incluido',
    'hero.chip.naturaleza': 'Naturaleza real',
    'hero.chip.desayuno': 'Desayuno incluido',

    // Stats Bar (sección 2)
    'stats.0.label': 'Desde Bogotá',
    'stats.0.sublabel': 'Acceso fácil en carro',
    'stats.1.label': 'Coffee Tour',
    'stats.1.sublabel': 'Incluido en tu estadía',
    'stats.2.label': 'TripAdvisor',
    'stats.2.sublabel': '#1 en Zipacón',
    'stats.3.label': 'Cabañas privadas',
    'stats.3.sublabel': 'En medio de cafetales',

    // ¿Por qué venir? (sección 3)
    'why.subtitle': '¿POR QUÉ VENIR?',
    'why.title': 'Una escapada como ninguna otra cerca de Bogotá',
    'why.description': 'Cuatro razones por las que esta escapada se siente distinta desde el primer minuto.',
    'why.0.title': 'Desconexión real',
    'why.0.desc': 'Lejos del ruido, en medio del bosque de niebla',
    'why.1.title': 'Café de especialidad',
    'why.1.desc': 'Vive el café desde la semilla hasta la taza',
    'why.2.title': 'Cabañas privadas',
    'why.2.desc': 'Espacios independientes rodeados de naturaleza',
    'why.3.title': 'Entorno único',
    'why.3.desc': 'Montañas, cafetales y aire puro',

    // Experiencia narrativa (sección 4)
    'exp.subtitle': 'TU ESCAPADA, PASO A PASO',
    'exp.title': 'Así se vive una escapada en La Palma & El Tucán Hotel',
    'exp.intro': 'Tres momentos que marcan la diferencia entre un viaje cualquiera y una verdadera escapada.',
    'exp.step.0.label': 'Llegada',
    'exp.step.0.title': 'El paisaje empieza a cambiar',
    'exp.step.0.desc': 'Llegas desde Bogotá → el paisaje cambia → el aire se vuelve más fresco',
    'exp.step.1.label': 'Coffee Tour',
    'exp.step.1.title': 'Caminas entre cafetales',
    'exp.step.1.desc': 'Caminas entre cafetales, conoces el proceso del café desde la semilla hasta la taza',
    'exp.step.2.label': 'Descanso',
    'exp.step.2.title': 'Tu cabaña te espera',
    'exp.step.2.desc': 'Terminas el día en tu cabaña rodeado de naturaleza, en silencio total',
    'exp.closing': 'Sin ruido. Sin prisa. Solo experiencia.',

    // Qué incluye (sección 5)
    'incluye.subtitle': 'TODO INCLUIDO',
    'incluye.title': 'Qué incluye tu escapada',
    'incluye.description': 'Sin sorpresas. Todo lo esencial para que solo te ocupes de disfrutar.',
    'incluye.0': 'Desayuno incluido',
    'incluye.1': 'Coffee Tour en finca cafetera',
    'incluye.2': 'Alojamiento en cabaña privada',
    'incluye.3': 'Acceso a senderos y naturaleza',

    // Prueba social (sección 6)
    'social.subtitle': 'ESTO NO ES UN HOTEL MÁS',
    'social.title': 'Lo dicen nuestros huéspedes y los rankings',
    'social.0.value': '9.5+',
    'social.0.label': 'Calificación en Booking',
    'social.0.sublabel': 'Promedio de huéspedes verificados',
    'social.1.value': '#1',
    'social.1.label': 'En Zipacón según TripAdvisor',
    'social.1.sublabel': 'Hotel boutique mejor valorado',
    'social.2.value': '🌍',
    'social.2.label': 'Café reconocido mundialmente',
    'social.2.sublabel': 'Premiado en concursos internacionales',
    'social.closing': 'Esto no es un hotel más',

    // Ubicación (sección 7)
    'location.subtitle': 'CÓMO LLEGAR',
    'location.title': 'A solo 90 minutos de Bogotá, pero completamente fuera de la rutina',
    'location.description': 'Fácil acceso en carro, sin perder la sensación de estar en medio de la nada',
    'location.howto': '¿Cómo llegar?',
    'location.item.0': '90 minutos en carro desde Bogotá',
    'location.item.1': 'Ruta: Bogotá → Facatativá → Zipacón',
    'location.item.2': 'Clima templado de montaña (18-24°C)',
    'location.item.3': '1.800 metros sobre el nivel del mar',

    // CTA Final (sección 8)
    'cta.badge': 'Cupos limitados · Fines de semana se agotan rápido',
    'cta.title': 'Reserva tu escapada hoy',
    'cta.urgency': 'Manejamos pocas cabañas y la disponibilidad es limitada, especialmente fines de semana',
    'cta.subtitle': 'Escríbenos y asegura tu experiencia',
    'cta.button': 'Ver disponibilidad',
    'cta.whatsapp': 'Escríbenos por WhatsApp',
    'cta.email': 'Escribir por correo',
    'cta.trust': 'Respuesta inmediata · Hablamos español · Confirmación al instante',

    // Footer
    'footer.description': 'Hotel boutique en bosque de niebla y cafetales, a 90 minutos de Bogotá. Una escapada hecha para reconectar con lo esencial.',
    'footer.enlaces': 'Enlaces',
    'footer.contacto': 'Contacto',
    'footer.derechos': 'Todos los derechos reservados.',
    'footer.location': 'Zipacón, Cundinamarca, Colombia',
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
    'nav.ubicacion': 'Location',
    'nav.reservar': 'Book Now',

    // Hero
    'hero.badge': '90 minutes from Bogotá · Zipacón, Cundinamarca',
    'hero.title.pre': 'Escape the city and',
    'hero.title.highlight': 'reconnect with nature',
    'hero.subtitle': 'Live a unique experience in the cloud forest and coffee plantations, just 90 minutes from Bogotá',
    'hero.description': 'Private cabins, specialty coffee, and the silence you cannot find in the city',
    'hero.cta.reservar': 'Check availability',
    'hero.cta.experiencia': 'See the experience',
    'hero.chip.coffee': 'Coffee Tour included',
    'hero.chip.naturaleza': 'Real nature',
    'hero.chip.desayuno': 'Breakfast included',

    // Stats Bar
    'stats.0.label': 'From Bogotá',
    'stats.0.sublabel': 'Easy access by car',
    'stats.1.label': 'Coffee Tour',
    'stats.1.sublabel': 'Included in your stay',
    'stats.2.label': 'TripAdvisor',
    'stats.2.sublabel': '#1 in Zipacón',
    'stats.3.label': 'Private cabins',
    'stats.3.sublabel': 'Amid the coffee fields',

    // Why come
    'why.subtitle': 'WHY COME',
    'why.title': 'A getaway like no other near Bogotá',
    'why.description': 'Four reasons this escape feels different from the very first moment.',
    'why.0.title': 'Real disconnection',
    'why.0.desc': 'Far from the noise, in the heart of the cloud forest',
    'why.1.title': 'Specialty coffee',
    'why.1.desc': 'Experience coffee from seed to cup',
    'why.2.title': 'Private cabins',
    'why.2.desc': 'Independent spaces surrounded by nature',
    'why.3.title': 'Unique surroundings',
    'why.3.desc': 'Mountains, coffee plantations, and pure air',

    // Experience narrative
    'exp.subtitle': 'YOUR ESCAPE, STEP BY STEP',
    'exp.title': 'How a getaway at La Palma & El Tucán Hotel feels',
    'exp.intro': 'Three moments that turn an ordinary trip into a real escape.',
    'exp.step.0.label': 'Arrival',
    'exp.step.0.title': 'The landscape begins to change',
    'exp.step.0.desc': 'You drive out of Bogotá → the landscape changes → the air turns fresh',
    'exp.step.1.label': 'Coffee Tour',
    'exp.step.1.title': 'You walk through coffee plantations',
    'exp.step.1.desc': 'You walk through coffee plantations and discover the entire process, from seed to cup',
    'exp.step.2.label': 'Rest',
    'exp.step.2.title': 'Your cabin awaits',
    'exp.step.2.desc': 'You end the day in your cabin surrounded by nature, in complete silence',
    'exp.closing': 'No noise. No rush. Just experience.',

    // What's included
    'incluye.subtitle': 'EVERYTHING INCLUDED',
    'incluye.title': "What's included in your escape",
    'incluye.description': 'No surprises. Everything essential is taken care of so all you need to do is enjoy.',
    'incluye.0': 'Breakfast included',
    'incluye.1': 'Coffee Tour at the farm',
    'incluye.2': 'Private cabin accommodation',
    'incluye.3': 'Access to trails and nature',

    // Social proof
    'social.subtitle': 'NOT JUST ANOTHER HOTEL',
    'social.title': 'Our guests and the rankings agree',
    'social.0.value': '9.5+',
    'social.0.label': 'Booking score',
    'social.0.sublabel': 'Average from verified guests',
    'social.1.value': '#1',
    'social.1.label': 'In Zipacón on TripAdvisor',
    'social.1.sublabel': 'Top-rated boutique hotel',
    'social.2.value': '🌍',
    'social.2.label': 'Globally recognized coffee',
    'social.2.sublabel': 'Awarded in international competitions',
    'social.closing': 'Not just another hotel',

    // Location
    'location.subtitle': 'HOW TO GET HERE',
    'location.title': 'Just 90 minutes from Bogotá, yet a world away from the routine',
    'location.description': 'Easy to reach by car, without losing the feeling of being in the middle of nowhere',
    'location.howto': 'How to get here?',
    'location.item.0': '90 minutes by car from Bogotá',
    'location.item.1': 'Route: Bogotá → Facatativá → Zipacón',
    'location.item.2': 'Temperate mountain climate (18-24°C)',
    'location.item.3': '1,800 meters above sea level',

    // CTA Final
    'cta.badge': 'Limited availability · Weekends sell out fast',
    'cta.title': 'Book your escape today',
    'cta.urgency': 'We have only a few cabins and availability is limited, especially on weekends',
    'cta.subtitle': 'Write us and secure your experience',
    'cta.button': 'Check availability',
    'cta.whatsapp': 'Message us on WhatsApp',
    'cta.email': 'Send an email',
    'cta.trust': 'Immediate response · We speak English · Instant confirmation',

    // Footer
    'footer.description': 'Boutique hotel in cloud forest and coffee plantations, 90 minutes from Bogotá. An escape made to reconnect with what truly matters.',
    'footer.enlaces': 'Links',
    'footer.contacto': 'Contact',
    'footer.derechos': 'All rights reserved.',
    'footer.location': 'Zipacón, Cundinamarca, Colombia',
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
