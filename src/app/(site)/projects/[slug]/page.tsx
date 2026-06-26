import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/data/projects';
import { pageMeta } from '@/lib/site';
import type { ProjectSectionKey } from '@/types/project';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { PlatformBadges, OfficialLinks } from '@/components/ui/Platforms';
import { Reveal } from '@/components/motion/Reveal';
import { ProjectTrailer } from '@/components/projects/ProjectTrailer';
import { ProjectMetrics } from '@/components/projects/ProjectMetrics';
import { TrailerThumbnail } from '@/components/projects/TrailerThumbnail';

const defaultSectionOrder: ProjectSectionKey[] = ['responsibilities','testingActivities','exampleAreasTested','challenges','lessonsLearned','technologies'];
const defaultSectionTitles: Record<ProjectSectionKey,string> = {
 responsibilities:'Role and responsibilities',
 testingActivities:'Testing activities',
 exampleAreasTested:'Example areas tested',
 representativeFindings:'Representative findings',
 recommendations:'Recommendations',
 challenges:'Challenges',
 technologies:'Technologies involved',
 lessonsLearned:'Lessons learned'
};

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const p=getProject(slug);
 if(!p)return {};
 return pageMeta({title:`${p.title}: Game QA`,description:p.shortDescription,path:`/projects/${slug}/`,ogImage:p.heroImage});
}

function List({title,items,lead}:{title:string;items:string[];lead?:string}){return <Card interactive className="h-full"><h2 className="text-2xl font-bold text-primary">{title}</h2>{lead&&<p className="mt-3 font-semibold text-cyan">{lead}</p>}<ul className="mt-4 list-disc space-y-2 pl-5 text-secondary marker:text-cyan">{items.map(i=><li key={i}>{i}</li>)}</ul></Card>}

export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const p=getProject(slug);
 if(!p)notFound();
 const idx=projects.findIndex(x=>x.slug===p.slug);
 const prevProject=idx>0?projects[idx-1]:null;
 const nextProject=idx<projects.length-1?projects[idx+1]:null;
 const sectionItems:Record<ProjectSectionKey,string[]> = {
  responsibilities:p.responsibilities,
  testingActivities:p.testingActivities,
  exampleAreasTested:p.exampleAreasTested,
  representativeFindings:p.representativeFindings??[],
  recommendations:p.recommendations??[],
  challenges:p.challenges,
  technologies:p.technologies,
  lessonsLearned:p.lessonsLearned
 };
 const sectionOrder=p.sectionOrder??defaultSectionOrder;
 return <>
  <section className="relative flex min-h-[300px] items-center overflow-hidden border-b border-line py-14 text-heroPrimary sm:min-h-[400px] sm:py-20">
   {p.trailer&&<TrailerThumbnail src={p.trailer.thumbnailSrc} priority className="project-hero-media absolute inset-0 h-full w-full object-cover"/>}
   <div className="project-hero-overlay absolute inset-0"/>
   <Container className="relative" >
    <div className="hero-in max-w-full" data-project={p.slug}><img src={p.logo} alt={`${p.title} logo`} loading="eager" fetchPriority="high" className="project-logo project-hero-logo"/></div>
    <h1 className="sr-only">{p.title}</h1>
    {p.attribution&&<p className="hero-in d1 mt-2 text-lg font-medium text-heroAccent">{p.attribution}</p>}
    <p className="hero-in d2 hero-copy-shadow mt-5 max-w-3xl text-lg text-heroSecondary sm:text-xl">{p.subtitle}</p>
   </Container>
  </section>
  {p.engagementFacts?.length&&<section className="pt-8 sm:pt-10">
   <Container>
    <Reveal>
     <Card className="!p-6 sm:!p-7">
      <h2 className="text-sm font-semibold uppercase tracking-[.25em] text-cyan">Engagement at a glance</h2>
      <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
       {p.engagementFacts.map(fact=><div key={fact.label}><dt className="text-xs font-semibold uppercase tracking-wide text-muted">{fact.label}</dt><dd className="mt-1 text-sm leading-relaxed text-secondary">{fact.value}</dd></div>)}
      </dl>
      {p.coverageCaveat&&<p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">{p.coverageCaveat}</p>}
     </Card>
    </Reveal>
   </Container>
  </section>}
  <section className="relative overflow-hidden py-10 sm:py-12">
   {p.trailer&&<TrailerThumbnail src={p.trailer.thumbnailSrc} className="project-content-media pointer-events-none absolute inset-0 h-full w-full object-cover"/>}
   <div className="project-media-overlay absolute inset-0"/>
   <Container className="relative">
    <Reveal>
     <Card className="!p-6 sm:!p-8">
      <div className={p.trailer?'grid items-start lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]':'block'}>
       <div className={p.trailer?'lg:pr-8':''}>
        <p className="text-sm uppercase tracking-[.3em] text-cyan">Overview</p>
        {p.gameDescription&&<div className="mt-4"><h2 className="text-sm font-semibold text-primary">Game description</h2><p className="mt-2 text-sm leading-relaxed text-secondary">{p.gameDescription}</p></div>}
        <div className="mt-5"><h2 className="text-sm font-semibold text-primary">QA Contribution</h2><p className="mt-2 text-lg text-secondary">{p.summary}</p></div>
        {(p.platforms?.length||p.officialWebsite||p.officialLinks?.length)&&<div className="mt-7 border-t border-line pt-6">
         <p className="text-xs font-semibold uppercase tracking-[.25em] text-cyan">QA coverage areas</p>
         {p.qaSupportSummary&&<p className="mt-3 text-sm text-secondary">{p.qaSupportSummary}</p>}
         <PlatformBadges platforms={p.platforms} className="mt-4"/>
         <OfficialLinks website={p.officialWebsite} links={p.officialLinks} className="mt-6"/>
        </div>}
       </div>
       {p.trailer&&<ProjectTrailer trailer={p.trailer}/>}
      </div>
     </Card>
    </Reveal>
   </Container>
  </section>
  <ProjectMetrics projectTitle={p.title} metrics={p.publicMetrics}/>
  <section className="pb-16 pt-4 sm:pt-6">
   <Container>
    <div className="grid gap-6 lg:grid-cols-2">
     {sectionOrder.map((section,i)=>sectionItems[section].length>0&&<Reveal key={section} delay={i*80} className="h-full"><List title={p.sectionTitles?.[section]??defaultSectionTitles[section]} items={sectionItems[section]} lead={section==='responsibilities'&&p.showRoleInResponsibilities?p.role:undefined}/></Reveal>)}
    </div>
    <Reveal><p className="mt-8 rounded-2xl border border-line bg-section p-5 text-sm text-muted">{p.confidentialityNote}</p></Reveal>
    <Reveal className="mt-10">
     <nav aria-label="Project navigation" className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
      <Link href="/projects/" className="group/back focus-ring inline-flex items-center gap-1 rounded-sm font-semibold text-cyan transition hover:text-cyanHover"><span aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover/back:-translate-x-1">←</span> Back to projects</Link>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
       {prevProject&&<Link href={`/projects/${prevProject.slug}/`} className="focus-ring rounded-sm text-secondary transition hover:text-primary"><span aria-hidden="true">← </span>{prevProject.title}</Link>}
       {nextProject&&<Link href={`/projects/${nextProject.slug}/`} className="focus-ring rounded-sm text-secondary transition hover:text-primary">{nextProject.title}<span aria-hidden="true"> →</span></Link>}
      </div>
     </nav>
    </Reveal>
   </Container>
  </section>
 </>
}
