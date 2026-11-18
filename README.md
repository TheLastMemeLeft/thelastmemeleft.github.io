# Aryan Agarwal: portfolio site

Live (after first deploy): https://thelastmemeleft.github.io

Astro 7 static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Edit content
- **All text:** `src/data/site.ts`. Every claim must trace to the Question Bank, resume v5, or the ATLAS result note (see the header comment).
- **ATLAS write-up:** `src/pages/research/atlas.astro`.
- **Plots:** edit numbers in `scripts/make_plots.py`, then `npm run plots` (uses the `atlas-ml` conda env's Python). Writes `public/figures/*-{dark,light}.svg`.
- **Resume:** `public/Aryan_Agarwal_Resume.pdf` is the no-phone copy. Rebuild it with
  `python C:\Users\aryan\Projects\autoapply\build_resume_v5.py --web`, then copy `out\resume_v5_web\Aryan_Agarwal_Resume.pdf` here.
- **Social card:** `scripts/make_og.py` → `public/og.png`.

## Run locally
```powershell
cd C:\Users\aryan\Projects\portfolio-site
npm install
npm run dev        # http://localhost:4321 (live reload)
npm run build      # output in dist/
npm run preview    # serve dist/
```

## Rules
- No phone, home address, GPA, or secrets anywhere in this repo.
- ATLAS: plots, summary numbers and method only. Never commit lab structures or QE/DFT output files.
- Versions are pinned (Astro 7.4.12). Upgrade on purpose, about once a year, and read the Astro upgrade guide first.
