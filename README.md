# Portfolio (React + Vite + Tailwind)

This is a data-driven portfolio starter tailored for **Mohammad Zaid Monis** and ready for GitHub Pages deployment at `https://zaidmonis.github.io/`. Content lives in `src/data` so you can update the site without editing UI logic.

> Placeholder notice: Replace the sample experience, skills, education, and contact details with your real resume data. The fields are annotated in the `src/data` files.

## Project structure

```
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src
    ├── App.tsx
    ├── main.tsx
    ├── theme.tsx
    ├── components/
    ├── data/
    ├── layouts/
    ├── pages/
    └── styles/
```

## Scripts

- `npm run dev` — start the Vite dev server.
- `npm run build` — build the production bundle.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint across the source files.

## GitHub Pages deployment

1. Push the repository to GitHub as `zaidmonis.github.io`.
2. Enable GitHub Pages: **Settings → Pages → Source = GitHub Actions**.
3. Use the provided workflow at `.github/workflows/deploy.yml` to build and deploy the `dist` folder automatically on pushes to `main`.

Manual publish alternative:

```bash
npm install
npm run build
npm run preview # optional
# Deploy the dist/ folder to the `gh-pages` branch or to root if using username.github.io
```

## Customization checklist

- Update `src/data/profile.ts` with your name, title, location, email, and social links.
- Replace experience, projects, skills, education, and blog data in `src/data/*` with real entries from your resume.
- Swap the favicon in `public` (add one) and adjust colors in `tailwind.config.cjs` if desired.
- Remove the `/blog` route if you do not plan to publish posts (delete `BlogPage` and the nav entry).

## Notes

- Light/dark theme preference persists via `localStorage` (`portfolio-theme`).
- The contact form currently opens the visitor's email client via a `mailto:` link. Integrate a form backend if needed.
- Vite `base` is set to `/` for username.github.io deployments.
