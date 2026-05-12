# Activación subdominio `cercaabogota.lapalmayeltucanhotel.com`

> Estado: **PREPARADO — esperando confirmación DNS**
> Branch: `subdomain-cercaabogota`
> Solicitado al proveedor DNS: 2026-05-11

## Pasos cuando confirmen activación del CNAME

```bash
cd "C:/Users/USUARIO/Documents/cerebro-claude/lp-et-escapadas-bogota"

# 1. Verificar que el CNAME resuelve
nslookup cercaabogota.lapalmayeltucanhotel.com
# Debe responder con: alias for jbenavides-dotcom.github.io

# 2. Mergear esta branch a main y push
git checkout main
git merge subdomain-cercaabogota
git push origin main

# 3. Configurar Custom Domain en GitHub Pages (Settings → Pages)
gh api -X POST repos/jbenavides-dotcom/lp-et-escapadas-bogota/pages \
  -f cname=cercaabogota.lapalmayeltucanhotel.com 2>&1 || \
gh api -X PUT repos/jbenavides-dotcom/lp-et-escapadas-bogota/pages \
  -f cname=cercaabogota.lapalmayeltucanhotel.com

# 4. Activar Enforce HTTPS (espera ~10 min para que Let's Encrypt emita el cert)
gh api -X PUT repos/jbenavides-dotcom/lp-et-escapadas-bogota/pages \
  -F https_enforced=true

# 5. Verificar
curl -sI https://cercaabogota.lapalmayeltucanhotel.com | head -5
```

## Qué cambia esta branch

- `vite.config.ts`: `base: '/lp-et-escapadas-bogota/'` → `base: '/'`
- `public/CNAME`: nuevo archivo con `cercaabogota.lapalmayeltucanhotel.com`

## Después de activar — comunicar a Marketing

> "Subdominio activo en `https://cercaabogota.lapalmayeltucanhotel.com`. Por favor actualizar la URL final de la campaña Google Ads 'Escapadas cerca de Bogotá' a este dominio. La URL anterior `jbenavides-dotcom.github.io/lp-et-escapadas-bogota/` queda con redirect 301 automático, pero el conteo de conversiones en Ads queda más limpio actualizando la URL final."

## Rollback (si algo sale mal)

```bash
git checkout main
gh api -X DELETE repos/jbenavides-dotcom/lp-et-escapadas-bogota/pages
git push origin main --force-with-lease  # solo si ya se había mergeado
```
