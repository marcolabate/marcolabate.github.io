import Link from 'next/link';import { projects } from '@/data/projects';import { skillGroups } from '@/data/skills';import { caseStudies } from '@/data/caseStudies';import { certifications } from '@/data/certifications';import { timeline } from '@/data/timeline';import { Container } from '@/components/ui/Container';import { Card } from '@/components/ui/Card';import { Badge } from '@/components/ui/Badge';import { Button } from '@/components/ui/Button';import { PlatformBadges } from '@/components/ui/Platforms';import { Reveal } from '@/components/motion/Reveal';import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';import { HeroVideo } from '@/components/HeroVideo';import { publicCvDownloadName, publicCvPath } from '@/lib/site';
export function PageHeader({title,eyebrow,children}:{title:string;eyebrow:string;children:React.ReactNode}){return <section className="grid-bg border-b border-line bg-section/45 py-20"><Container><Reveal><p className="text-sm font-semibold uppercase tracking-[.3em] text-cyan">{eyebrow}</p><h1 className="page-intro-title mt-4 max-w-4xl text-4xl text-primary sm:text-6xl">{title}</h1><div className="mt-5 max-w-3xl text-lg text-secondary">{children}</div></Reveal></Container></section>}
export function ProjectGrid({headingLevel=3}:{headingLevel?:2|3}){
 const Heading=headingLevel===2?'h2':'h3';
 return <>
  <div className="grid gap-6 md:grid-cols-3">
   {projects.map((p,i)=><Reveal key={p.slug} delay={i*90} className="h-full"><Card interactive className="flex h-full flex-col"><Link href={`/projects/${p.slug}/`} className="group/project-image mb-4 block aspect-[460/215] overflow-hidden rounded-2xl bg-section focus-ring"><img src={p.heroImage} alt={`${p.title} project artwork`} className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover/project-image:-translate-y-1 motion-safe:group-hover/project-image:scale-[1.06] motion-safe:group-focus-visible/project-image:-translate-y-1 motion-safe:group-focus-visible/project-image:scale-[1.06]"/></Link><Heading className="text-xl font-bold text-primary">{p.title}</Heading><p className="mt-2 text-sm text-secondary">{p.shortDescription}</p><PlatformBadges platforms={p.platforms} className="mt-4"/><Link className="group/view focus-ring mt-auto inline-flex w-fit items-center gap-1 rounded-sm pt-4 text-sm font-semibold text-cyan transition hover:text-cyanHover" href={`/projects/${p.slug}/`}>View project <span aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover/view:translate-x-1 motion-safe:group-focus-visible/view:translate-x-1">→</span></Link></Card></Reveal>)}
  </div>
  <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted">Platform references describe QA coverage or testing exposure where applicable and do not necessarily indicate public release availability on every platform.</p>
 </>;
}
export function SkillsGrid({headingLevel=3}:{headingLevel?:2|3}){const Heading=headingLevel===2?'h2':'h3';return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map((g,i)=><Reveal key={g.title} delay={i*70} className="h-full"><Card interactive className="h-full"><Heading className="text-xl font-bold text-primary">{g.title}</Heading><div className="mt-4 flex flex-wrap gap-2">{g.items.map(item=><Badge key={item}>{item}</Badge>)}</div></Card></Reveal>)}</div>}
export function CaseStudyGrid(){return <div className="grid gap-6 md:grid-cols-2">{caseStudies.map((caseStudy,i)=><Reveal key={caseStudy.slug} delay={i*70} className={`h-full ${i===0?'md:col-span-2':''}`}><CaseStudyCard caseStudy={caseStudy}/></Reveal>)}</div>}
export function CertificationGrid(){return <div className="grid gap-6 md:grid-cols-3">{certifications.map((c,i)=><Reveal key={c.title} delay={i*70} className="h-full"><Card interactive className="h-full"><p className="text-xs uppercase tracking-[.25em] text-cyan">{c.status}</p><h2 className="mt-3 text-xl font-bold text-primary">{c.title}</h2><p className="mt-1 text-sm text-muted">{c.issuer}</p><p className="mt-4 text-secondary">{c.description}</p></Card></Reveal>)}</div>}
function ExperienceTimeline(){return <section className="border-b border-line bg-section/40 py-10 sm:py-12"><Container><Reveal><p className="text-sm font-semibold uppercase tracking-[.3em] text-cyan">Experience</p><h2 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">A decade in QA across games, DevQA and enterprise software</h2><p className="mt-3 max-w-3xl text-secondary">Where the 10+ years and 100+ titles come from: high-volume Game QA, project-based QA collaborations, embedded DevQA and enterprise software testing.</p></Reveal><div className="mt-7 grid gap-5 md:grid-cols-3">{timeline.map((t,i)=><Reveal key={t.org} delay={i*80} className="h-full"><Card interactive className="h-full"><p className="text-sm font-semibold text-cyan">{t.period}</p><h3 className="mt-2 text-lg font-bold text-primary">{t.org}</h3><p className="text-sm font-medium text-secondary">{t.title}</p><p className="mt-3 text-sm leading-relaxed text-secondary">{t.detail}</p></Card></Reveal>)}</div></Container></section>}
function BeyondGameQaTeaser(){return <section className="border-t border-line py-8 sm:py-10"><Container><Reveal><Card className="flex flex-col gap-5 !p-5 sm:flex-row sm:items-center sm:justify-between sm:!p-6"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.25em] text-cyan">Software QA</p><h2 className="mt-2 text-2xl font-bold text-primary">Software QA experience</h2><p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">My Software QA work covers UAT, regression, requirements validation, SQL-based checks, test documentation, defect analysis and stakeholder-facing quality support across enterprise, finance and banking environments.</p></div><Link className="group/view focus-ring inline-flex shrink-0 items-center gap-1 rounded-sm font-semibold text-cyan transition hover:text-cyanHover" href="/beyond-game-qa/">View Software QA experience <span aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover/view:translate-x-1 motion-safe:group-focus-visible/view:translate-x-1">→</span></Link></Card></Reveal></Container></section>}
function CaseStudiesTeaser(){return <section id="case-studies" className="scroll-mt-20 border-t border-line py-12 sm:py-14"><Container><Reveal><h2 className="text-3xl font-bold text-primary">QA Case Studies</h2><p className="mb-7 mt-3 max-w-3xl text-secondary">Methodology pieces and applied exercises showing how I approach gameplay validation, regression risk, live monitoring, player guidance and progression analysis. These are not disclosures of confidential project work.</p></Reveal><div className="grid gap-6 md:grid-cols-3">{caseStudies.slice(0,3).map((caseStudy,i)=><Reveal key={caseStudy.slug} delay={i*90} className="h-full"><CaseStudyCard caseStudy={caseStudy} compact headingLevel={3}/></Reveal>)}</div><Reveal><div className="mt-7"><Link className="group/all focus-ring inline-flex items-center gap-1 rounded-sm font-semibold text-cyan transition hover:text-cyanHover" href="/case-studies/">View all case studies <span aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover/all:translate-x-1 motion-safe:group-focus-visible/all:translate-x-1">→</span></Link></div></Reveal></Container></section>}
export function Home(){
 return <>
  <section className="relative isolate flex min-h-[560px] items-center overflow-hidden border-b border-line py-20 sm:min-h-[600px]">
   <div className="pointer-events-none absolute inset-0 -z-30 bg-ink" aria-hidden="true">
    <img src="/videos/portfolio-trailer-poster.webp" alt="" className="hero-poster h-full w-full object-cover object-[58%_center]"/>
    <HeroVideo/>
   </div>
   <div className="hero-overlay-primary pointer-events-none absolute inset-0 -z-20" aria-hidden="true"/>
   <div className="hero-overlay-secondary pointer-events-none absolute inset-0 -z-20" aria-hidden="true"/>
   <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden="true"/>
   <Container>
    <div className="max-w-[760px]">
     <div aria-hidden="true" className="hero-accent mb-6 h-[3px] w-14 rounded-full bg-cyan shadow-[0_0_18px_rgb(var(--accent)/0.65)]"/>
     <p className="hero-in hero-copy-shadow max-w-full break-words text-xs font-semibold uppercase leading-relaxed tracking-[.22em] text-heroAccent sm:text-sm sm:tracking-[.3em]">Game QA · DevQA · Software QA Consultant</p>
     <h1 className="hero-in d1 hero-title-shadow mt-4 max-w-full text-4xl font-black tracking-tight text-heroPrimary sm:text-6xl lg:text-7xl">Senior Game QA / DevQA Analyst.</h1>
     <p className="hero-in d2 hero-copy-shadow mt-6 text-base leading-relaxed text-heroSecondary sm:text-xl">I help teams validate gameplay systems, reduce release risk, and ship more reliable player experiences across PC, console and live game environments.</p>
     <p className="hero-in d2 hero-copy-shadow mt-4 text-base leading-relaxed text-heroSecondary sm:text-lg">10+ years across Game QA, DevQA and Software QA, with contributions to 100+ game titles/projects across AAA and indie productions. Featured projects are recent, publicly attributable examples of my work. Additional experience remains unlisted because of NDA, outsourcing structures or crediting limitations.</p>
     <div className="hero-in d2 mt-8 flex flex-wrap gap-3 sm:gap-4">
      <Button href="/projects/">View Projects</Button>
      <Button href={publicCvPath} variant="secondary" download={publicCvDownloadName}>Download CV</Button>
      <Button href="/contact/" variant="secondary">Contact Marco</Button>
     </div>
    </div>
   </Container>
  </section>
  <ExperienceTimeline/>
  <section id="projects" className="section-glow scroll-mt-20 py-12 sm:py-14">
   <Container>
    <Reveal>
     <h2 className="text-3xl font-bold text-primary">Recent Game QA Projects</h2>
     <p className="mb-7 mt-3 max-w-3xl text-secondary">A selection of recent game QA projects covering embedded QA, structured playtesting, regression, usability, progression, multiplayer flows, and release validation.</p>
    </Reveal>
    <ProjectGrid/>
   </Container>
  </section>
  <CaseStudiesTeaser/>
  <BeyondGameQaTeaser/>
  <section id="about-contact" className="scroll-mt-20 border-t border-line bg-section/60 py-12 sm:py-14">
   <Container>
    <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-stretch">
     <Reveal className="py-2">
      <p className="text-sm font-semibold uppercase tracking-[.3em] text-cyan">About</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">QA depth with a player-focused mindset.</h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary">I combine a decade of Game QA, DevQA and Software QA practice with clear defect communication, structured test thinking, and practical collaboration across development teams. My work focuses on reliable evidence, player impact, and release-ready decisions.</p>
      <div className="mt-7"><Button href="/about/" variant="secondary">About Marco</Button></div>
     </Reveal>
     <Reveal delay={120} className="h-full">
      <Card interactive className="flex h-full flex-col items-start justify-between">
       <div>
        <p className="text-sm font-semibold uppercase tracking-[.3em] text-cyan">Contact</p>
        <h3 className="mt-4 text-2xl font-bold text-primary">Available for studios, publishers, QA partners, and long-term roles.</h3>
        <p className="mt-4 text-sm leading-relaxed text-secondary">Public CV version available for recruiters and hiring teams.</p>
       </div>
       <div className="mt-8 flex flex-wrap gap-3"><Button href="/contact/">Contact Marco</Button><Button href={publicCvPath} variant="secondary" download={publicCvDownloadName}>Download CV</Button></div>
      </Card>
     </Reveal>
    </div>
   </Container>
  </section>
 </>;
}
export function Timeline(){return <div className="space-y-5">{timeline.map((t,i)=><Reveal key={t.org} delay={i*80}><Card interactive><div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"><h3 className="text-xl font-bold text-primary">{t.org}</h3><p className="text-sm font-semibold text-cyan">{t.period}</p></div><p className="mt-1 font-medium text-secondary">{t.title}</p><p className="mt-2 text-secondary">{t.detail}</p></Card></Reveal>)}</div>}
