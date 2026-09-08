import { Card } from '@/components/ui/Card';

export function ExampleQaFinding() {
 return <section id="example-finding" aria-labelledby="finding-title" className="mt-10 scroll-mt-24">
  <Card className="!p-5 sm:!p-8 border-cyan/50">
   <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Example QA Finding · Fictional report</p>
   <h2 id="finding-title" className="mt-3 text-2xl font-bold text-primary">Reload closes an opened puzzle gate and leaves its switch unusable</h2>
   <p className="mt-3 text-sm text-muted">Invented scenario and illustrative outcomes in a generic game. Not an observed defect in Bradley the Badger or any professional project.</p>
   <div className="mt-5 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
    <div>
     <figure className="rounded-2xl border border-line bg-section p-5">
      <figcaption className="text-xs font-semibold uppercase tracking-wide text-muted">State comparison · schematic, not a screenshot</figcaption>
      <div className="mt-4 rounded-xl border border-cyan/50 p-4"><p className="text-xs text-cyan">Before reload</p><p className="mt-2 font-semibold text-primary">Switch activated → Gate open</p><p className="mt-1 text-sm text-secondary">Objective: enter the next area</p></div>
      <div className="py-2 text-center text-cyan" aria-hidden="true">↓ Save / reload</div>
      <div className="rounded-xl border border-line bg-card p-4"><p className="text-xs text-cyan">After reload</p><p className="mt-2 font-semibold text-primary">Switch used · Gate closed</p><p className="mt-1 text-sm text-secondary">No prompt to reopen the route</p></div>
     </figure>
     <div className="mt-4 border-l-2 border-cyan pl-4"><h3 className="font-semibold text-primary">Player impact</h3><p className="mt-2 text-sm text-secondary">The next objective remains active, but the player cannot reach it or operate the switch again.</p></div>
    </div>
    <div className="space-y-4 text-sm leading-relaxed text-secondary">
     <div><h3 className="font-semibold text-primary">Test context</h3><p>Fictional build EX-042 · PC / controller · single player. Start with an unused switch and a closed gate. Illustrative repro: 3/3 attempts.</p></div>
     <div><h3 className="font-semibold text-primary">Reproduction steps</h3><ol className="mt-2 list-decimal space-y-1 pl-5"><li>Activate the switch and confirm the gate opens.</li><li>Save before entering the next area.</li><li>Return to the title screen and reload that save.</li><li>Approach the gate, then return to the switch.</li></ol></div>
     <dl className="grid gap-3 sm:grid-cols-2"><div><dt className="font-semibold text-cyan">Expected</dt><dd>The open route and completed switch state restore together.</dd></div><div><dt className="font-semibold text-cyan">Actual</dt><dd>The gate is closed; the switch has no prompt. The objective still directs the player through the gate.</dd></div></dl>
     <div><h3 className="font-semibold text-primary">Investigation notes</h3><p>In this scenario, uninterrupted play passes. Compare saves immediately before and after activation. Suspect a mismatch between saved switch and gate state; root cause remains unconfirmed. A real report would attach the save, build details and a timestamped clip.</p></div>
     <div><h3 className="font-semibold text-primary">Severity / priority proposal</h3><p>High: progression is blocked with no recovery found in the tested state. Escalate for triage; confirm affected saves, frequency and available workarounds before agreeing release priority.</p></div>
    </div>
   </div>
   <div className="mt-5 border-t border-line pt-4"><h3 className="font-semibold text-primary">Fix verification & regression · proposed, not executed</h3><p className="mt-2 text-sm leading-relaxed text-secondary">Repeat the original reproduction with an affected save and a new save. Check checkpoint restore, saving during activation, repeated input and alternate puzzle order. Confirm the gate, collision, prompt and objective agree after each transition.</p></div>
  </Card>
 </section>;
}
