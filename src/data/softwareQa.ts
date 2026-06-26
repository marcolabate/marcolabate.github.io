export type SoftwareQaSection = {
 title:string;
 description:string;
 points:string[];
};

export type SoftwareQaExperience = {
 companyName:string;
 logoSrc:string;
 logoAlt:string;
 fallbackInitials:string;
 role:string;
 engagementType:string;
 date:string;
 tags:string[];
 description:string;
 bullets:string[];
};

export const softwareQaExperience: SoftwareQaExperience[] = [
 {
  companyName:'IBM',
  logoSrc:'/assets/company-logos/ibm.svg',
  logoAlt:'IBM logo',
  fallbackInitials:'IBM',
  role:'QA Consultant / Test Analyst',
  engagementType:'Consulting engagement · completed',
  date:'Sep 2023 – Jun 2025',
  tags:['Banking','Finance','UAT','Regression','Mobile / Web'],
  description:'Supported QA activities across banking and financial services projects, covering functional testing, regression, requirements analysis, test case design, defect tracking and stakeholder-facing QA updates across mobile and web platforms.',
  bullets:['Banking and financial services QA','Mobile and web application testing','Requirements analysis and test scenario design','Functional, regression and end-to-end testing','Defect reporting, follow-up and stakeholder communication']
 },
 {
  companyName:'Kosmoy',
  logoSrc:'/assets/company-logos/kosmoy.svg',
  logoAlt:'Kosmoy logo',
  fallbackInitials:'K',
  role:'Senior QA Consultant',
  engagementType:'Freelance / consulting engagement · ongoing',
  date:'Jun 2025 – Present',
  tags:['QA Ownership','Agile','Exploratory Testing','Jira','Process Building'],
  description:'Primary QA reference inside an Agile engineering team, helping define the QA process from scratch through risk-based testing, exploratory strategy, Jira-based coverage, bug intake, documentation improvements and system-level validation.',
  bullets:['QA process definition','Risk-based test planning','Exploratory and integration testing','Jira-based test coverage','Bug intake and defect lifecycle management','Documentation and quality process improvements']
 },
 {
  companyName:'TXT Group',
  logoSrc:'/assets/company-logos/txt-group.png',
  logoAlt:'TXT Group logo',
  fallbackInitials:'TXT',
  role:'Senior QA Finance Consultant',
  engagementType:'Freelance / consulting engagement · ongoing',
  date:'Mar 2026 – Present',
  tags:['Finance','UAT','Oracle SQL','XML','Defect Analysis'],
  description:'Supported UAT, data validation and defect analysis for enterprise finance systems, focusing on accounting flows, electronic invoicing, Oracle SQL/PLSQL checks, XML validation and business-critical workflow verification.',
  bullets:['UAT test case design and execution','Oracle SQL and PL/SQL validation','XML, logs and workflow state checks','Finance and invoicing workflow testing','Defect reports with technical evidence and impact assessment']
 }
];

export const softwareQaSections: SoftwareQaSection[] = [
 {
  title:'Enterprise QA & UAT',
  description:'Supported Software QA across enterprise, finance and banking environments, with a focus on functional testing, UAT, regression coverage, requirements validation and end-to-end workflow verification. This work helped translate business expectations into stable scenarios, clear documentation and actionable defects.',
  points:['UAT planning and execution','Functional and regression testing','Requirements validation','Test case and testbook maintenance','End-to-end workflow validation','Release-readiness checks']
 },
 {
  title:'SQL, Data & Backend Validation',
  description:'A significant part of my Software QA work involves using SQL and backend evidence to validate data consistency, process states, logs, XML payloads and workflow outcomes. This helps turn unclear issues into reproducible defects with stronger technical evidence.',
  points:['Oracle SQL and PL/SQL checks','Data consistency validation','XML and log investigation','Workflow state verification','Controlled UAT dataset preparation','Technical evidence for defect analysis']
 },
 {
  title:'QA Ownership & Process Building',
  description:'Worked as a QA owner inside fast-moving Agile teams, helping define quality practices from scratch through risk-based planning, exploratory strategy, Jira-based coverage, bug intake, documentation improvements and early validation of complex system behavior.',
  points:['QA process definition','Risk-based testing','Exploratory testing strategy','Jira-based test coverage','Bug intake and defect lifecycle management','Documentation as part of product quality']
 },
 {
  title:'Stakeholder Communication',
  description:'Acted as a quality reference point across technical teams, business stakeholders and clients. Focused on making risks, blockers, defects and QA status clear, actionable and easy to track.',
  points:['Clear defect reports','Status updates and QA summaries','Risk and blocker communication','Collaboration with developers, analysts and stakeholders','Translating technical issues into practical impact']
 }
];
