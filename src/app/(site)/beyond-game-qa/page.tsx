import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/sections';
import { Reveal } from '@/components/motion/Reveal';
import { CompanyLogo } from '@/components/software-qa/CompanyLogo';
import { softwareQaExperience, softwareQaSections } from '@/data/softwareQa';
import { pageMeta, publicCvDownloadName, publicCvPath } from '@/lib/site';

export const metadata: Metadata = pageMeta({
 title: 'Software QA Experience',
 description: 'Software QA experience across UAT, regression, SQL validation, enterprise workflows, defect analysis, and stakeholder communication.',
 path: '/beyond-game-qa/'
});

export default function BeyondGameQa(){
 return <>
  <PageHeader eyebrow="Software QA" title="Software QA experience">
   <p className="text-xl font-medium text-primary">Structured Software QA experience across UAT, finance, banking, data validation and enterprise workflows.</p>
   <p className="mt-4">My Software QA background adds depth to how I approach quality: requirement analysis, regression risk, SQL-based investigation, documentation, stakeholder communication and release confidence.</p>
  </PageHeader>
  <section className="section-glow py-12 sm:py-14">
   <Container>
    <Reveal>
     <h2 className="text-3xl font-bold text-primary">Selected Software QA Experience</h2>
     <p className="mt-3 max-w-3xl text-secondary">A selection of recent Software QA engagements focused on UAT, regression coverage, SQL validation, defect analysis, QA ownership and stakeholder-facing quality support. Current work is delivered on a freelance / consulting basis, which is why some engagements run concurrently. I remain open to long-term roles.</p>
    </Reveal>
    <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     {softwareQaExperience.map((experience,index)=><Reveal key={experience.companyName} delay={index*90} className="h-full">
      <Card interactive className="flex h-full flex-col">
       <div className="grid-bg relative mb-5 flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-cyan/10 via-section/60 to-violet/10 p-3">
        <div className="absolute right-4 top-4 h-14 w-14 rounded-full border border-cyan/20 bg-cyan/10 blur-xl" aria-hidden="true"/>
        <div className="relative h-full w-full">
         <CompanyLogo companyName={experience.companyName} logoSrc={experience.logoSrc} logoAlt={experience.logoAlt} fallbackInitials={experience.fallbackInitials}/>
        </div>
       </div>
       <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan">{experience.date}</p>
       <h3 className="mt-2 text-2xl font-bold text-primary">{experience.companyName}</h3>
       <p className="mt-1 font-semibold text-secondary">{experience.role}</p>
       <p className="mt-1 text-sm text-muted">{experience.engagementType}</p>
       <div className="mt-4 flex flex-wrap gap-2">{experience.tags.map(tag=><Badge key={tag}>{tag}</Badge>)}</div>
       <p className="mt-5 leading-relaxed text-secondary">{experience.description}</p>
       <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm text-secondary">
        {experience.bullets.map(detail=><li key={detail} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true"/><span>{detail}</span></li>)}
       </ul>
      </Card>
     </Reveal>)}
    </div>
   </Container>
  </section>
  <section className="section-glow py-12 sm:py-16">
   <Container>
    <div className="grid gap-6 lg:grid-cols-2">
     {softwareQaSections.map((section,index)=><Reveal key={section.title} delay={index*70} className="h-full">
      <Card interactive className="h-full">
       <p className="text-xs font-semibold uppercase tracking-[.25em] text-cyan">0{index+1}</p>
       <h2 className="mt-3 text-2xl font-bold text-primary">{section.title}</h2>
       <p className="mt-4 leading-relaxed text-secondary">{section.description}</p>
       <ul className="mt-5 grid gap-2 border-t border-line pt-5 text-sm text-secondary sm:grid-cols-2">
        {section.points.map(point=><li key={point} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true"/><span>{point}</span></li>)}
       </ul>
      </Card>
     </Reveal>)}
    </div>
   </Container>
  </section>
  <section className="border-y border-line bg-section/60 py-12 sm:py-14">
   <Container>
    <Reveal>
     <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
      <div>
       <p className="text-sm font-semibold uppercase tracking-[.3em] text-cyan">Connected practice</p>
       <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary">How this supports my Game QA work</h2>
      </div>
      <p className="text-lg leading-relaxed text-secondary">This background makes my Game QA work more structured. It helps me investigate gameplay issues with stronger evidence, write clearer reproduction steps, assess regression risk more effectively and understand how quality decisions affect developers, producers, stakeholders and players.</p>
     </div>
    </Reveal>
   </Container>
  </section>
  <section className="py-12 sm:py-16">
   <Container>
    <Reveal>
     <Card className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="max-w-2xl">
       <p className="text-sm font-semibold uppercase tracking-[.3em] text-cyan">Software QA support</p>
       <h2 className="mt-3 text-3xl font-bold text-primary">Need structured QA support beyond games?</h2>
       <p className="mt-3 text-secondary">Available for Software QA, UAT, regression testing, SQL validation, defect analysis and QA process support across remote teams.</p>
       <p className="mt-3 text-sm text-muted">Public CV version available for recruiters and hiring teams.</p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-3">
       <Button href="/contact/">Contact Marco</Button>
       <Button href={publicCvPath} variant="secondary" download={publicCvDownloadName}>Download CV</Button>
      </div>
     </Card>
    </Reveal>
   </Container>
  </section>
 </>;
}
