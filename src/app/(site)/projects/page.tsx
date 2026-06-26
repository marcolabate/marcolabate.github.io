import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { PageHeader, ProjectGrid } from '@/components/sections';
import { pageMeta } from '@/lib/site';

export const metadata: Metadata = pageMeta({
 title: 'Projects',
 description: 'Recent game QA projects: embedded DevQA, structured playtesting, regression, usability, progression and release validation across PC and console.',
 path: '/projects/'
});

export default function Projects(){return <><PageHeader eyebrow="Projects" title="Game QA portfolio work."><p>Project pages use sanitized examples to demonstrate methodology, analytical thinking, and professional communication without disclosing confidential information.</p></PageHeader><section className="py-16"><Container><ProjectGrid headingLevel={2}/></Container></section></>}
