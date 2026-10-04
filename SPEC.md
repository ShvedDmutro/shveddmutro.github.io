# Personal site — spec (draft for decisions)

Status: built locally (Astro, plain CSS, GitHub Pages, free domain). Not pushed yet — the live site is still the 2018 version.
Decisions: Astro · shveddmutro.github.io · photo from LinkedIn · contact email shveddmutro@gmail.com (to confirm).

## 1. Goal
One professional home on the web for Dmytro Shved, Independent AI Engineer:
- the place a potential client lands from LinkedIn, a post, or a Google search;
- proof of expertise through writing (blog) and the free guide;
- an easy way to get in touch and download the CV.

Success = a visitor understands in 5 seconds what Dmytro builds, sees proof, and knows how to contact him.

## 2. Audience
1. Founders, CTOs and product leads who want AI agents, LLM features or automation built properly.
2. Engineering leads who want their team to work well with AI coding agents.
3. Engineers who follow the writing (they share it, which brings 1 and 2).

## 3. Pages
| Page | What's on it |
|---|---|
| Home | Hero (role, one-line promise, Get in touch / Download CV), What I build, How I work, Experience, Stack, Latest posts (3), Free guide, Contact |
| Blog (list) | All posts, newest first, with tags (Agents · AI in products · Automation · AI coding · Tools) |
| Blog post | Full article, pictures/carousels from LinkedIn, reading time, date, "Discuss on LinkedIn" link, next/previous post |
| Playbook | Short page about the free guide + read/download the PDF |
| CV | Print-ready version of the CV; the same content as the PDF |
| 404 | Simple, on-brand, link home |

Also: RSS feed, sitemap, share images per post (auto-generated), favicon.

## 4. Content model (one source of truth)
- **Profile data** (role, experience, skills, links) in one data file. The home page, the CV page and the PDF all read it, so they can never disagree.
- **Blog posts** as Markdown files: title, date, summary, tags, cover picture, LinkedIn link. One file per post.
- **Pictures** from the LinkedIn work (visuals, carousels, the playbook) reused in posts.

## 5. Blog ↔ LinkedIn workflow
- Every LinkedIn post gets a blog version: same idea, a bit longer (more context, an example, the picture or carousel inline).
- Order: blog post published first (it becomes the original), then the LinkedIn post the same day. No link in the LinkedIn post body (LinkedIn hides those); the link goes in the first comment.
- Later the weekly helper drafts both versions together.
- Existing 14 LinkedIn drafts become the first blog posts as they're published.

## 6. Design
- Same brand as LinkedIn: dark navy, one lime accent, Space Grotesk / Inter / JetBrains Mono, calm and professional.
- No Tailwind. Plain modern CSS (variables, nesting, styles scoped per component).
- Mobile first, fast, accessible (keyboard, contrast, reduced motion).
- Real photo of Dmytro in the hero (needed from Dmytro). Until then: initials badge.

## 7. Quality bar
- Lighthouse 95+ on performance, accessibility, best practices, SEO.
- Works without JavaScript (content is plain HTML).
- Every page has proper title, description and share image.
- No private data: no phone number, no date of birth, no home address (the 2018 site had all three).

## 8. Tech and hosting
| | Astro (recommended) | Next.js |
|---|---|---|
| Fit | Built for content sites and blogs: Markdown posts, RSS, share images out of the box | Built for web apps; blog needs more setup |
| Speed | Ships almost no JavaScript | Ships React to every page |
| React | Can still use React components where useful | React everywhere |
| Hosting | GitHub Pages, free | GitHub Pages (static export), free. Vercel free tier is non-commercial only |
| Work so far | Half built | Start over |

Hosting: GitHub Pages, free. Auto-deploy on every push.
Domain: optional custom domain (e.g. dmytroshved.com, about $10–15/year). Free alternative: keep shveddmutro.github.io.
Analytics: keep the existing Google Tag Manager, or switch to a privacy-friendly one later.

## 9. Out of scope (for now)
Comments, newsletter, contact form with a backend, Ukrainian version, case studies with client names.

## 10. Decisions needed from Dmytro
1. Stack: Astro or Next.js.
2. Domain: buy a custom domain, or keep shveddmutro.github.io.
3. Contact email on the site: shveddmutro@gmail.com (old site) or another.
4. A professional photo for the hero (or keep initials).
