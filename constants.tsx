import type { NavLink, Stat } from './types';

// ─── Assets ───────────────────────────────────────────────────────────────────
const CDN = 'https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto';

export const ASSETS = {
  // Hero — cabaña entre cafetales (reuso de la landing romántica)
  HERO_BG:        `${CDN},w_1600/lpet/romantico-hero.jpg`,
  // Cafetal / naturaleza
  CAFETAL:        `${CDN},w_1200/lpet/aves-tucaneta.jpg`,
  // Cabaña / experiencia (sunset romantico)
  CABANA:         `${CDN},w_1000/lpet/romantico-sunset.jpg`,
  // Imagen de café / coffee tour
  COFFEE:         `${CDN},w_1000/lpet/aves-guia-binoculares.jpg`,
  // Galería pasos / experiencia narrativa
  STEP_1:         `${CDN},w_800/lpet/romantico-hero.jpg`,
  STEP_2:         `${CDN},w_800/lpet/aves-guia-binoculares.jpg`,
  STEP_3:         `${CDN},w_800/lpet/romantico-sunset.jpg`,
  // Bg cierre CTA
  SUNSET:         `${CDN},w_1600/lpet/romantico-sunset.jpg`,
} as const;

// ─── Contact & CTAs ───────────────────────────────────────────────────────────
export const WHATSAPP_URL =
  'https://wa.me/573189565617?text=Hola%2C%20quiero%20información%20sobre%20una%20escapada%20cerca%20de%20Bogotá';
export const CLOUDBEDS_URL =
  'https://hotels.cloudbeds.com/en/reservation/yB0fEt';
export const EMAIL = 'reservations@lapalmayeltucan.com';

// Link cruzado a la landing romántica existente
export const ROMANTICAS_URL = 'https://escapadas.lapalmayeltucanhotel.com/';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Por qué venir', href: '#por-que' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Qué incluye', href: '#incluye' },
  { label: 'Ubicación', href: '#ubicacion' },
];

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  { value: '90 min', label: 'Desde Bogotá', sublabel: 'Acceso fácil en carro' },
  { value: '☕', label: 'Coffee Tour', sublabel: 'Incluido en tu estadía' },
  { value: '5.0', label: 'TripAdvisor', sublabel: '#1 en Zipacón' },
  { value: '🛖', label: 'Cabañas privadas', sublabel: 'En medio de cafetales' },
];
