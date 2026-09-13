import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ContactStrip } from '@/components/portfolio/ContactStrip';
import { softwareQaExperience } from '@/data/softwareQa';
import { pageMeta, publicCvPath, publicCvDownloadName } from '@/lib/site';
export const metadata = pageMeta({
 title: 'Software QA & UAT Consultant',
 description: 'Marco Labate: enterprise QA, UAT, Oracle SQL/XML investigation and QA process building. Consulting experience with IBM, Kosmoy and TXT Group.',
 path: '/beyond-game-qa/'
});
const methods = [
 {title: 'Establish the expected workflow', body: 'Translate requirements and business rules into acceptance scenarios, including the inputs, state transitions and expected result.'},
 {title: 'Compare the interface with the data', body: 'Use Oracle SQL and PL/SQL checks to examine record consistency and workflow states alongside what the application reports.'},
 {title: 'Inspect the supporting evidence', body: 'Review XML payloads and logs for the affected flow. Separate the observed symptom from a suspected cause and document the conditions needed to reproduce it.'},
 {title: 'Report, retest and extend coverage', body: 'Connect the defect to its business impact, verify the original scenario after a fix and check related workflows for regression risk.'}
];
export default function SoftwareQA() {
 return <Container>
  <header className="page-intro"><p className="eyebrow">Software QA · UAT · Data validation</p><h1>Clear evidence for complex workflows.</h1><p>I’m Marco Labate, a Senior QA Consultant working across enterprise, banking and finance systems. I help teams validate business requirements, investigate data and workflow issues, and build a practical QA process.</p><div className="intro-actions"><a className="button button-primary focus-ring" href="mailto:contact@marcolabate.games">Discuss your project <ArrowUpRight size={17} aria-hidden="true"/></a><a className="text-link" href={publicCvPath} download={publicCvDownloadName}><Download size={16} aria-hidden="true"/>Download CV</a></div></header>
  <section aria-labelledby="software-engagements"><div className="section-heading"><h2 id="software-engagements">Selected enterprise engagements</h2></div>
   {[softwareQaExperience[2],softwareQaExperience[1],softwareQaExperience[0]].map(experience=><article className="experience-row" key={experience.companyName}><div><p className="date">{experience.date}</p><h3>{experience.companyName}</h3><p className="role">{experience.role}</p><p className="engagement">{experience.engagementType}</p></div><div><p className="description">{experience.description}</p><ul className="contribution-list">{experience.bullets.map(item=><li key={item}>{item}</li>)}</ul></div></article>)}
   <p className="work-note">Enterprise client experience includes BPER Banca and Edenred. Current engagements are delivered on a freelance or consulting basis, so some periods overlap.</p>
  </section>
  <section className="software-method mt-12" aria-labelledby="software-method-title"><p className="eyebrow">Investigation approach</p><h2 id="software-method-title">Following a workflow beyond the screen.</h2><p className="section-copy">For finance and invoicing workflows, I combine UAT scenarios with SQL, XML and log checks. The approach below describes my methods; it is not a published client incident or a claimed result.</p><div className="method-grid">{methods.map((method,index)=><div key={method.title}><p className="eyebrow">0{index+1}</p><h3>{method.title}</h3><p>{method.body}</p></div>)}</div></section>
  <section className="background-strip"><div><p className="eyebrow">QA ownership</p><h2>Make quality work visible.</h2></div><div><p className="section-copy">At Kosmoy, I act as the primary QA reference in an Agile engineering team. My work includes defining the process, organising risk-based and exploratory coverage, managing bug intake in Jira and improving documentation.</p><p className="section-copy">Across engagements, I communicate test progress, blockers and uncertainty so technical and business stakeholders can assess what needs attention.</p><Link className="text-link mt-4" href="/about/">Full background & certifications <ArrowUpRight size={17} aria-hidden="true"/></Link></div></section>
  <ContactStrip software/>
 </Container>;
}
