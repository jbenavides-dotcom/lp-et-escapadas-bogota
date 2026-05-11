# lp-et-escapadas-bogota

Landing del Hotel **La Palma & El Tucán** para la campaña Google Ads "escapadas cerca a Bogotá" (público no romántico: parejas, amigos, amantes del café, desconexión).

- **Live:** https://jbenavides-dotcom.github.io/lp-et-escapadas-bogota/
- **Repo:** https://github.com/jbenavides-dotcom/lp-et-escapadas-bogota

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind v4 (via `@import "tailwindcss"`)
- i18n custom (ES/EN) con Context API — sin libs externas
- Cloudinary (`dkqocgknd`, carpeta `lpet/`)
- Deploy automático a GitHub Pages via Actions

## Branding (alineado con LP-ET-AVES)

- **Fonts:** Baskervville (serif, títulos) + Lato (sans, texto)
- **Paleta:**
  - `#E8838C` brand-pink — SOLO CTAs principales
  - `#2D5A3D` brand-green — acentos (eyebrows, iconos, FloatingCTA, WhatsApp)
  - `#C9A227` brand-gold — detalles (badges, stats values)
  - `#1a1a1a` brand-dark — fondo StatsBar/Footer
  - `#F5F1EB` brand-light — fondo de secciones claras

## Estructura (9 secciones)

1. Hero — H1 + subtitle + 2 CTAs
2. **StatsBar** (dark) — 5 datos clave del paquete
3. HookSection — diferencial "Mucho más que un hotel"
4. WhySection — 4 razones
5. ExperienceSection "Así se vive" — storytelling + imagen grande
6. IncludeSection — 4 cards de texto
7. ExtraExperiencesSection — 6 actividades adicionales + imagen storytelling
8. SocialProofSection — 5 stats sociales
9. LocationSection + CtaFinal + Footer

## Imágenes en Cloudinary (`lpet/escapadas-*`)

| Asset | public_id | Uso |
|---|---|---|
| HERO_BG | `escapadas-hero` | Background Hero |
| HOOK | `escapadas-hook` | Imagen split HookSection |
| STORYTELLING | `escapadas-storytelling` | Imagen "Así se vive" |
| TOUR_EXTRA | `escapadas-tour-extra` | Imagen ExtraExperiences |
| COFFEE_TOUR | `escapadas-coffee-tour` | Disponible (no usada en Include) |
| CABANA | `escapadas-cabana` | Disponible (no usada en Include) |

## Comandos

```bash
npm install
npm run dev           # http://localhost:3024/lp-et-escapadas-bogota/
npm run build
npx tsc --noEmit      # type check
```

## Decisiones editoriales

- **FloatingCTA en `brand-green`** (no verde WhatsApp `#25D366`) — consistencia con ecosistema LP&ET
- **IncludeSection sin fotos ni emojis grandes** — solo texto. Hasta que llegue foto real de desayuno
- **ExtraExperiencesSection replica patrón ExperienceSection** — imagen rounded-3xl shadow-2xl, NO de fondo
- **Pink reservado a CTAs principales** — ningún acento de UI usa pink

## Última actualización

**2026-05-11** — Feedback Lina aplicado al pie de la letra. Commit `6bcb86f`. Ver `memory/la-palma-y-el-tucan/landing-escapadas-bogota.md` en cerebro-claude para detalles.
