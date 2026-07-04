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
  detail: 'Functional, compatibility, localization and regression QA across 100+ PC, console, mobile and VR titles/projects in a large-scale games outsourcing environment.'
 },
 {
  period: '2020 – Present',
  org: 'DAQA',
  title: 'Project-based Game QA / Embedded DevQA',
  detail: 'Focus testing and playtesting with DAQA, an external QA partner, covering 30+ titles across publishers and genres and expanding into embedded DevQA on RuneScape: Dragonwilds (Jagex) from 2025.'
 },
 {
  period: '2023 – Present',
  org: 'IBM · Kosmoy · TXT Group',
  title: 'UAT, Regression & Data Validation',
  detail: 'Software QA across banking, finance, enterprise and AI-platform environments for clients including BPER Banca and Edenred, covering UAT, regression, requirements validation, test case design, defect verification, SQL/data checks, XML validation and backend data investigation.'
 }
];
