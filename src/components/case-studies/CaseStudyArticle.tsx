import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PageHeader } from '@/components/sections';
import { Reveal } from '@/components/motion/Reveal';
import { CaseStudyReferenceMaterial } from '@/components/case-studies/CaseStudyReferenceMaterial';
import type { CaseStudy, CaseStudyArtifact } from '@/data/caseStudies';

const defaultCaseStudyDisclaimer = 'This is a QA methodology case study based on general QA practice and sanitized hypothetical scenarios. It does not imply work on a specific project, access to private builds, internal tools, proprietary documentation, or confidential material.';

function ArtifactBlock({artifact}: {artifact: CaseStudyArtifact}) {
 return (
  <Reveal className="mt-12">
   <Card className="!p-6 sm:!p-8">
    <p className="text-xs font-semibold uppercase tracking-[.25em] text-cyan">Sample QA artifact · {artifact.kind}</p>
    <h2 className="mt-2 text-2xl font-bold text-primary">{artifact.title}</h2>
    {artifact.intro && <p className="mt-3 max-w-3xl leading-relaxed text-secondary">{artifact.intro}</p>}
    {artifact.fields && (
     <dl className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-[max-content_1fr]">
      {artifact.fields.map(field => (
       <div key={field.label} className="sm:contents">
        <dt className="text-sm font-semibold text-primary">{field.label}</dt>
        <dd className="text-sm leading-relaxed text-secondary">{field.value}</dd>
       </div>
      ))}
     </dl>
    )}
    {artifact.columns && artifact.rows && (
     <div className="mt-5 overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
       <thead>
        <tr className="border-b border-line">
         {artifact.columns.map(col => <th key={col} className="py-2 pr-4 font-semibold text-primary">{col}</th>)}
        </tr>
       </thead>
       <tbody>
        {artifact.rows.map((row, ri) => (
         <tr key={ri} className="border-b border-line/60">
          {row.map((cell, ci) => <td key={ci} className="py-2 pr-4 align-top text-secondary">{cell}</td>)}
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    )}
    {artifact.items && (
     <ul className="mt-5 grid gap-2 text-sm text-secondary sm:grid-cols-2">
      {artifact.items.map(item => (
       <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true"/><span>{item}</span></li>
      ))}
     </ul>
    )}
    {artifact.note && <p className="mt-4 text-sm text-muted">{artifact.note}</p>}
   </Card>
  </Reveal>
 );
}

export function CaseStudyArticle({caseStudy}: {caseStudy: CaseStudy}) {
 const disclaimer = caseStudy.disclaimer ?? defaultCaseStudyDisclaimer;
 return (
  <>
   <PageHeader eyebrow={caseStudy.eyebrow} title={caseStudy.articleTitle ?? caseStudy.title}>
    <p>{caseStudy.description}</p>
   </PageHeader>
   <article className="py-12 sm:py-16">
    <Container>
     <Reveal>
      <div className="mb-5 flex flex-wrap items-center gap-2">
       <Badge>{caseStudy.kind}</Badge>
      </div>
      {disclaimer && (
       <p className="max-w-3xl rounded-2xl border border-line bg-section p-5 text-sm leading-relaxed text-muted">
        {disclaimer}
       </p>
      )}
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-secondary">
       {caseStudy.intro}
      </p>
      {caseStudy.referenceMaterial && <CaseStudyReferenceMaterial reference={caseStudy.referenceMaterial}/>}
     </Reveal>

     {caseStudy.demonstrates && caseStudy.demonstrates.length > 0 && (
      <Reveal className="mt-8">
       <div className="max-w-3xl rounded-2xl border border-line bg-section p-6">
        <h2 className="text-xl font-bold text-primary">What this demonstrates</h2>
        <ul className="mt-4 space-y-2.5 text-secondary">
         {caseStudy.demonstrates.map(point => (
          <li key={point} className="flex gap-3">
           <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true"/>
           <span className="leading-relaxed">{point}</span>
          </li>
         ))}
        </ul>
       </div>
      </Reveal>
     )}

     <Reveal className="mt-12">
      <h2 className="text-2xl font-bold text-primary">Risk profile</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-secondary">{caseStudy.riskIntro}</p>
      <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-5 text-secondary marker:text-cyan">
       {caseStudy.risks.map(risk => (
        <li key={risk.title}>
         <span className="font-semibold text-primary">{risk.title}</span>: {risk.body}
        </li>
       ))}
      </ul>
     </Reveal>

     <Reveal className="mt-12">
      <h2 className="text-2xl font-bold text-primary">What I would test first</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-secondary">{caseStudy.testFirstIntro}</p>
     </Reveal>
     <div className="mt-6 grid gap-6 lg:grid-cols-2">
      {caseStudy.testFirst.map((area, index) => (
       <Reveal key={area.title} delay={index * 70} className="h-full">
        <Card interactive className="h-full">
         <h3 className="text-xl font-bold text-primary">{area.title}</h3>
         <div className="mt-4 space-y-3 text-sm leading-relaxed">
          <p><span className="font-semibold text-cyan">Why it matters</span> <span className="text-secondary">{area.whyItMatters}</span></p>
          <p><span className="font-semibold text-cyan">What could break</span> <span className="text-secondary">{area.whatCouldBreak}</span></p>
          <p><span className="font-semibold text-cyan">Validation</span> <span className="text-secondary">{area.validation}</span></p>
         </div>
        </Card>
       </Reveal>
      ))}
     </div>

     <Reveal className="mt-12">
      <h2 className="text-2xl font-bold text-primary">Example QA charters</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-secondary">{caseStudy.chartersIntro}</p>
     </Reveal>
     <div className="mt-6 grid gap-6 lg:grid-cols-2">
      {caseStudy.charters.map((charter, index) => (
       <Reveal key={charter.name} delay={index * 70} className="h-full">
        <Card interactive className="h-full">
         <h3 className="text-xl font-bold text-primary">{charter.name}</h3>
         <div className="mt-4 space-y-3 text-sm leading-relaxed">
          <p><span className="font-semibold text-cyan">Goal</span> <span className="text-secondary">{charter.goal}</span></p>
          <p><span className="font-semibold text-cyan">Focus</span> <span className="text-secondary">{charter.focus}</span></p>
          <p><span className="font-semibold text-cyan">Potential risks</span> <span className="text-secondary">{charter.risks}</span></p>
         </div>
        </Card>
       </Reveal>
      ))}
     </div>

     {caseStudy.artifact && <ArtifactBlock artifact={caseStudy.artifact} />}

     {caseStudy.backgroundMapping && (
      <Reveal className="mt-12">
       <div className="max-w-3xl rounded-2xl border border-line bg-section p-6">
        <h2 className="text-xl font-bold text-primary">{caseStudy.backgroundMapping.title}</h2>
        <p className="mt-3 leading-relaxed text-secondary">{caseStudy.backgroundMapping.body}</p>
       </div>
      </Reveal>
     )}

     <Reveal className="mt-12">
      <h2 className="text-2xl font-bold text-primary">Reporting and communication</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-secondary">{caseStudy.reportingIntro}</p>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-secondary marker:text-cyan">
       {caseStudy.reportingPoints.map(point => <li key={point}>{point}</li>)}
      </ul>
      <p className="mt-4 max-w-3xl leading-relaxed text-secondary">{caseStudy.reportingClosing}</p>
     </Reveal>

     <Reveal className="mt-12">
      <h2 className="text-2xl font-bold text-primary">{caseStudy.releaseTitle}</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-secondary">{caseStudy.releaseIntro}</p>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-secondary marker:text-cyan">
       {caseStudy.releasePoints.map(point => <li key={point}>{point}</li>)}
      </ul>
      <p className="mt-4 max-w-3xl leading-relaxed text-secondary">{caseStudy.releaseClosing}</p>
     </Reveal>

     <Reveal className="mt-12">
      <div className="max-w-3xl rounded-2xl border border-line bg-section p-6">
       <h2 className="text-xl font-bold text-primary">In summary</h2>
       <p className="mt-3 leading-relaxed text-secondary">{caseStudy.closing}</p>
      </div>
     </Reveal>

     <Reveal className="mt-10">
      <Link href="/case-studies/" className="group/back focus-ring inline-flex items-center gap-1 rounded-sm font-semibold text-cyan transition hover:text-cyanHover">
       <span aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover/back:-translate-x-1">←</span>
       Back to QA Case Studies
      </Link>
     </Reveal>
    </Container>
   </article>
  </>
 );
}
