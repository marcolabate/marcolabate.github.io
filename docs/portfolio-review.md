# Portfolio redesign for review

The homepage now introduces Marco first, gives Dragonwilds the strongest visual emphasis, and uses two smaller projects plus a fictional QA investigation to show range and judgement. Navigation is Work, Software QA, About and Contact, with a permanent CV link. The existing Next.js static export, GitHub Pages workflow, CV and project assets are preserved.

Work lives at `/selected-work/`. The old `/projects/` entry renders the consolidated Work content with the Work canonical URL. Project detail URLs, the Bradley-inspired exercise, other practice articles, skills, certifications, privacy and legacy English redirects remain available. About now includes the credentials previously exposed through a separate navigation item.

Project pages lead with engagement and contribution, followed by reported focus areas and clearly labelled recommendations where supported. Detailed coverage and official trailers remain available below. Commercial metrics are no longer used to promote the QA contribution. Software QA is a standalone entry for enterprise recruiters, covering consulting engagements, QA ownership, UAT and SQL/XML investigation methods.

## Verification completed

- `npm ci` using the existing lockfile; no dependency versions changed.
- `npm run build` and TypeScript checks pass.
- `python scripts/check-export.py`: 38 exported HTML files and 727 local link/resource checks, with no failures. Includes route preservation, anchor destinations, image alt attributes, single H1, canonical URLs, descriptions, social metadata and legacy redirects.
- Public CV bytes match the original repository version; the preview serves it as `application/pdf` with HTTP 200.
- Browser review of the desktop homepage and 320/390 px mobile compositions. Narrow-width overflow checked on the homepage, Work, all three project pages, Software QA, About, Bradley-inspired exercise and Contact. Header and long-tag overflow were fixed.
- Homepage checked with 200% text at a 390 px viewport, without horizontal overflow.
- Keyboard: Tab reaches the visible skip link; Enter focuses main content. Work anchor, project navigation, expandable coverage, contact route and theme controls exercised. Theme choice persists on reload.
- Dark/light palette contrast calculated for body, muted text and accent combinations: minimum of the checked pairs is 6.31:1. This is a token contrast check, not a full WCAG audit.
- Reduced-motion rules inspected. Reveal animation dependencies and homepage autoplay video removed; essential content is server-rendered and visible immediately. OS-level reduced-motion emulation was not available in the browser session.
- Portable review navigation, project selection and mobile mode exercised. It embeds page markup, styles, local imagery and the public CV from the production export. It is a review artifact, not a replacement for the production build.

## Remaining content and verification

No approved professional investigation with complete conditions, artifacts and a known outcome was supplied. Project pages therefore use supported contributions and link to the explicitly fictional exercise. To add a professional investigation later, supply a publication-approved report, redacted evidence, follow-up and confirmed outcome. The Software QA practical section describes supported methods rather than an invented client incident.

Possessor(s) and Girlypop recommendations have no verified implementation outcomes in the source material. Those distinctions remain visible. Platform descriptions are preserved from the existing portfolio and retain their coverage caveat.

No Lighthouse/Core Web Vitals result is claimed. Safari, Firefox, real-device testing, screen-reader testing, external store availability and end-to-end YouTube playback remain unverified. Email/LinkedIn targets were checked; no message was sent.

## Review and run

Use `npm run dev` for normal Next.js development. After `npm run build`, use `npm run preview` to serve the exact static export. The small development launcher also accepts the managed review environment's flags without changing the application framework or deployment configuration.

Generate the portable review with `python scripts/export-review.py /absolute/path/preview.html`. Its Desktop/Mobile controls resize the review surface; navigation, details and CV access work without deploying. Online videos and external destinations require connectivity.

This change is prepared on `redesign/qa-portfolio-v4`. Deployment is intentionally withheld. The existing workflow deploys pushes to `main`, so merging requires the owner's explicit deployment decision.
