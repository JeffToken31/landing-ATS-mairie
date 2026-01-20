# Reutilisation du template (Landing portfolio ATS)

## 1) Presentation
Ce repo sert de **template de landing portfolio** (Next.js App Router) pour mettre en scene un projet avec videos, en **FR/EN**. Tout le contenu texte est pilote via `src/content/content.ts`.

Configurable via `src/content/content.ts` :
- `site`, `hero`, `context`, `overview`, `workflow`, `features`, `contribution`, `techDetails`, `footer`
- `contentFR` et `contentEN`

## 2) Quick start
Prerequis : Node.js + npm.

Installation et lancement :
```bash
npm install
npm run dev
```

## 3) Creer une nouvelle landing (10 minutes)
1) Dupliquer le repo (Use this template / fork / copie).
2) Modifier le contenu :
   - `src/content/content.ts`
   - mettre a jour `contentFR` + `contentEN`
3) Remplacer les medias dans `public` :
   - `public/media/hero/ats-hero.mp4`
   - `public/media/hero/ats-hero.jpg`
   - `public/media/features/*.mp4`
4) Mettre a jour l'image Open Graph :
   - `public/og/ats-og.jpg`
5) Verifier les liens (LinkedIn / GitHub / CV).

## 4) Conventions medias (important)
- **Chemins** : toujours sans `public/` (ex. `/media/features/demo.mp4`).
- Formats recommandes :
  - Images : WebP / PNG
  - Videos : MP4 (H.264), `muted`, `loop`
- Poids conseilles :
  - Hero < 10 MB
  - Features < 6 MB
- Ajouter un `poster` pour chaque video.

## 5) i18n (FR/EN)
- FR par defaut.
- Routes : `/fr` et `/en`.
- Ajouter une 3e langue :
  1) Ajouter `contentXX` dans `src/content/content.ts`.
  2) Mettre a jour `getContent`.
  3) Mettre a jour `SUPPORTED_LOCALES` et routing (layout + middleware).

## 6) SEO & preview social
- Metadata locale : `src/app/[locale]/layout.tsx` (title/description/OG/Twitter).
- Image OG : `public/og/ats-og.jpg`.
- Test : LinkedIn Post Inspector.

## 7) Checklist avant deploiement
- `npm run build` OK
- `/` -> `/fr` OK
- `/fr` et `/en` OK
- Videos + posters OK
- Dark mode OK
- Liens externes OK
- OG preview OK

## 8) Deploiement Vercel
1) Importer le repo GitHub dans Vercel.
2) Deploy.
3) Verifier les URLs `/fr` et `/en`.
4) Verifier l'OG image et le mode dark.

Note : plusieurs projets gratuits sur Vercel sont OK.

## 9) Pieges courants
- Ne pas ignorer `src/content/content.ts` dans `.gitignore`.
- Si erreur `@/content/content` : verifier l'alias `@` dans `tsconfig.json`.
- Les chemins medias ne doivent **pas** inclure `public/`.

---
Optional EN summary: This repo is a reusable FR/EN landing portfolio template. Edit `src/content/content.ts`, replace media under `public/media`, update `public/og/ats-og.jpg`, and deploy on Vercel.
