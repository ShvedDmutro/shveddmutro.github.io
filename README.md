# shveddmutro.github.io

Personal site, blog and CV of Dmytro Shved, Independent AI Engineer.
Built with [Astro](https://astro.build), plain CSS, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Edit
- Profile, experience, skills: `src/data/profile.ts` (the site, the CV page and the PDF all read it)
- Blog posts: `src/content/blog/*.md` (`draft: true` hides a post on the live site; drafts show in `npm run dev`)
- Post pictures: `src/assets/blog/`

## Commands
- `npm run dev` — local site with drafts at http://localhost:4321
- `npm run build` — production build into `dist/`
- `npm run cv` — build, then refresh `public/Dmytro-Shved-CV.pdf` and `public/og-image.png` (needs Google Chrome). Commit both files.

The plan and decisions behind the site are in `SPEC.md`.
