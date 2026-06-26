import type { Metadata } from 'next';
import { FileText, Link as LinkIcon, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { PageHeader } from '@/components/sections';
import { Reveal } from '@/components/motion/Reveal';
import { pageMeta, publicCvDownloadName, publicCvPath } from '@/lib/site';

export const metadata: Metadata = pageMeta({
 title: 'Contact',
 description: 'Contact Marco Labate for Game QA / DevQA, Software QA consulting, UAT and release-readiness support. Email, LinkedIn and CV download.',
 path: '/contact/'
});

export default function Contact(){
 const links = [
  {title: 'Email', linkText: 'marco.labate@outlook.it', href: 'mailto:marco.labate@outlook.it', Icon: Mail, external: false},
  {title: 'LinkedIn', linkText: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/marco-labate/', Icon: LinkIcon, external: true},
  {title: 'Download CV', linkText: 'Download CV', href: publicCvPath, Icon: FileText, external: false, downloadName: publicCvDownloadName, description: 'Public CV version available for recruiters and hiring teams.'}
 ];

 return <>
  <PageHeader eyebrow="Contact" title="Available for studios, publishers, QA partners, and long-term roles.">
   <p>For professional opportunities, freelance QA support, DevQA work, Software QA consulting, or recruitment conversations, use the contact options below.</p>
  </PageHeader>
  <section className="py-16">
   <Container>
    <div className="grid gap-6 md:grid-cols-3">
     {links.map(({title,linkText,href,Icon,external,downloadName,description},i)=>
      <Reveal key={title} delay={i*70} className="h-full">
       <Card interactive className="h-full">
        <Icon className="text-cyan" aria-hidden="true"/>
        <h2 className="mt-4 text-xl font-bold text-primary">{title}</h2>
        {description ? <p className="mt-3 text-sm leading-relaxed text-secondary">{description}</p> : null}
        <a className="group/clink focus-ring mt-3 inline-flex w-fit items-center gap-1 rounded-sm font-semibold text-cyan hover:text-cyanHover" href={href} target={external?'_blank':undefined} rel={external?'noopener noreferrer':undefined} download={downloadName}>
         {linkText} <span aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover/clink:translate-x-1 motion-safe:group-focus-visible/clink:translate-x-1">{'\u2192'}</span>
        </a>
       </Card>
      </Reveal>
     )}
    </div>
    <Reveal className="mt-8">
     <Card>
      <h2 className="text-xl font-bold text-primary">Open to professional QA opportunities</h2>
      <p className="mt-3 leading-relaxed text-secondary">I am available for Game QA / DevQA, Software QA consulting, UAT, regression testing, defect analysis, and release-readiness support across PC, console, and enterprise software projects.</p>
     </Card>
    </Reveal>
   </Container>
  </section>
 </>;
}
