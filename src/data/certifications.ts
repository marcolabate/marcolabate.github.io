export type Certification = {
 title: string;
 issuer: string;
 status: 'Completed';
 description: string;
};

// Only verified, completed certifications are published. Planned or aspirational
// credentials are intentionally omitted to keep the page recruiter-credible.
export const certifications: Certification[] = [
 {
  title: 'Foundation Certificate in Game Quality',
  issuer: 'Game Quality',
  status: 'Completed',
  description: 'Certification covering the foundations of game quality assurance and structured testing practice.'
 }
];
