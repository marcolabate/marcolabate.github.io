import { ArrowUpRight, Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { pageMeta, publicCvDownloadName, publicCvPath } from '@/lib/site';
export const metadata = pageMeta({title: 'Contact', description: 'Contact Marco Labate for embedded Game QA, Software QA consulting or a long-term role. Based in Italy and working remotely. Email, LinkedIn and CV.', path: '/contact/'});
export default function Contact() {
 return <Container>
  <header className="page-intro"><p className="eyebrow">Contact</p><h1>Let’s talk about your team.</h1><p>Open to embedded QA, consulting engagements and long-term roles with game studios, publishers, QA partners and software teams.</p><p className="mt-4">Based in Italy (CET/CEST) · Working remotely in English and Italian</p></header>
  <div className="contact-page-links"><div><h2>Email</h2><a className="text-link" href="mailto:contact@marcolabate.games">contact@marcolabate.games <ArrowUpRight size={17} aria-hidden="true"/></a><p>Share the role, project or QA support you have in mind.</p></div><div><h2>LinkedIn</h2><a className="text-link" href="https://www.linkedin.com/in/marco-labate/">Connect on LinkedIn <ArrowUpRight size={17} aria-hidden="true"/></a><p>Professional background and direct messages.</p></div><div><h2>CV</h2><a className="text-link" href={publicCvPath} download={publicCvDownloadName}>Download CV <Download size={17} aria-hidden="true"/></a><p>Public PDF for recruiters and hiring teams.</p></div></div>
 </Container>;
}
