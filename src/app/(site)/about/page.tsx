import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { PageHeader, SkillsGrid, Timeline } from '@/components/sections';
import { Reveal } from '@/components/motion/Reveal';
import { Badge } from '@/components/ui/Badge';
import { pageMeta } from '@/lib/site';

export const metadata: Metadata = pageMeta({
 title: 'About',
 description: 'Marco Labate, Senior Game QA / DevQA Analyst and Software QA Consultant with 10+ years across Game QA, DevQA, UAT and SQL-based software validation.',
 path: '/about/'
});

export default function About(){
 return <>
  <PageHeader eyebrow="About" title="Senior QA Analyst with 10+ years across Game QA, DevQA, UAT and SQL-based software validation.">
   <p>I'm Marco Labate, a Senior Game QA / DevQA Analyst and Software QA Consultant with 10+ years across PC, console and enterprise software testing.</p>
  </PageHeader>
  <section className="py-16">
   <Container>
    <Reveal>
     <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-secondary">
      <p>I combine structured testing discipline with player-focused observation, risk-based coverage and reproducible evidence. My work spans DevQA, gameplay QA, structured playtesting, regression, live monitoring, UAT, SQL-based validation and defect analysis across game and enterprise software environments.</p>
      <p>I approach games both as a tester and as a player. A good bug report should be actionable, but good QA also explains why an issue matters inside the real experience: controls, pacing, progression, feedback, clarity and player trust.</p>
     </div>
    </Reveal>

    <Reveal className="mt-12">
     <h2 className="text-3xl font-bold text-primary">Professional timeline</h2>
     <p className="mt-3 max-w-3xl leading-relaxed text-secondary">Where the 10+ years and 100+ game titles/projects come from. Recent featured projects are credited under DAQA; earlier high-volume outsourced work spans many titles not individually listed here.</p>
    </Reveal>
    <div className="mt-6 max-w-3xl"><Timeline/></div>

    <div className="mt-12 grid gap-8 lg:grid-cols-2">
     <Reveal className="h-full"><Card interactive className="h-full"><h2 className="text-2xl font-bold text-primary">Who I am</h2><p className="mt-4 leading-relaxed text-secondary">QA professional with experience across Game QA, DevQA, software testing, UAT and SQL-based validation. I work best where practical testing, clear reporting and product understanding meet.</p></Card></Reveal>
     <Reveal delay={80} className="h-full"><Card interactive className="h-full"><h2 className="text-2xl font-bold text-primary">How I test</h2><p className="mt-4 leading-relaxed text-secondary">I combine structured coverage with exploratory observation. I focus on reproducible evidence, regression risk, feature validation, UI clarity, progression flow and player-impacting issues.</p></Card></Reveal>
     <Reveal delay={160} className="h-full"><Card interactive className="h-full"><h2 className="text-2xl font-bold text-primary">Why games matter</h2><p className="mt-4 leading-relaxed text-secondary">Game QA requires game literacy. Understanding progression, combat feel, readability, onboarding, systems friction and long-term engagement makes testing sharper and more useful.</p></Card></Reveal>
     <Reveal delay={240} className="h-full"><Card interactive className="h-full"><h2 className="text-2xl font-bold text-primary">Software QA mindset</h2><p className="mt-4 leading-relaxed text-secondary">My software QA work strengthens my game QA practice: requirements validation, test case design, UAT, SQL checks, XML validation, logs, workflow states and defect lifecycle management.</p></Card></Reveal>
    </div>

    <Reveal><h2 className="mt-16 text-3xl font-bold text-primary">Tools and technologies</h2></Reveal>
    <div className="mt-8"><SkillsGrid/></div>

    <Reveal className="mt-16"><h2 className="text-2xl font-bold text-primary">Game literacy and design interests</h2><p className="mt-3 max-w-3xl leading-relaxed text-secondary">Beyond credited work, broad play experience informs how I evaluate player expectations, usability, pacing, onboarding, genre conventions, readability, combat feedback, multiplayer friction and player-facing quality.</p></Reveal>
    <div className="mt-6 grid gap-5 lg:grid-cols-2">
     <Reveal className="h-full"><Card interactive className="h-full"><h3 className="text-xl font-bold text-primary">Live worlds and long-term systems</h3><p className="mt-3 text-sm leading-relaxed text-secondary">MMOs and live games shaped the way I look at progression, onboarding, recurring content, player routines, social friction and long-term quality.</p><div className="mt-4 flex flex-wrap gap-2"><Badge>Final Fantasy XIV</Badge><Badge>World of Warcraft</Badge><Badge>No Man's Sky</Badge></div></Card></Reveal>
     <Reveal delay={80} className="h-full"><Card interactive className="h-full"><h3 className="text-xl font-bold text-primary">Story, characters and emotional impact</h3><p className="mt-3 text-sm leading-relaxed text-secondary">Narrative-heavy games shaped my attention to tone, character motivation, pacing, memorable moments and the way players emotionally attach to a world.</p><div className="mt-4 flex flex-wrap gap-2"><Badge>Kingdom Hearts</Badge><Badge>Final Fantasy VIII</Badge><Badge>Final Fantasy IX</Badge><Badge>Final Fantasy VI</Badge><Badge>Red Dead Redemption</Badge></div></Card></Reveal>
     <Reveal delay={160} className="h-full"><Card interactive className="h-full"><h3 className="text-xl font-bold text-primary">Visual identity and atmosphere</h3><p className="mt-3 text-sm leading-relaxed text-secondary">Strong art direction and atmosphere influence how I look at readability, composition, mood, visual feedback and whether a game world feels coherent.</p><div className="mt-4 flex flex-wrap gap-2"><Badge>Okami</Badge><Badge>El Shaddai: Ascension of the Metatron</Badge><Badge>The Elder Scrolls V: Skyrim</Badge><Badge>Tomba! 2</Badge></div></Card></Reveal>
     <Reveal delay={240} className="h-full"><Card interactive className="h-full"><h3 className="text-xl font-bold text-primary">Combat, systems and multiplayer feel</h3><p className="mt-3 text-sm leading-relaxed text-secondary">System-driven games shaped how I look at combat readability, feedback, balance, friction, encounter flow, multiplayer clarity and mechanical consistency.</p><div className="mt-4 flex flex-wrap gap-2"><Badge>For Honor</Badge><Badge>Team Fortress 2</Badge><Badge>Elden Ring</Badge><Badge>Vampire Survivors</Badge><Badge>Civilization V</Badge><Badge>Final Fantasy XIII</Badge><Badge>Enslaved: Odyssey to the West</Badge><Badge>Star Fox Adventures</Badge></div></Card></Reveal>
    </div>
   </Container>
  </section>
 </>;
}
