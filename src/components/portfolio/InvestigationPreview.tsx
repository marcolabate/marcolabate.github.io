import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export const investigationPath = '/case-studies/character-driven-action-adventure/';
export function InvestigationPreview() {
 return <section className="investigation-preview" aria-labelledby="investigation-title">
  <div>
   <p className="eyebrow">QA practice · Fictional investigation</p>
   <h2 id="investigation-title">One reload.<br/>Two conflicting states.</h2>
   <p className="section-copy">A gate opens, but saving and reloading closes the route while leaving its switch unusable. Here’s how I would narrow down the conditions and explain the progression risk.</p>
   <Link className="text-link" href={`${investigationPath}#example-finding`}>Read the investigation <ArrowRight size={18} aria-hidden="true"/></Link>
  </div>
  <div className="state-preview">
   <p className="eyebrow">Illustrative state comparison</p>
   <table><caption className="sr-only">Fictional save and reload state comparison</caption><thead><tr><th scope="col">State</th><th scope="col">Before reload</th><th scope="col">After reload</th></tr></thead><tbody>
    <tr><th scope="row">Switch</th><td>Activated</td><td>Used, no prompt</td></tr>
    <tr><th scope="row">Gate</th><td>Open</td><td className="state-change">Closed</td></tr>
    <tr><th scope="row">Progression</th><td>Route accessible</td><td className="state-change">Blocked</td></tr>
   </tbody></table>
   <p className="state-note">Working hypothesis: switch and gate state restore inconsistently. Root cause unconfirmed.</p>
  </div>
 </section>;
}
