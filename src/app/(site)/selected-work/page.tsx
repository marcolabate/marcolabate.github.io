import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';
import { caseStudies } from '@/data/caseStudies';
import { pageMeta, publicCvPath, publicCvDownloadName } from '@/lib/site';

export const metadata = pageMeta({title:'Selected Work', description:'A quick overview of Marco Labate’s Embedded DevQA and Game QA work: RuneScape: Dragonwilds, Possessor(s), and more.', path:'/selected-work/'});

export default function SelectedWork() {
 const applied = caseStudies.find(study => study.exampleFinding)!;
 return <Container className="py-8 sm:py-12">
  <div className="max-w-3xl">
   <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Selected Work · A quick overview</p>
   <h1 className="mt-3 text-4xl font-black text-primary sm:text-5xl">Marco Labate</h1>
   <p className="mt-3 text-xl font-semibold text-primary">Senior Game QA / Embedded DevQA Analyst</p>
   <p className="mt-3 text-secondary">I work alongside development teams to test gameplay, investigate unexpected player behaviour and communicate risks from feature development through release.</p>

  </div>
  <section aria-labelledby="selected-projects" className="mt-8 max-w-4xl">
   <h2 id="selected-projects" className="text-2xl font-bold text-primary">Professional Game QA work</h2>
   <div className="mt-4 space-y-3">{projects.map((project,index)=><Link key={project.slug} href={`/projects/${project.slug}/`} className={`focus-ring group block rounded-2xl border p-4 sm:p-5 ${index===0?'border-cyan/60 bg-elevated':'border-line bg-card'}`}>
    <div className="flex gap-4 sm:items-center"><img src={project.heroImage} alt="" className="hidden aspect-[460/215] w-36 shrink-0 rounded-xl object-cover sm:block"/><div className="min-w-0">{index===0&&<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-cyan">Currently · Embedded DevQA · Jagex via DAQA</p>}<h3 className="text-xl font-bold text-primary">{project.title}<span aria-hidden="true" className="ml-2 text-cyan">→</span></h3><p className="mt-2 text-sm leading-relaxed text-secondary">{project.shortDescription}</p>{index!==0&&<p className="mt-2 text-xs text-muted">{project.attribution} · QA via DAQA</p>}</div></div>
   </Link>)}</div>
   <Link href="/about/" className="focus-ring mt-3 block rounded-xl border border-line p-4 text-sm text-secondary"><strong className="text-primary">Earlier Game QA · Keywords Studios, 2016–2023</strong><br/>100+ PC, console, mobile and VR titles/projects; functional, compatibility, localization and regression testing. View background →</Link>
  </section>
  <section className="mt-8 max-w-4xl"><h2 className="text-2xl font-bold text-primary">Applied QA exercise</h2><Link href={`/case-studies/${applied.slug}/`} className="focus-ring mt-4 block rounded-2xl border border-line bg-card p-5"><h3 className="text-lg font-semibold text-primary">{applied.title} <span aria-hidden="true" className="text-cyan">→</span></h3><p className="mt-2 text-sm text-secondary">{applied.description}</p><p className="mt-2 text-sm text-cyan">System interactions · Save/load · Visual readability · Example QA finding</p></Link></section>
  <section aria-label="Credentials and contact" className="mt-8 max-w-3xl">   <div className="mt-5 flex flex-wrap gap-2">{['10+ years QA','100+ game projects','PC / Console','Embedded DevQA','ISTQB Certified Tester'].map(item=><Badge key={item}>{item}</Badge>)}</div>
   <nav aria-label="Quick contact links" className="mt-5 flex flex-wrap gap-2"><Button href={publicCvPath} download={publicCvDownloadName}>CV</Button><Button href="https://www.linkedin.com/in/marco-labate/" variant="secondary">LinkedIn</Button><Button href="/contact/" variant="secondary">Contact</Button><Button href="/" variant="secondary">Full Portfolio</Button></nav></section>
 </Container>;
}
