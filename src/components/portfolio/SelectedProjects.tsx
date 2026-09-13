import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

const contributions: Record<string, {role: string; focus: string; description: string}> = {
 'runescape-dragonwilds': {
  role: 'Embedded DevQA', focus: 'Feature validation · Multiplayer · Regression',
  description: 'I follow gameplay features through changing builds, investigate player-facing issues and give developers reproducible evidence from development through release.'
 },
 possessors: {
  role: 'Gameplay QA & structured playtesting', focus: 'Full progression · Combat & traversal · Steam Deck',
  description: 'Testing the complete player journey, connecting progression, combat and traversal observations to clear reports and follow-up checks.'
 },
 'dont-stop-girlypop': {
  role: 'Gameplay QA & UX playtesting', focus: 'Onboarding · Controller usability · GUESS-18',
  description: 'Comparing controller and keyboard flows to assess onboarding, required actions and how clearly the game teaches its core loop.'
 }
};

export function SelectedProjects() {
 const [featured, ...supporting] = projects;
 return <div className="selected-projects">
  <article className="featured-project">
   <div className="featured-art">
    <img src="/videos/portfolio-trailer-poster.webp" alt="Two adventurers watch a dragon fly over the forests of Ashenfall in RuneScape: Dragonwilds." width={1280} height={720} fetchPriority="high"/>
    <img src={featured.logo} alt="" width={525} height={140} className="featured-logo"/>
   </div>
   <div className="featured-copy">
    <p className="eyebrow">Featured work <span aria-hidden="true">/</span> 2025–present</p>
    <h3><Link href={`/projects/${featured.slug}/`} className="focus-ring">RuneScape:<br/>{' '}Dragonwilds</Link></h3>
    <p className="project-role">Embedded DevQA via DAQA</p>
    <p className="project-description">{contributions[featured.slug].description}</p>
    <p className="project-focus">{contributions[featured.slug].focus}</p>
    <Link className="project-action focus-ring" href={`/projects/${featured.slug}/`}>Explore my contribution <ArrowUpRight size={18} aria-hidden="true"/></Link>
    <p className="project-attribution">Developed & published by Jagex · QA via DAQA</p>
   </div>
  </article>
  <div className="supporting-projects">
   {supporting.map(project => <article className="supporting-project" key={project.slug}>
    <Link href={`/projects/${project.slug}/`} className="supporting-art focus-ring" aria-label={`View ${project.title} contribution`}>
     <img src={project.heroImage} alt={`${project.title} official artwork`} width={460} height={215} loading="lazy"/>
    </Link>
    <div className="supporting-copy">
     <p className="eyebrow">{contributions[project.slug].role}</p>
     <h3><Link className="focus-ring" href={`/projects/${project.slug}/`}>{project.title}<ArrowUpRight size={22} aria-hidden="true"/></Link></h3>
     <p className="project-description">{contributions[project.slug].description}</p>
     <p className="project-focus">{contributions[project.slug].focus}</p>
     <p className="project-attribution">{project.attribution} · QA via DAQA</p>
    </div>
   </article>)}
  </div>
 </div>;
}
