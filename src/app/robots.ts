import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

// Required for static export (output: 'export').
export const dynamic = 'force-static';

// Static robots.txt generated at build time (compatible with output: 'export').
export default function robots(): MetadataRoute.Robots {
 return {
  rules: { userAgent: '*', allow: '/' },
  sitemap: `${siteUrl}/sitemap.xml`
 };
}
