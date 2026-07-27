export type Certification = {
 id: string;
 title: string;
 abbreviation?: string;
 version?: string;
 issuer: string;
 issuedDate: string;
 issuedLabel: string;
 status: 'Completed';
 description: string;
 credentialId?: string;
 credentialUrl?: string;
 expiresLabel?: string;
};

// Only verified, completed certifications are published. Planned or aspirational
// credentials are intentionally omitted to keep the page recruiter-credible.
export const certifications: Certification[] = [
 {
  id: 'game-quality-foundation',
  title: 'Foundation Certificate in Game Quality',
  issuer: 'Game Quality',
  issuedDate: '2025',
  issuedLabel: 'Issued 2025',
  status: 'Completed',
  description: 'Certification covering the foundations of game quality assurance and structured testing practice.'
 },
 {
  id: 'istqb-ctfl-v4',
  title: 'ISTQB® Certified Tester Foundation Level (CTFL) v4.0',
  abbreviation: 'CTFL',
  version: '4.0',
  issuer: 'ITA-STQB / ISTQB®',
  issuedDate: '2026-07',
  issuedLabel: 'Issued July 2026',
  status: 'Completed',
  description: 'Internationally recognized foundation certification covering software testing fundamentals, testing throughout the software development lifecycle, static testing, test analysis and design, test management, and test tools.'
 }
];
