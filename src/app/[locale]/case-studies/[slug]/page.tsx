import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegacyRedirect } from '@/components/LegacyRedirect';
import { caseStudies, getCaseStudy } from '@/data/caseStudies';
import { locales } from '@/lib/i18n';
import { legacyRedirectMeta } from '@/lib/site';

export function generateStaticParams() {
 return locales.flatMap(locale => caseStudies.map(caseStudy => ({locale, slug: caseStudy.slug})));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
 const {slug} = await params;
 return legacyRedirectMeta(`/case-studies/${slug}/`);
}

export default async function LegacyCaseStudyPage({params}: {params: Promise<{slug: string}>}) {
 const {slug} = await params;
 if (!getCaseStudy(slug)) notFound();
 return <LegacyRedirect to={`/case-studies/${slug}/`} />;
}
