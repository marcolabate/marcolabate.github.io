import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/sections';
import { Reveal } from '@/components/motion/Reveal';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';
import { pageMeta } from '@/lib/site';

export const metadata: Metadata = pageMeta({
 title: 'QA Case Studies',
 description: 'QA methodology pieces and applied exercises: risk-based testing, live patch monitoring, progression balance, UI/UX guidance and multiplayer regression.',
 path: '/case-studies/'
});

export default function CaseStudies() {
 return (
  <>
   <PageHeader eyebrow="Case Studies" title="QA Case Studies">
    <p>Methodology pieces and applied exercises showing how I structure coverage, exploratory testing and reporting across gameplay systems, live updates, player guidance, progression and multiplayer. Each is clearly labelled and based on public information or hypothetical scenarios, not a disclosure of confidential project work.</p>
   </PageHeader>
   <section className="py-12 sm:py-16">
    <Container>
     <div className="grid gap-6 md:grid-cols-2">
      {caseStudies.map((caseStudy, index) => (
       <Reveal
        key={caseStudy.slug}
        delay={index * 70}
        className={`h-full ${index === 0 ? 'md:col-span-2' : ''}`}
       >
        <CaseStudyCard caseStudy={caseStudy} />
       </Reveal>
      ))}
     </div>
    </Container>
   </section>
  </>
 );
}
