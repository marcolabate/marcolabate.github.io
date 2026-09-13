import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function ContactStrip({software = false}: {software?: boolean}) {
 return <section className="contact-strip" aria-labelledby="contact-heading"><div>
  <p className="eyebrow">Contact</p>
  <h2 id="contact-heading">{software ? 'Let’s discuss your QA needs.' : 'Let’s talk about your team.'}</h2>
  <p>Based in Italy · Working remotely with international teams</p>
 </div><div className="contact-actions">
  <a className="contact-email focus-ring" href="mailto:contact@marcolabate.games">contact@marcolabate.games <ArrowUpRight size={20} aria-hidden="true"/></a>
  <div><a className="text-link" href="https://www.linkedin.com/in/marco-labate/">LinkedIn</a><Link className="text-link" href="/contact/">Contact details</Link></div>
 </div></section>;
}
