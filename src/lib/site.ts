import type { Metadata } from 'next';

// Single source of truth for the production origin. The site is published as a
// GitHub user page at the domain root (no base path), so canonical URLs and the
// sitemap/robots references all live directly under this origin.
export const siteUrl = 'https://marcolabate.github.io';
// Short brand name, used for og:site_name and as the page-title suffix.
export const siteName = 'Marco Labate';
// Full home-page and default social title, pairing the brand with the primary
// positioning. Sub-pages compose their own title via the "%s | Marco Labate" template.
export const siteTitle = 'Marco Labate | Senior Game QA / DevQA Analyst';

// Consistent primary positioning statement reused across metadata, hero, footer
// and About so the site presents one coherent professional identity.
export const positioning =
 'Senior Game QA / DevQA Analyst and Software QA Consultant with 10+ years across PC, console and enterprise software testing.';

export const defaultOgImage = '/videos/portfolio-trailer-poster.webp';
export const publicCvPath = '/assets/Marco_Labate_CV_Public.pdf';
export const publicCvDownloadName = 'Marco_Labate_CV_Public.pdf';

type PageMetaInput = {
 title: string;
 description: string;
 path: string; // canonical path, e.g. '/about/'
 ogImage?: string;
};

// Builds route-specific metadata: unique title (composed with the template in the
// root layout), description, canonical URL and Open Graph fields. metadataBase is
// set in the root layout, so relative paths resolve to absolute URLs.
export function pageMeta({title, description, path, ogImage = defaultOgImage}: PageMetaInput): Metadata {
 return {
  title,
  description,
  alternates: {canonical: path},
  openGraph: {
   title: `${title} | Marco Labate`,
   description,
   url: path,
   siteName,
   type: 'website',
   images: ogImage ? [{url: ogImage}] : undefined
  },
  twitter: {
   card: 'summary_large_image',
   title: `${title} | Marco Labate`,
   description,
   images: ogImage ? [ogImage] : undefined
  }
 };
}

// Marks secondary/standalone routes as non-indexable while still giving them a
// clean, route-specific title and description.
export function noindexMeta(meta: PageMetaInput): Metadata {
 return {...pageMeta(meta), robots: {index: false, follow: false}};
}

export function legacyRedirectMeta(path: string): Metadata {
 return {
  alternates: {canonical: path},
  openGraph: {url: path},
  robots: {index: false, follow: true}
 };
}
