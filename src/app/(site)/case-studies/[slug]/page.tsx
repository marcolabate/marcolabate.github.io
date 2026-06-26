import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyArticle } from '@/components/case-studies/CaseStudyArticle';
import { caseStudies, getCaseStudy } from '@/data/caseStudies';
import { pageMeta } from '@/lib/site';

export function generateStaticParams() {
 return caseStudies.map(caseStudy => ({slug: caseStudy.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
 const {slug} = await params;
 const caseStudy = getCaseStudy(slug);
 if (!caseStudy) return {};
 return pageMeta({title: caseStudy.metaTitle??caseStudy.title, description: caseStudy.metaDescription??caseStudy.description, path: `/case-studies/${slug}/`});
}

export default async function CaseStudyPage({params}: {params: Promise<{slug: string}>}) {
 const {slug} = await params;
 const caseStudy = getCaseStudy(slug);

 if (!caseStudy) notFound();

 return <CaseStudyArticle caseStudy={caseStudy} />;
}
