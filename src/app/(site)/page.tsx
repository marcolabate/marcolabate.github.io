import Link from 'next/link';
import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SelectedProjects } from '@/components/portfolio/SelectedProjects';
import { InvestigationPreview } from '@/components/portfolio/InvestigationPreview';
import { ContactStrip } from '@/components/portfolio/ContactStrip';
import { publicCvDownloadName, publicCvPath } from '@/lib/site';

export default function Home() {
 return <Container>
  <section className="home-intro" aria-labelledby="intro-name">
   <div><p className="eyebrow">Game QA · Embedded DevQA</p><h1 id="intro-name">Marco Labate<span className="name-dot">.</span></h1><p className="intro-role">Senior Game QA Analyst</p></div>
   <div className="intro-value"><p>I help development teams understand what breaks, why it matters to players and what to check next.</p><div className="intro-actions"><a className="button button-primary focus-ring" href="#work">View My Work <ArrowDown size={17} aria-hidden="true"/></a><a className="text-link" href={publicCvPath} download={publicCvDownloadName}><Download size={16} aria-hidden="true"/>Download CV</a></div></div>
  </section>
  <p className="credibility-line"><span>10+ years in QA</span><span>100+ game projects</span><Link href="/about/#certifications" className="focus-ring">ISTQB® CTFL & Game Quality certified</Link></p>
  <section id="work" className="home-work" aria-labelledby="work-title">
   <div className="section-heading"><h2 id="work-title">Selected work</h2><Link className="text-link" href="/selected-work/">All work & QA practice <ArrowRight size={17} aria-hidden="true"/></Link></div>
   <SelectedProjects/>
  </section>
  <InvestigationPreview/>
  <section className="background-strip" aria-labelledby="background-title"><div><p className="eyebrow">Background</p><h2 id="background-title">Games, people<br/>and the systems behind them.</h2></div><div><p className="section-copy">My experience spans game testing at Keywords Studios, embedded development support through DAQA and enterprise software consulting. I bring the same attention to evidence and communication to each team.</p><div className="background-links"><Link className="text-link" href="/about/">About me <ArrowRight size={17} aria-hidden="true"/></Link><Link className="text-link" href="/beyond-game-qa/">Software QA experience <ArrowRight size={17} aria-hidden="true"/></Link></div></div></section>
  <ContactStrip/>
 </Container>;
}
