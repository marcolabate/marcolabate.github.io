import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects, getProject, projectStories } from '@/data/projects';
import { pageMeta } from '@/lib/site';
import { Container } from '@/components/ui/Container';
import { investigationPath } from '@/components/portfolio/InvestigationPreview';
import { OfficialLinks } from '@/components/ui/Platforms';
import { YouTubeTrailer } from '@/components/video/YouTubeTrailer';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params; const p=getProject(slug);
 return p ? pageMeta({title:`${p.title} | My QA Contribution`,description:p.shortDescription,path:`/projects/${slug}/`,ogImage:p.heroImage}) : {};
}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=getProject(slug); if(!p)notFound();
 const story=projectStories[p.slug]; const idx=projects.findIndex(x=>x.slug===p.slug);
 const next=projects[(idx+1)%projects.length];
 return <Container>
  <Link className="text-link back-link" href="/selected-work/"><ArrowLeft size={16} aria-hidden="true"/>All work</Link>
  <header className="project-intro">
   <div><p className="eyebrow">{p.role} · via DAQA</p><h1>{p.title}</h1><p className="context">{p.gameDescription}</p><p className="project-attribution">{p.attribution}</p></div>
   <img className="project-intro-art" src={p.heroImage} width={460} height={215} alt={`${p.title} official artwork`}/>
  </header>
  <dl className="engagement-facts">{p.engagementFacts?.filter(fact=>['Engagement','Period','QA partner','Credit status'].includes(fact.label)).map(fact=><div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
  <section className="contribution-section" aria-labelledby="contribution-title"><h2 id="contribution-title">My contribution</h2><div className="contribution-points">{story.contribution.map(item=><div key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>)}</div></section>
  {story.observations?.length ? <section className="contribution-section" aria-labelledby="observations-title"><div><p className="eyebrow">Reported focus areas</p><h2 id="observations-title" className="mt-3">{story.observationsTitle}</h2></div><div><ul className="contribution-list">{story.observations.map(item=><li key={item}>{item}</li>)}</ul><p className="outcome-note">{story.outcomeNote}</p></div></section> : null}
  {story.recommendations?.length ? <section className="contribution-section" aria-labelledby="recommendations-title"><div><p className="eyebrow">Proposed recommendations</p><h2 id="recommendations-title" className="mt-3">Suggestions for review</h2></div><div><ul className="contribution-list">{story.recommendations.map(item=><li key={item}>{item}</li>)}</ul><p className="outcome-note">These are recommendations from the QA feedback, not confirmed changes or measured results.</p></div></section> : null}
  <aside className="project-practice"><p className="eyebrow">Independent QA practice · Fictional example</p><h2>From an observation to an actionable report.</h2><p>The save/reload exercise shows how I would document conditions, compare states, explain player impact and propose regression coverage. It is separate from my work on {p.title}.</p><Link className="text-link" href={`${investigationPath}#example-finding`}>Read the fictional investigation <ArrowRight size={17} aria-hidden="true"/></Link></aside>
  <details className="details-section"><summary>Coverage and reporting methods</summary><div className="details-content"><div><h3>Areas tested</h3><ul>{p.exampleAreasTested.map(item=><li key={item}>{item}</li>)}</ul></div><div><h3>Methods and tools</h3><ul>{p.technologies.map(item=><li key={item}>{item}</li>)}</ul></div><div><h3>Testing approach</h3><ul>{p.lessonsLearned.map(item=><li key={item}>{item}</li>)}</ul></div><div><h3>Platform coverage</h3><p className="text-secondary">{p.qaSupportSummary}</p><p className="mt-3 text-sm text-muted">{p.coverageCaveat}</p></div></div></details>
  <section className="project-context" aria-labelledby="game-context"><h2 id="game-context">Explore the game</h2><OfficialLinks website={p.officialWebsite} links={p.officialLinks}/>{p.trailer&&<details className="details-section"><summary>Official trailer</summary><div className="max-w-3xl"><YouTubeTrailer youtubeId={p.trailer.youtubeId} title={p.trailer.title} thumbnailSrc={p.trailer.thumbnailSrc}/></div></details>}<p className="mt-5 text-sm">{p.confidentialityNote}</p></section>
  <nav className="project-bottom-nav" aria-label="Project navigation"><Link className="text-link" href="/selected-work/"><ArrowLeft size={16} aria-hidden="true"/>All work & QA practice</Link><Link className="text-link" href={`/projects/${next.slug}/`}>{next.title}<ArrowUpRight size={17} aria-hidden="true"/></Link><Link className="text-link" href="/contact/">Discuss a QA opportunity<ArrowRight size={17} aria-hidden="true"/></Link></nav>
 </Container>;
}
