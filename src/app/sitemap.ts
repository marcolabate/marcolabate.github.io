import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { projects } from '@/data/projects';
import { caseStudies } from '@/data/caseStudies';

// Required for static export (output: 'export').
export const dynamic = 'force-static';

// Static sitemap generated at build time (compatible with output: 'export').
// Only indexable routes are listed. Noindex pages (/skills/, /certifications/)
// and the legacy /[locale]/ redirects are intentionally excluded. URLs use
// trailing slashes to match the canonical paths emitted by pageMeta().
export default function sitemap(): MetadataRoute.Sitemap {
 const routes = [
  '/',
  '/about/',
  '/projects/',
  '/case-studies/',
  '/beyond-game-qa/',
  '/contact/',
  '/privacy/',
  ...projects.map(p => `/projects/${p.slug}/`),
  ...caseStudies.map(c => `/case-studies/${c.slug}/`)
 ];
 return routes.map(route => ({ url: `${siteUrl}${route}` }));
}
