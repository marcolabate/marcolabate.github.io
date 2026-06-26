import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { CaseStudy } from '@/data/caseStudies';

export function CaseStudyCard({
 caseStudy,
 className = '',
 compact = false,
 headingLevel = 2
}: {
 caseStudy: CaseStudy;
 className?: string;
 compact?: boolean;
 headingLevel?: 2 | 3;
}) {
 const Heading = headingLevel === 2 ? 'h2' : 'h3';

 return (
  <Card interactive className={`flex h-full flex-col ${className}`}>
   <div className="flex flex-wrap items-center gap-2">
    <p className="text-xs font-semibold uppercase tracking-[.25em] text-cyan">{caseStudy.label}</p>
    <Badge>{caseStudy.kind}</Badge>
   </div>
   <Heading className={`mt-3 font-bold text-primary ${compact ? 'text-xl' : 'text-2xl'}`}>{caseStudy.title}</Heading>
   <p className={`mt-3 leading-relaxed text-secondary ${compact ? 'text-sm' : ''}`}>{caseStudy.description}</p>
   <div className="mt-5 flex flex-wrap gap-2">
    {caseStudy.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
   </div>
   <Link
    className="group/cs focus-ring mt-auto inline-flex w-fit items-center gap-1 rounded-sm pt-6 text-sm font-semibold text-cyan transition hover:text-cyanHover"
    href={`/case-studies/${caseStudy.slug}/`}
   >
    Read full case study
    <span aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover/cs:translate-x-1 motion-safe:group-focus-visible/cs:translate-x-1">→</span>
   </Link>
  </Card>
 );
}
