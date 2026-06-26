export type TimelineEntry = {
 period: string;
 org: string;
 title: string;
 detail: string;
};

// Professional timeline used to substantiate the "10+ years" and "100+ game
// titles/projects" positioning. Kept factual and high-level; some engagements are
// summarized rather than individually listed.
export const timeline: TimelineEntry[] = [
 {
  period: '2016 – 2023',
  org: 'Keywords Studios',
  title: 'Game QA Analyst',
  detail: 'Functional, compatibility, localization and regression QA across a high volume of PC, console, mobile and VR titles/projects in a large-scale games outsourcing environment.'
 },
 {
  period: '2020 – Present',
  org: 'DAQA',
  title: 'Project-based Game QA / Embedded DevQA',
  detail: 'Project-based focus testing and playtesting collaboration running in parallel with main QA roles since 2020, later expanding into embedded DevQA support from 2025.'
 },
 {
  period: '2023 – Present',
  org: 'Enterprise Software QA',
  title: 'UAT, Regression & Data Validation',
  detail: 'Software QA across banking, finance and enterprise platforms, covering UAT, regression, requirements validation, test case design, defect verification, SQL/data checks, XML validation, logs, workflow state analysis and backend data investigation.'
 }
];
