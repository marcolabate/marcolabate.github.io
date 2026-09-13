import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SelectedProjects } from '@/components/portfolio/SelectedProjects';
import { ContactStrip } from '@/components/portfolio/ContactStrip';
import { caseStudies } from '@/data/caseStudies';
import { pageMeta } from '@/lib/site';
export const metadata = pageMeta({title: 'Work & QA Practice', description: 'Professional Game QA contributions through DAQA on Dragonwilds, Possessor(s) and Don’t Stop, Girlypop!, alongside clearly labelled independent QA exercises.', path: '/selected-work/'});
export default function Work() {
 return <Container>
  <header className="page-intro"><p className="eyebrow">Work</p><h1>Experience in practice.</h1><p>Selected professional contributions, followed by independent examples of how I investigate, prioritise and report.</p></header>
  <section aria-labelledby="professional-work"><div className="section-heading"><h2 id="professional-work">Professional Game QA</h2><span className="text-muted text-sm">QA delivered through DAQA</span></div><SelectedProjects/><p className="work-note">These projects are credited under DAQA, the QA partner. Additional outsourced work is summarised in my <Link className="text-link" href="/about/#career">career history</Link>.</p></section>
  <section id="qa-practice" className="practice-section" aria-labelledby="practice-title"><p className="eyebrow">Independent exercises & methodology</p><h2 id="practice-title">QA Practice</h2><p className="section-copy">Hypothetical scenarios that show my approach to evidence, player impact and regression coverage. These exercises are separate from my professional project work.</p>
   <div className="practice-list">{caseStudies.map((study, index) => <Link className="practice-row focus-ring" key={study.slug} href={`/case-studies/${study.slug}/`}><span className="practice-index" aria-hidden="true">0{index + 1}</span><div><p className="eyebrow">{study.kind}</p><h3>{study.title}</h3><p>{study.exampleFinding ? 'Includes a fictional save/reload report with a state comparison, reproduction steps and proposed regression checks. No involvement with Bradley the Badger or Day 4 Night Studios.' : study.description}</p></div><ArrowUpRight size={22} aria-hidden="true"/></Link>)}</div>
  </section>
  <ContactStrip/>
 </Container>;
}
