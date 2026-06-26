import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { PageHeader, SkillsGrid } from '@/components/sections';
import { noindexMeta } from '@/lib/site';

export const metadata: Metadata = noindexMeta({
 title: 'Skills',
 description: 'QA testing capabilities across games and enterprise software.',
 path: '/skills/'
});

export default function Skills(){return <><PageHeader eyebrow="Skills" title="Testing capabilities across games and software."><p>Organized around practical QA execution, technical awareness, communication, and methodologies used in professional teams.</p></PageHeader><section className="py-16"><Container><SkillsGrid headingLevel={2}/></Container></section></>}
