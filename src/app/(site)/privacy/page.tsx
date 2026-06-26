import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { PageHeader } from '@/components/sections';
import { Reveal } from '@/components/motion/Reveal';
import { pageMeta } from '@/lib/site';

export const metadata: Metadata = pageMeta({
 title: 'Privacy & Cookie Notice',
 description: 'Privacy and storage information for the Marco Labate QA portfolio.',
 path: '/privacy/'
});

const privacyItems=[
 {
  title:'Cookies and tracking',
  body:'This site does not set first-party cookies and does not use analytics, advertising cookies, profiling cookies, tracking pixels or behavioral tracking.'
 },
 {
  title:'Theme preference',
  body:'The site uses localStorage only to remember the selected light or dark theme. The stored value is limited to the theme preference and is not used to identify visitors or track browsing activity.'
 },
 {
  title:'YouTube trailers',
  body:'Trailer previews are either served locally or, where an official YouTube thumbnail is used as public reference material, loaded from YouTube’s image servers. A YouTube video iframe is inserted only after you select “Load video,” using a privacy-enhanced youtube-nocookie.com player. YouTube or Google may then process technical data under their own policies.'
 },
 {
  title:'External links and hosting',
  body:'Official project, LinkedIn and other third-party sites are contacted only when you follow their links. The hosting provider may process standard technical request logs, such as IP address, browser information and request time, to deliver and secure the site.'
 }
];

export default function Privacy(){
 return <>
  <PageHeader eyebrow="Privacy" title="Privacy & Cookie Notice">
   <p>This portfolio is designed to minimize data collection and avoid unnecessary tracking technologies.</p>
   <p className="mt-3 text-sm text-muted">Last updated: June 2026</p>
  </PageHeader>
  <section className="py-12 sm:py-16">
   <Container>
    <div className="grid gap-6 md:grid-cols-2">
     {privacyItems.map((item,index)=><Reveal key={item.title} delay={index*70} className="h-full"><Card className="h-full"><h2 className="text-2xl font-bold text-primary">{item.title}</h2><p className="mt-4 leading-relaxed text-secondary">{item.body}</p></Card></Reveal>)}
    </div>
    <Reveal>
     <p className="mt-8 rounded-2xl border border-line bg-section p-5 text-sm leading-relaxed text-muted">Because no non-essential storage or tracking runs before interaction, this site does not display a cookie consent banner. This notice will be updated if analytics, advertising, embedded widgets or other third-party services are added later.</p>
    </Reveal>
   </Container>
  </section>
 </>;
}
