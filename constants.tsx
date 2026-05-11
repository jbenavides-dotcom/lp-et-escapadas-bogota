import type { NavLink } from './types';

// ─── Assets ───────────────────────────────────────────────────────────────────
// Cloudinary base — feedback Lina (imágenes nuevas subidas a /lpet/escapadas-*)
const CDN = 'https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto';

export const ASSETS = {
  // Hero principal — escapadas-hero
  HERO_BG:        `${CDN},w_2000/lpet/escapadas-hero.jpg`,
  // Sección 2: Hook / Diferencial — escapadas-hook
  HOOK:           `${CDN},w_1200/lpet/escapadas-hook.jpg`,
  // Sección 4: Storytelling — escapadas-storytelling (legacy)
  STORYTELLING:   `${CDN},w_2000/lpet/escapadas-storytelling.jpg`,
  // Sección 4 (actual): "Así se vive" — paisaje aéreo finca
  ASI_SE_VIVE:    `${CDN},w_2000/lpet/escapadas-asi-se-vive.jpg`,
  // Sección 3: 4 imágenes para WhySection (¿Por qué elegirnos?)
  WHY_DESCONEXION: `${CDN},w_1200/lpet/escapadas-why-desconexion.jpg`,
  WHY_CAFE:        `${CDN},w_1200/lpet/escapadas-why-cafe.jpg`,
  WHY_BOUTIQUE:    `${CDN},w_1200/lpet/escapadas-why-boutique.jpg`,
  WHY_AUTENTICA:   `${CDN},w_1200/lpet/escapadas-why-autentica.jpg`,
  // Sección 5: Coffee Tour card
  COFFEE_TOUR:    `${CDN},w_1200/lpet/escapadas-coffee-tour.jpg`,
  // Sección 5: Cabaña card
  CABANA:         `${CDN},w_1200/lpet/escapadas-cabana.jpg`,
  // Sección 6: Experiencias adicionales (banner)
  TOUR_EXTRA:     `${CDN},w_2000/lpet/escapadas-tour-extra.jpg`,
  // Sección 5: Senderos naturales card (reusa foto bosque del flujo romántico — legacy)
  SENDEROS:       `${CDN},w_1200/lpet/romantico-bosque.jpg`,
  // Sección 6 "Todo lo que necesitas para desconectarte" — 4 fotos finales (2026-05-11 PM)
  INCLUYE_COFFEE:   `${CDN},w_1200/lpet/escapadas-incluye-coffee.jpg`,
  INCLUYE_DESAYUNO: `${CDN},w_1200,h_900,c_fill,g_auto/lpet/escapadas-incluye-desayuno.jpg`,
  INCLUYE_CABANA:   `${CDN},w_1200/lpet/escapadas-incluye-cabana.jpg`,
  INCLUYE_SENDEROS: `${CDN},w_1200/lpet/escapadas-incluye-senderos.jpg`,
  // Bg CTA final — reusamos storytelling (atardecer/finca)
  SUNSET:         `${CDN},w_2000/lpet/escapadas-storytelling.jpg`,
  // Pasos narrativa (legacy — la sección Experience ahora muestra párrafo + imagen única)
  STEP_1:         `${CDN},w_1200/lpet/escapadas-hero.jpg`,
  STEP_2:         `${CDN},w_1200/lpet/escapadas-coffee-tour.jpg`,
  STEP_3:         `${CDN},w_1200/lpet/escapadas-cabana.jpg`,
} as const;

// ─── Contact & CTAs ───────────────────────────────────────────────────────────
export const WHATSAPP_URL =
  'https://wa.me/573189565617?text=Hola%2C%20quiero%20información%20sobre%20una%20escapada%20cerca%20de%20Bogotá';
export const CLOUDBEDS_URL =
  'https://hotels.cloudbeds.com/en/reservation/yB0fEt';
export const EMAIL = 'reservations@lapalmayeltucan.com';

// Link cruzado a la landing romántica existente
export const ROMANTICAS_URL = 'https://escapadas.lapalmayeltucanhotel.com/';

// Datos contacto (footer — feedback Lina)
export const HOTEL_PHONE_DISPLAY = '+57 318 956 5617';
export const HOTEL_WEBSITE = 'www.lapalmayeltucan.com';
export const HOTEL_INSTAGRAM = '@lapalmayeltucanhotel';
export const HOTEL_LOCATION_DISPLAY = 'Zipacón, Cundinamarca';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Por qué venir', href: '#por-que' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Qué incluye', href: '#incluye' },
  { label: 'Adicionales', href: '#adicionales' },
  { label: 'Ubicación', href: '#ubicacion' },
];

// ─── Stats Bar (sección dark debajo del Hero — patrón Aves) ──────────────────
// 5 ítems: value grande (emoji o número), label corto, sublabel descriptivo.
// Copy aprobado por Lina; mostrado en `sections/StatsBar.tsx`.
export interface EscapadasStat {
  value: string;
}

export const STATS_ESCAPADAS: EscapadasStat[] = [
  { value: '☕' },
  { value: '3.3 km' },
  { value: '🍽️' },
  { value: '🏡' },
];
