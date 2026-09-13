import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { PageHeader, SkillsGrid, Timeline, CertificationGrid } from '@/components/sections';
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
  <PageHeader eyebrow="About" title="A tester, a player, a teammate.">
   <p>I'm a Senior Game QA / Embedded DevQA Analyst with 10+ years in QA. I currently support RuneScape: Dragonwilds with Jagex via DAQA, working remotely from Italy.</p>
  </PageHeader>
  <section className="py-16">
   <Container>
    <Reveal>
     <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-secondary">
      <p>I work with evolving features: understanding the intended experience, exploring what players might do differently, and checking how changes affect connected systems. I share reproducible evidence, blockers and uncertainty with QA, production and developers so the team can act while there is still time to adjust.</p>
      <p className="border-l-2 border-cyan pl-5 font-medium text-primary">I approach games both as a tester and as a player. A good bug report should be actionable, but good QA also explains why an issue matters inside the real experience: controls, pacing, progression, feedback, clarity and player trust.</p>
     </div>
    </Reveal>

    <Reveal className="mt-12">
     <h2 id="career" className="text-3xl font-bold text-primary">Professional timeline</h2>
     <p className="mt-3 max-w-3xl leading-relaxed text-secondary">Where the 10+ years and 100+ game titles/projects come from. Recent featured projects are credited under DAQA; earlier high-volume outsourced work spans many titles not individually listed here.</p>
    </Reveal>
    <div className="mt-6 max-w-3xl"><Timeline/></div><p className="mt-6 max-w-3xl text-secondary">Earlier experience: 2010–2019, Italian localization and LQA for Valve, Digital Extremes and Phoenix Labs, including Steam, Team Fortress 2, Counter-Strike: Global Offensive, Dota 2, Warframe and Dauntless.</p>

    <div className="mt-12 grid gap-8 lg:grid-cols-2">
     <Reveal className="h-full"><Card interactive className="h-full"><h2 className="text-2xl font-bold text-primary">Who I am</h2><p className="mt-4 leading-relaxed text-secondary">My background spans large-scale outsourced game testing, localization, embedded development support and enterprise systems. That range helps me connect a player-facing symptom to the workflow or state behind it.</p></Card></Reveal>
     <Reveal delay={80} className="h-full"><Card interactive className="h-full"><h2 className="text-2xl font-bold text-primary">How I test</h2><p className="mt-4 leading-relaxed text-secondary">I establish the intended path, then vary action order, interrupt transitions and revisit earlier states. When a fix lands, I repeat the original reproduction and check connected flows for side effects.</p></Card></Reveal>
     <Reveal delay={160} className="h-full"><Card interactive className="h-full"><h2 className="text-2xl font-bold text-primary">Why games matter</h2><p className="mt-4 leading-relaxed text-secondary">Game QA requires game literacy. Understanding progression, combat feel, readability, onboarding, systems friction and long-term engagement makes testing sharper and more useful.</p></Card></Reveal>
     <Reveal delay={240} className="h-full"><Card interactive className="h-full"><h2 className="text-2xl font-bold text-primary">Software QA mindset</h2><p className="mt-4 leading-relaxed text-secondary">My software QA work strengthens my game QA practice: requirements validation, test case design, UAT, SQL checks, XML validation, logs, workflow states and defect lifecycle management.</p></Card></Reveal>
    </div>

    <section id="certifications" className="mt-16"><h2 className="text-3xl font-bold text-primary">Certifications</h2><div className="mt-6"><CertificationGrid/></div></section>
    <Reveal><h2 id="skills" className="mt-16 text-3xl font-bold text-primary">Tools and technologies</h2></Reveal>
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
