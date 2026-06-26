export type CaseStudyRisk = {
 title: string;
 body: string;
};

export type CaseStudyTestArea = {
 title: string;
 whyItMatters: string;
 whatCouldBreak: string;
 validation: string;
};

export type CaseStudyCharter = {
 name: string;
 goal: string;
 focus: string;
 risks: string;
};

// A tangible QA artifact rendered inside each case study. The shape supports a
// key/value report (fields), a table (columns + rows) or a checklist (items).
export type CaseStudyArtifact = {
 kind: string; // short label, e.g. 'Sample bug report'
 title: string;
 intro?: string;
 fields?: { label: string; value: string }[];
 columns?: string[];
 rows?: string[][];
 items?: string[];
 note?: string;
};

export type CaseStudyReferenceMaterial = {
 heading: string;
 body: string;
 links: { label: string; href: string }[];
 youtube?: {
  id: string;
  title: string;
  thumbnailSrc: string;
  thumbnailFallbackSrc?: string;
  caption: string;
 };
};

export type CaseStudyKind =
 | 'Hypothetical QA exercise'
 | 'Public-information QA analysis'
 | 'QA methodology';

export type CaseStudy = {
 slug: string;
 label: 'Featured Case Study' | 'Case Study';
 kind: CaseStudyKind;
 artifact?: CaseStudyArtifact;
 referenceMaterial?: CaseStudyReferenceMaterial;
 backgroundMapping?: { title: string; body: string };
 title: string;
 description: string;
 tags: string[];
 eyebrow: string;
 articleTitle?: string;
 metaTitle?: string;
 metaDescription?: string;
 intro: string;
 disclaimer?: string;
 riskIntro: string;
 risks: CaseStudyRisk[];
 testFirstIntro: string;
 testFirst: CaseStudyTestArea[];
 chartersIntro: string;
 charters: CaseStudyCharter[];
 reportingIntro: string;
 reportingPoints: string[];
 reportingClosing: string;
 releaseTitle: string;
 releaseIntro: string;
 releasePoints: string[];
 releaseClosing: string;
 closing: string;
 // Up to 3 scannable bullets, shown near the top, each naming a professional QA
 // capability the case study demonstrates (not a summary of the whole article).
 demonstrates?: string[];
};

export const caseStudies: CaseStudy[] = [
 {
  slug: 'character-driven-action-adventure',
  label: 'Featured Case Study',
  kind: 'Hypothetical QA exercise',
  title: 'Applied QA Case Study: Systemic Action-Adventure QA',
  description: 'A hypothetical QA exercise inspired by public information about Day 4 Night Studios’ Bradley the Badger, focused on systemic gameplay, progression state, save/load behavior, regression coverage and release readiness.',
  tags: ['Applied QA Exercise', 'Risk-Based Testing', 'Game QA'],
  eyebrow: 'Applied QA Exercise',
  articleTitle: 'Applied QA Case Study: Systemic Action-Adventure QA',
  metaTitle: 'Systemic Action-Adventure QA Case Study',
  metaDescription: 'Independent QA portfolio case study inspired by public information about Bradley the Badger, focused on systemic gameplay, progression testing, save/load behavior, regression coverage and release readiness.',
  disclaimer: 'This is an independent applied QA exercise based only on public information about Bradley the Badger and transferable QA experience. It does not use private builds, internal tools, proprietary documentation, confidential material or any direct involvement with Day 4 Night Studios. All trademarks belong to their respective owners.',
  intro: 'Public materials describe Bradley the Badger as a systemic, player-driven action-adventure built around creative interaction tools, traversal, puzzle solving and a strong player-facing identity. This case study uses that public framing to show how I would structure embedded QA support for a similar project: identifying player-facing risks early, validating emergent interactions, protecting progression state, and turning findings into clear, actionable information for design, engineering and production.',
  referenceMaterial: {
   heading: 'Public reference material',
   body: 'This independent QA exercise is inspired by publicly available material about Day 4 Night Studios’ Bradley the Badger. The trailer and official website are included only as public context for the type of systemic action-adventure being discussed.',
   links: [
    {label: 'Official website', href: 'https://bradleythebadger.com/'}
   ],
   youtube: {
   id: 'sesY6RFOuVY',
   title: 'Official Bradley the Badger trailer',
   thumbnailSrc: 'https://img.youtube.com/vi/sesY6RFOuVY/maxresdefault.jpg',
   thumbnailFallbackSrc: 'https://img.youtube.com/vi/sesY6RFOuVY/hqdefault.jpg',
   caption: 'Official Bradley the Badger trailer, embedded from YouTube as public reference material.'
  }
  },
  riskIntro: 'A systemic action-adventure combines character control, traversal, camera behavior, player tools, puzzle logic, objective state and persistence. Risk-based testing should focus on the places where those systems overlap and where a small state mismatch can damage player-facing quality.',
  risks: [
   {title: 'Character control and camera readability', body: 'Responsiveness, recovery, framing and target visibility need to hold up in tight spaces, vertical routes, combat pressure and transition-heavy areas.'},
   {title: 'Traversal and spatial understanding', body: 'Reachability, collision, route readability and environmental feedback must remain clear when players approach spaces from different angles and speeds.'},
   {title: 'Systemic player tools and emergent interactions', body: 'Player-driven mechanics can create valid but unexpected solutions. QA should test not only intended paths, but also wrong order, wrong target, repeated use, save/reload interruption and boundary cases.'},
   {title: 'Puzzle and objective state', body: 'Interaction order, trigger timing and objective updates can leave guidance, prompts or progression flags in contradictory states.'},
   {title: 'Save/load, checkpoint and progression state', body: 'World state, player position, rewards, unlocks and objective progress need to restore consistently after checkpoint restore, reload and interrupted sequences.'},
   {title: 'Release regression and build stability', body: 'Iterative builds can introduce regressions across traversal, camera, UI/UX validation, scripting, persistence and build verification flows.'}
  ],
  testFirstIntro: 'The first pass would prioritize high-impact flows that can block progression, hide valid solutions or create misleading player guidance.',
  testFirst: [
   {
    title: 'Core feel and traversal',
    whyItMatters: 'Movement quality defines trust in a character-driven game and becomes the baseline for every other feature.',
    whatCouldBreak: 'Input delay, animation locks, collision gaps, clipping, failed recovery or unclear traversal affordances can make basic play unreliable.',
    validation: 'Run focused traversal passes across open spaces, tight routes, slopes, ledges and transitions while varying speed, angle, input timing and recovery states.'
   },
   {
    title: 'Camera and spatial readability',
    whyItMatters: 'Players need a stable view of threats, routes, interactive objects and objective cues before they can make good decisions.',
    whatCouldBreak: 'Geometry can occlude the character, framing can drift, target visibility can fail or the camera can recover too late after transitions.',
    validation: 'Check occlusion, camera collision, target visibility and recovery in dense spaces, puzzles, combat-adjacent moments and rapid direction changes.'
   },
   {
    title: 'Systemic interaction and puzzle logic',
    whyItMatters: 'Player tools and environmental rules should support valid emergent solutions without corrupting puzzle or objective state.',
    whatCouldBreak: 'Prompts can conflict, triggers can duplicate or fail, repeated actions can break state, or valid alternate solutions can look invalid.',
    validation: 'Test intended and non-linear orders, wrong targets, repeated use, boundary cases, interrupted actions and save/reload during interaction changes.'
   },
   {
    title: 'Objective flow and narrative state',
    whyItMatters: 'Story beats, objectives and UI guidance need to stay aligned so players understand the next meaningful action.',
    whatCouldBreak: 'Objectives, markers, prompts or dialogue state can become stale after cutscenes, backtracking, interruption, checkpoint restore or reload.',
    validation: 'Track objective state through each beat, interrupt transitions where possible, revisit completed areas and compare HUD, world cues and journal state.'
   },
   {
    title: 'Save/load and progression state',
    whyItMatters: 'Persistence failures can turn a recoverable issue into lost progress, blocked progression or a release-readiness risk.',
    whatCouldBreak: 'Position, rewards, unlocks, objective flags, puzzle state or world changes can diverge after reload, checkpoint restore or build updates.',
    validation: 'Run save/load testing around objectives, rewards, ability use, area transitions and off-path choices, then regression-test fixes against nearby states.'
   }
  ],
  chartersIntro: 'Exploratory testing should be structured around specific risks, evidence goals and production decisions, not treated as random free play.',
  charters: [
   {name: 'Movement, Camera and Traversal Readability', goal: 'Confirm the character remains controllable and readable across representative spaces.', focus: 'Input response, animation recovery, collision, route clarity, camera framing and occlusion.', risks: 'Lost orientation, clipping, unreadable routes, blocked movement and camera recovery failures.'},
   {name: 'Interaction Order and Puzzle State', goal: 'Find state issues caused by non-linear or repeated player actions.', focus: 'Prompt priority, trigger timing, systemic tools, alternate solutions, interruption and repeated use.', risks: 'Duplicated triggers, stale prompts, invalid state, missed rewards and unrecoverable puzzle setups.'},
   {name: 'Objective Flow After Story Beats', goal: 'Verify objectives, UI guidance and world state stay aligned after narrative transitions.', focus: 'Story beats, cutscenes, backtracking, markers, journal state, dialogue state and interrupted sequences.', risks: 'Stale objectives, misleading guidance, perceived blockers and unclear next steps.'},
   {name: 'Save/Load Around Progression Changes', goal: 'Stress persistence when progression state changes or is interrupted.', focus: 'Checkpoint restore, reload, objective flags, player position, rewards, unlocks and nearby world state.', risks: 'Lost progress, state mismatch, reverted unlocks, broken prompts and hard-to-reproduce regressions.'}
  ],
  reportingIntro: 'Defect reporting should give design, engineering and production enough context to make a fast, confident decision.',
  reportingPoints: [
   'Record build, platform, input method, location, account or save state, reproduction steps and repro rate.',
   'Separate observed result, expected result and player impact so routing is clear.',
   'Flag whether the finding is a technical defect, UI/UX validation issue, design risk or regression coverage candidate.',
   'Attach video, screenshots or save-state evidence when timing, camera state, objective state or persistence is part of the defect.'
  ],
  reportingClosing: 'The handoff should reduce ambiguity, support prioritization and make follow-up validation easier in later builds.',
  releaseTitle: 'Regression and release-readiness value',
  releaseIntro: 'A practical regression backbone keeps iterative builds focused on the flows most likely to break before a release.',
  releasePoints: [
   'Run build verification and smoke checks on boot, input, core loop, objective flow, save/load and recently changed high-risk systems.',
   'Focus regression coverage on changed systems, adjacent dependencies and known player-facing risk areas.',
   'Perform fix verification against the original symptom, nearby states and likely side effects.',
   'Track known issues with status, player impact, workaround, owner, release risk and escalation needs.'
  ],
  releaseClosing: 'The output is a clear release-readiness view: what passed, what remains uncertain and which risks need action before they become blockers.',
  artifact: {
   kind: 'Sample bug report',
   title: 'Interaction prompt persists after objective state changes',
   intro: 'Hypothetical, illustrative defect report structured for Jira-style triage and clear evidence handoff.',
   fields: [
    {label: 'Build / Platform', value: 'Hypothetical PC build'},
    {label: 'Severity', value: 'Medium'},
    {label: 'Priority', value: 'Medium'},
    {label: 'Repro rate', value: '5/5'},
    {label: 'Player impact', value: 'Misleading prompt may cause dead interaction and perceived progression break.'},
    {label: 'Steps', value: '1. Complete objective A. 2. Trigger the cutscene or transition that starts objective B. 3. Return to the previous objective location. 4. Observe the interaction prompt.'},
    {label: 'Observed', value: 'The previous interaction prompt remains visible, but no valid interaction occurs.'},
    {label: 'Expected', value: 'The prompt should be removed, disabled or replaced after the objective state changes.'},
    {label: 'QA note', value: 'This should be regression-tested against objective transitions, save/load, checkpoint restore and reload from nearby states.'}
   ]
  },
  backgroundMapping: {
   title: 'How this maps to my QA background',
   body: 'This approach reflects the type of QA work I focus on professionally: Senior Game QA, Embedded DevQA, iterative build validation, gameplay systems testing, UI/UX feedback, progression risk, regression coverage and clear evidence handoff for development teams.'
  },
  closing: 'This case study demonstrates a practical embedded QA mindset: identify risk early, test beyond the happy path, separate technical defects from UX and design risks, provide clear evidence, and help the team make confident decisions before issues become release blockers.',
  demonstrates: [
   'Risk-based embedded QA thinking that targets where overlapping gameplay systems are most likely to break.',
   'Progression, persistence and save/load coverage that protects player state across checkpoints, reloads and interruptions.',
   'Clear, Jira-style defect reporting with reproducible steps and evidence built for fast triage and handoff.'
  ]
 },
 {
  slug: 'live-patch-monitoring',
  label: 'Case Study',
  kind: 'QA methodology',
  title: 'Live Patch Monitoring After Major Updates',
  description: 'Monitoring active builds after major releases to identify regression signals, player-impacting issues and hotfix candidates.',
  tags: ['Live Monitoring', 'Regression', 'Release Readiness'],
  eyebrow: 'Case Study',
  intro: 'A major patch changes the risk profile of a live game immediately. Post-release QA combines targeted smoke checks, incoming issue triage and fast fix verification to identify problems that require escalation while the release context is still current.',
  riskIntro: 'Live updates expose changed systems to real player behavior, varied accounts and persistent data. A defect that looked narrow before release can become high-impact when it blocks access, progression or save state at scale.',
  risks: [
   {title: 'Access and stability', body: 'Players may be unable to boot, authenticate, load a profile or enter the updated content.'},
   {title: 'Changed-system regression', body: 'Patch work can break neighboring systems, old content or platform-specific flows.'},
   {title: 'Progression and persistence', body: 'Objectives, unlocks, inventories or saves can become blocked, lost or inconsistent.'},
   {title: 'Player-facing communication', body: 'Prompts, objectives and known-issue messaging can misrepresent the current state.'},
   {title: 'Hotfix risk', body: 'A rapid correction can solve the primary issue while introducing a second regression.'}
  ],
  testFirstIntro: 'Initial coverage targets failures that prevent play, damage persistent state or create widespread confusion.',
  testFirst: [
   {
    title: 'Critical boot and access flow',
    whyItMatters: 'No other coverage matters if players cannot reach the game or updated content.',
    whatCouldBreak: 'Boot, sign-in, entitlement, profile loading, matchmaking entry or content access can fail after deployment.',
    validation: 'Run clean and returning-user smoke paths on supported environments, including restart and retry behavior after failure.'
   },
   {
    title: 'Recently changed systems',
    whyItMatters: 'The highest regression probability sits in and around the patch scope.',
    whatCouldBreak: 'New logic can conflict with existing states, dependencies, content variants or platform behavior.',
    validation: 'Map patch changes to direct dependencies, test expected paths first, then vary state, sequence and account condition.'
   },
   {
    title: 'Progression blockers',
    whyItMatters: 'A blocked objective can stop large groups of players from using the update.',
    whatCouldBreak: 'Triggers, prerequisites, rewards or objective transitions can fail for new and existing progress states.',
    validation: 'Exercise key progression gates with representative pre-patch, mid-flow and fresh states, then confirm recovery after reload.'
   },
   {
    title: 'Save/load and persistence risks',
    whyItMatters: 'Persistent damage has a longer player impact than a temporary presentation issue.',
    whatCouldBreak: 'Inventory, unlocks, settings, checkpoints or world state can revert, duplicate or desync.',
    validation: 'Capture state before and after update flows, restart sessions, switch areas and verify server and local state remain aligned.'
   },
   {
    title: 'UI, prompts and objective flow',
    whyItMatters: 'Players need accurate guidance when content or rules have just changed.',
    whatCouldBreak: 'Old text, missing prompts, stale markers or unclear failure feedback can make a working feature appear broken.',
    validation: 'Follow player-facing guidance through the updated flow and compare displayed state with actual eligibility, progress and outcomes.'
   }
  ],
  chartersIntro: 'The monitoring window uses short charters that can produce actionable evidence quickly.',
  charters: [
   {name: 'Post-release Smoke Pass', goal: 'Confirm players can access the build and complete the critical updated flow.', focus: 'Boot, sign-in, profile load, core loop, content access and basic persistence.', risks: 'Access failure, crash, account-state mismatch and immediate progression blocks.'},
   {name: 'Recently Changed Systems Regression', goal: 'Find breakage in the patch scope and its nearest dependencies.', focus: 'Changed logic, adjacent features, platform variants and existing content states.', risks: 'Unexpected side effects, state-specific failures and old-content regression.'},
   {name: 'High-impact Player Issue Triage', goal: 'Convert incoming player signals into reproducible, prioritized findings.', focus: 'Frequency patterns, affected states, workarounds, severity and evidence quality.', risks: 'Widespread blockers, data loss, misleading symptoms and delayed escalation.'},
   {name: 'Hotfix Candidate Verification', goal: 'Confirm the proposed correction resolves the issue without expanding risk.', focus: 'Original reproduction, boundary conditions, dependencies and a focused smoke pass.', risks: 'Partial fix, recurrence in another state and secondary regression.'}
  ],
  reportingIntro: 'Post-release reporting must be fast without sacrificing decision-critical detail.',
  reportingPoints: [
   'Lead with player impact, affected population or state, severity and current workaround.',
   'Include exact build, platform, account condition, reproduction steps and evidence.',
   'Separate confirmed defects from player reports still under investigation.',
   'Maintain known-issue status and escalate access, progression, persistence or stability failures immediately.'
  ],
  reportingClosing: 'Priority reflects release exposure and response urgency, while severity describes the actual impact of the defect.',
  releaseTitle: 'Release and regression value',
  releaseIntro: 'Live monitoring extends release-readiness work into the period where the patch meets production conditions.',
  releasePoints: [
   'Detect regression signals early enough to support mitigation or hotfix decisions.',
   'Turn recurring player reports into controlled reproduction paths.',
   'Verify fixes against the original issue and the systems most likely to regress.',
   'Keep known issues, workarounds and residual risk visible to the team.'
  ],
  releaseClosing: 'The result is a shared operational picture: which issues are confirmed, who is affected and what action carries the best risk tradeoff.',
  artifact: {
   kind: 'Defect prioritization matrix',
   title: 'Post-patch triage snapshot',
   intro: 'How I rank incoming post-release issues so the team acts on the highest-exposure problems first. Representative, sanitized examples.',
   columns: ['Issue', 'Player impact', 'Frequency', 'Severity', 'Priority', 'Action'],
   rows: [
    ['Boot failure on returning profiles', 'Blocks play', 'Widespread', 'A', 'P1', 'Escalate for hotfix'],
    ['Objective fails to advance post-update', 'Blocks progression', 'Specific state', 'A', 'P1', 'Reproduce + escalate'],
    ['Inventory count desync after reload', 'Persistent confusion', 'Intermittent', 'B', 'P2', 'Confirm scope, monitor'],
    ['Stale "new content" badge', 'Cosmetic', 'Common', 'C', 'P3', 'Backlog']
   ]
  },
  closing: 'This case study demonstrates risk-based live monitoring, disciplined escalation and evidence that supports rapid release decisions.',
  demonstrates: [
   'Post-release regression signal detection that surfaces new breakage while the patch context is still current.',
   'Player-impact triage that converts incoming player reports into reproducible, prioritized findings.',
   'Hotfix candidate prioritization and fix verification that confirms corrections without expanding risk.'
  ]
 },
 {
  slug: 'progression-reward-balance',
  label: 'Case Study',
  kind: 'QA methodology',
  title: 'Progression and Reward Balance Validation',
  description: 'Comparing effort, reward pacing and progression consistency across different gameplay activities.',
  tags: ['Progression', 'Balance', 'Gameplay Systems'],
  eyebrow: 'Case Study',
  intro: 'Progression QA checks whether effort, reward and unlock pacing form a coherent player experience. The goal is not to choose the final balance values, but to expose inconsistent outcomes, unclear expectations and loops that push players away from otherwise valuable content.',
  riskIntro: 'Reward systems connect activities, economy, difficulty and long-term motivation. Small value differences can compound over time, making one activity dominant, another irrelevant or the overall progression curve feel stalled.',
  risks: [
   {title: 'Unequal effort-to-reward', body: 'Comparable activities can produce materially different returns under similar conditions.'},
   {title: 'Pacing spikes and stalls', body: 'Progress can accelerate or slow sharply at specific levels, tiers or unlock gates.'},
   {title: 'Dominant gameplay loops', body: 'One efficient activity can make the rest of the content feel like a poor choice.'},
   {title: 'Unclear reward expectations', body: 'UI, descriptions or end-of-activity feedback can hide why a reward changed.'},
   {title: 'Long-term motivation', body: 'Repeated low-value outcomes can turn intended goals into friction rather than motivation.'}
  ],
  testFirstIntro: 'Coverage starts with controlled comparisons before expanding into longer progression sampling.',
  testFirst: [
   {
    title: 'Comparable activities under similar conditions',
    whyItMatters: 'A fair comparison needs equivalent character state, difficulty and player performance.',
    whatCouldBreak: 'Hidden modifiers or inconsistent rules can produce unexplained differences between activities.',
    validation: 'Hold progression state and difficulty constant, repeat each activity and record base rewards, bonuses and exceptions.'
   },
   {
    title: 'Time investment versus reward output',
    whyItMatters: 'Players experience value as a return on time and effort, not as an isolated number.',
    whatCouldBreak: 'A longer or harder activity can pay less than a short, low-risk alternative.',
    validation: 'Sample completion time, failure rate, resource cost and reward output across repeated runs, then compare ranges rather than one result.'
   },
   {
    title: 'Progression curve consistency',
    whyItMatters: 'The curve should support a readable sense of momentum across the intended journey.',
    whatCouldBreak: 'XP thresholds, scaling rules or bonuses can create abrupt stalls, skips or level-specific anomalies.',
    validation: 'Model representative checkpoints across the curve and verify required effort, reward sources and threshold transitions.'
   },
   {
    title: 'Unlock pacing',
    whyItMatters: 'Unlocks give progression a visible purpose and shape the available gameplay options.',
    whatCouldBreak: 'Rewards can arrive too closely, too late, in the wrong order or without clear confirmation.',
    validation: 'Track expected unlock timing against realistic play sessions and verify prerequisites, delivery, persistence and player messaging.'
   },
   {
    title: 'Player motivation and friction points',
    whyItMatters: 'Mathematically valid values can still create repetitive or discouraging behavior.',
    whatCouldBreak: 'Players may avoid content, repeat one optimal loop or abandon a goal because progress feels opaque.',
    validation: 'Review the complete loop from activity selection to reward feedback, noting where choice, clarity or momentum breaks down.'
   }
  ],
  chartersIntro: 'Exploratory charters combine controlled data collection with player-facing observation.',
  charters: [
   {name: 'Activity Reward Comparison', goal: 'Compare reward output from activities intended for a similar progression stage.', focus: 'Conditions, difficulty, completion quality, reward components and variance.', risks: 'Under-rewarded content, dominant loops and unexplained result differences.'},
   {name: 'Time-to-Reward Sampling', goal: 'Measure how reward value changes when completion time and failure cost are included.', focus: 'Session time, retries, resource use, downtime and total reward.', risks: 'Poor return on effort, hidden grind and misleading headline values.'},
   {name: 'Progression Curve Consistency', goal: 'Identify spikes, stalls or skips across representative progression checkpoints.', focus: 'Thresholds, XP sources, scaling, unlock gates and cumulative effort.', risks: 'Abrupt pacing changes, unreachable goals and accidental acceleration.'},
   {name: 'Reward Clarity and Player Expectation', goal: 'Confirm players can understand what they earned and why.', focus: 'Activity descriptions, reward previews, result screens and exception messaging.', risks: 'False expectations, perceived missing rewards and unclear bonus conditions.'}
  ],
  reportingIntro: 'Balance findings need controlled conditions and enough data to distinguish a pattern from normal variation.',
  reportingPoints: [
   'Record progression state, difficulty, modifiers, completion time, performance and reward breakdown.',
   'Show comparison tables or repeat samples when the issue depends on relative value.',
   'Explain player impact in terms of pacing, choice, motivation or content avoidance.',
   'Use severity for functional failures and frame tuning concerns with clear priority and supporting evidence.'
  ],
  reportingClosing: 'The report should expose the inconsistency and its likely behavior effect without prescribing design ownership.',
  releaseTitle: 'Regression and decision value',
  releaseIntro: 'Progression checks protect both functional correctness and the intended relationship between activities.',
  releasePoints: [
   'Create repeatable baselines for reward and pacing regression coverage.',
   'Verify tuning changes at the affected point and across adjacent progression ranges.',
   'Detect economy or unlock side effects before they compound in live play.',
   'Give design and production evidence for prioritizing balance changes.'
  ],
  releaseClosing: 'This coverage makes progression decisions easier to evaluate because the team can see both the numbers and the player-facing consequence.',
  artifact: {
   kind: 'Effort-to-reward comparison',
   title: 'Activity comparison under matched conditions',
   intro: 'A controlled comparison I use to expose unequal effort-to-reward and dominant loops. Illustrative figures: the goal is the pattern, not a tuning recommendation.',
   columns: ['Activity', 'Avg. time', 'Failure rate', 'Reward output', 'Reward / min', 'Flag'],
   rows: [
    ['A: intended core loop', '8 min', 'Low', '120', '15', 'No note'],
    ['B: high difficulty', '14 min', 'High', '140', '10', 'Under-rewards effort'],
    ['C: low-risk loop', '3 min', 'Very low', '60', '20', 'Dominant / grind risk']
   ],
   note: 'Ranges from repeated samples matter more than single runs; the flag column drives the discussion, not the raw numbers.'
  },
  closing: 'This case study demonstrates structured comparison, practical balance evidence and a QA approach that connects system output to player motivation.',
  demonstrates: [
   'Controlled effort-to-reward comparison under matched conditions to expose unequal or dominant gameplay loops.',
   'Progression pacing and reward-consistency analysis across representative checkpoints and unlock gates.',
   'Evidence that connects measurable system output to its player-motivation and content-choice impact.'
  ]
 },
 {
  slug: 'ui-ux-readability-player-guidance',
  label: 'Case Study',
  kind: 'QA methodology',
  title: 'UI/UX Readability and Player Guidance',
  description: 'Identifying friction points that affect player understanding, navigation, prompts and moment-to-moment clarity.',
  tags: ['UI/UX', 'Player Guidance', 'Readability'],
  eyebrow: 'Case Study',
  intro: 'UI and player guidance are part of gameplay: they communicate available actions, current state and the result of player input. QA coverage looks for moments where the underlying system works but the player cannot understand, find or trust it.',
  riskIntro: 'Readability failures often appear small in isolation but can stop progression, create repeated input errors or make players blame the wrong system. Timing, context and state transitions matter as much as visual presentation.',
  risks: [
   {title: 'Objective confusion', body: 'Guidance can become stale, disappear or point to the wrong next action after state changes.'},
   {title: 'Prompt and feedback failure', body: 'Players may not know whether an action is available, accepted, blocked or still processing.'},
   {title: 'Visual readability', body: 'Icons, text and menus can lose clarity during motion, combat or dense visual scenes.'},
   {title: 'Input ambiguity', body: 'Prompts can show the wrong device, binding or interaction method.'},
   {title: 'Inconsistent terminology', body: 'Different labels for the same system can break player understanding across screens.'}
  ],
  testFirstIntro: 'Coverage follows the player’s information path: guidance, action, feedback and updated state.',
  testFirst: [
   {
    title: 'Objective guidance after state changes',
    whyItMatters: 'Guidance must update when the world or objective moves to a new state.',
    whatCouldBreak: 'Text, markers or map state can remain stale after completion, failure, reload or branching actions.',
    validation: 'Trigger each state transition through normal and interrupted paths, then compare HUD, map, journal and world guidance.'
   },
   {
    title: 'Interaction prompts and feedback',
    whyItMatters: 'Players need to know when an action is possible and whether it succeeded.',
    whatCouldBreak: 'Prompts can appear late, overlap, show the wrong action or provide no reason when an interaction fails.',
    validation: 'Vary distance, angle, competing targets, rapid input and unavailable states while checking prompt priority and outcome feedback.'
   },
   {
    title: 'Menu and icon readability',
    whyItMatters: 'Information must remain scannable across screen sizes, backgrounds and gameplay pressure.',
    whatCouldBreak: 'Contrast, hierarchy, truncation, icon similarity or focus state can hide important choices.',
    validation: 'Review common resolutions and dense content states, including long strings, disabled options, selection movement and gameplay overlays.'
   },
   {
    title: 'Player-facing text',
    whyItMatters: 'Text defines rules, requirements and consequences that may not be visible elsewhere.',
    whatCouldBreak: 'Labels can be inconsistent, instructions incomplete, requirements inaccurate or errors unhelpful.',
    validation: 'Compare terminology across onboarding, menus, objectives and results, then test boundary and failure states for useful messaging.'
   },
   {
    title: 'Input method clarity',
    whyItMatters: 'Guidance must match the active device and current bindings.',
    whatCouldBreak: 'Prompts can retain the previous device, ignore rebinding or switch too aggressively during mixed input.',
    validation: 'Swap input methods during menus and gameplay, rebind controls and verify prompts, legends and tutorials update consistently.'
   }
  ],
  chartersIntro: 'These charters target confusion risk in realistic gameplay contexts rather than reviewing screens in isolation.',
  charters: [
   {name: 'Objective Flow After State Change', goal: 'Confirm guidance remains accurate whenever objective state changes.', focus: 'HUD, map markers, journal text, world cues, reloads and branching outcomes.', risks: 'Stale guidance, missing next steps, contradictory markers and progression confusion.'},
   {name: 'Prompt Timing and Interaction Feedback', goal: 'Verify prompts appear at the right moment and explain interaction outcomes.', focus: 'Distance, angle, priority, input timing, unavailable actions and response feedback.', risks: 'Wrong prompt, missed input, silent failure and misleading action availability.'},
   {name: 'UI Readability During Gameplay', goal: 'Assess whether critical information remains legible under real play conditions.', focus: 'Motion, combat, visual density, contrast, scaling, selection and notification overlap.', risks: 'Hidden status, unreadable text, missed warnings and menu navigation errors.'},
   {name: 'Player Confusion Risk Review', goal: 'Follow a feature as a first-time player and identify where understanding breaks.', focus: 'Terminology, onboarding, requirements, errors, feedback and next-action clarity.', risks: 'False assumptions, repeated failed actions, content abandonment and support burden.'}
  ],
  reportingIntro: 'UI/UX findings are strongest when they identify the exact misunderstanding and the state that creates it.',
  reportingPoints: [
   'Capture the interaction context, active input method, resolution and state transition.',
   'Describe what the player sees, what conclusion it suggests and what the system actually expects.',
   'Use video for timing, prompt priority or feedback issues and screenshots for hierarchy or readability.',
   'Assign severity and priority from player impact, frequency and whether the issue blocks recovery or progression.'
  ],
  reportingClosing: 'Reports explain the friction clearly while leaving the final interaction or visual solution with the owning discipline.',
  releaseTitle: 'Release and regression value',
  releaseIntro: 'Player-guidance coverage reduces avoidable confusion and protects high-traffic flows after UI or system changes.',
  releasePoints: [
   'Add critical objectives, prompts and error states to smoke and regression coverage.',
   'Verify UI fixes across relevant resolutions, devices and connected screens.',
   'Check terminology and feedback when underlying gameplay rules change.',
   'Track known readability risks that can affect onboarding, progression or support volume.'
  ],
  releaseClosing: 'This gives release decisions a player-understanding dimension, not only a functional pass/fail result.',
  artifact: {
   kind: 'Readability risk matrix',
   title: 'Player-guidance risk assessment',
   intro: 'A lightweight matrix I use to prioritize readability and guidance coverage by likelihood and player impact.',
   columns: ['Readability risk', 'Likelihood', 'Player impact', 'Severity', 'Coverage priority'],
   rows: [
    ['Stale objective marker after reload', 'Medium', 'High: progression doubt', 'B', 'High'],
    ['Wrong input-device prompts after swap', 'High', 'Medium', 'B', 'High'],
    ['Low-contrast HUD during combat', 'Medium', 'Medium', 'C', 'Medium'],
    ['Inconsistent terminology across menus', 'Low', 'Medium', 'C', 'Medium']
   ]
  },
  closing: 'This case study demonstrates a QA approach that treats clarity, feedback and guidance as functional parts of the player experience.',
  demonstrates: [
   'Player-guidance and prompt-clarity coverage that checks whether players can understand and trust on-screen state.',
   'Input-method consistency testing across device swaps, rebinding and mixed keyboard/controller input.',
   'UI/UX findings framed through player impact, isolating the exact misunderstanding and the state that creates it.'
  ]
 },
 {
  slug: 'multiplayer-dedicated-server-regression',
  label: 'Case Study',
  kind: 'QA methodology',
  title: 'Multiplayer and Dedicated Server Regression Coverage',
  description: 'Validating multiplayer flows, session recovery, persistence and dedicated server behavior across iterative builds.',
  tags: ['Multiplayer', 'Dedicated Servers', 'Regression'],
  eyebrow: 'Case Study',
  intro: 'Multiplayer QA must account for distributed state, timing and different perspectives. Dedicated servers add persistence and lifecycle conditions that are easy to miss in a single-session pass, so coverage focuses on recovery, authority and consistency across builds.',
  riskIntro: 'A flow can pass for one client while failing for another, or appear correct until a disconnect, rejoin or server restart exposes stale state. Reproduction quality also depends on recording topology, timing and each participant’s perspective.',
  risks: [
   {title: 'Join and rejoin', body: 'Players can fail to enter a valid session or return with incomplete state after interruption.'},
   {title: 'Authority and synchronization', body: 'Clients can disagree about position, ownership, objectives, combat or interactable state.'},
   {title: 'Persistence', body: 'Player or world progress can be lost, duplicated or restored inconsistently across restarts.'},
   {title: 'Recovery behavior', body: 'Disconnect, respawn or migration paths can leave players blocked or invisible to others.'},
   {title: 'Build regression', body: 'Networking changes can affect previously stable flows only under specific topology or timing.'}
  ],
  testFirstIntro: 'Initial coverage targets entry, recovery and persistent state because failures there can invalidate longer multiplayer sessions.',
  testFirst: [
   {
    title: 'Join and rejoin flow',
    whyItMatters: 'Players need a reliable path into an active session and back after interruption.',
    whatCouldBreak: 'Connection, spawn, party association, ownership or replicated world state can fail on first join or rejoin.',
    validation: 'Test fresh join, invite, direct join and rejoin after varied disconnect timing while comparing all client views.'
   },
   {
    title: 'Session persistence',
    whyItMatters: 'Dedicated environments often need state to survive player absence or server lifecycle events.',
    whatCouldBreak: 'World changes, inventory, objectives or permissions can revert, duplicate or load partially.',
    validation: 'Establish a known state, remove all clients or restart the server, then verify authoritative and player-specific data.'
   },
   {
    title: 'Player state after reconnect',
    whyItMatters: 'Recovery must restore a playable, synchronized state rather than only reconnect the socket.',
    whatCouldBreak: 'Position, health, equipment, team, chat, respawn state or active objectives can desync.',
    validation: 'Disconnect during representative states, reconnect from the same and another client, and compare local, remote and server outcomes.'
   },
   {
    title: 'Server-specific regressions',
    whyItMatters: 'Listen-server behavior can hide authority or lifecycle issues that only appear on dedicated servers.',
    whatCouldBreak: 'Initialization, cleanup, scheduled events, permissions or server-only logic can differ between environments.',
    validation: 'Repeat critical flows across supported topology with matched conditions and capture server logs or state evidence where available.'
   },
   {
    title: 'Multiplayer UI and communication feedback',
    whyItMatters: 'Players need accurate status when networking actions succeed, fail or are delayed.',
    whatCouldBreak: 'Party, chat, connection, respawn or session messages can be stale, missing or visible to the wrong audience.',
    validation: 'Exercise state changes and failures from each role, checking timing, recipient scope, retry guidance and final displayed state.'
   }
  ],
  chartersIntro: 'Multiplayer charters define topology, roles and interruption timing so findings remain reproducible.',
  charters: [
   {name: 'Rejoin and Session Recovery', goal: 'Confirm a disconnected player can return to a coherent session state.', focus: 'Disconnect timing, reconnect path, spawn, ownership, inventory and remote visibility.', risks: 'Blocked rejoin, duplicate player state, wrong spawn and client disagreement.'},
   {name: 'Persistence Across Server Restart', goal: 'Verify intended player and world state survives a dedicated server restart.', focus: 'Saved world changes, progression, inventory, permissions and server initialization.', risks: 'Rollback, duplication, partial load and mismatched player/server records.'},
   {name: 'Multiplayer State Regression', goal: 'Exercise critical cooperative or competitive flows around the latest build changes.', focus: 'Changed systems, adjacent replication, late join, respawn and session cleanup.', risks: 'State-specific regression, stale replication and unrecoverable session state.'},
   {name: 'Client/Server Behavior Comparison', goal: 'Identify differences between client views and the authoritative result.', focus: 'Position, interaction, combat, objectives, messaging and timing under latency.', risks: 'Desync, incorrect authority, misleading feedback and role-specific failure.'}
  ],
  reportingIntro: 'Multiplayer reports must make the environment and event sequence reconstructable.',
  reportingPoints: [
   'Record build, server type, region, client count, roles, latency conditions and session age.',
   'Provide a timestamped action sequence and separate observed results for each affected client and the server.',
   'Explain player impact, recovery options, repro rate, severity and release priority.',
   'Attach synchronized video, logs or state captures when timing or authority is central to the defect.'
  ],
  reportingClosing: 'Clear topology and perspective prevent multiplayer issues from becoming vague “desync” reports that the team cannot act on.',
  releaseTitle: 'Release and regression value',
  releaseIntro: 'Repeatable multiplayer coverage protects core session flows while keeping expensive matrix testing focused on risk.',
  releasePoints: [
   'Maintain smoke coverage for join, rejoin, respawn, communication and clean session exit.',
   'Select regression topology from the changed system and its authority dependencies.',
   'Verify fixes with the original timing and at least one adjacent recovery path.',
   'Track unresolved persistence or synchronization risks by player impact and environment.'
  ],
  releaseClosing: 'This provides a defensible release-readiness view without pretending every network condition can receive equal coverage.',
  artifact: {
   kind: 'Regression checklist',
   title: 'Multiplayer / dedicated-server smoke & regression checklist',
   intro: 'A repeatable checklist I run after networking changes, before expanding into the full topology matrix.',
   items: [
    'Fresh join, invite join and direct join each reach a playable, synchronized state',
    'Rejoin after disconnect restores position, inventory, team and active objectives',
    'Player and world state survive a dedicated-server restart without rollback or duplication',
    'Respawn and host/authority migration leave no player blocked or invisible to others',
    'Client views agree with the authoritative server result for position, combat and interactables',
    'Party, chat and connection messages reach the correct recipients with accurate status',
    'Clean session exit releases the slot and leaves no orphaned state',
    'Fix verification repeats the original timing plus one adjacent recovery path'
   ]
  },
  closing: 'This case study demonstrates structured multiplayer investigation, focused regression coverage and reporting built around state, timing and player impact.',
  demonstrates: [
   'Session recovery and persistence validation across disconnects, rejoins and dedicated-server restarts.',
   'Topology-aware multiplayer testing that compares client views against the authoritative server result.',
   'Reporting built around timing, state and player impact so multiplayer issues stay reproducible and actionable.'
  ]
 }
];

export function getCaseStudy(slug: string) {
 return caseStudies.find(caseStudy => caseStudy.slug === slug);
}
