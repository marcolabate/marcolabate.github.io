import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { PageHeader, CertificationGrid } from '@/components/sections';
import { noindexMeta } from '@/lib/site';

export const metadata: Metadata = noindexMeta({
 title: 'Certifications',
 description: 'Completed QA certifications held by Marco Labate.',
 path: '/certifications/'
});

export default function Certifications(){return <><PageHeader eyebrow="Certifications" title="QA certifications."><p>Completed, verified QA certifications. This list reflects credentials already obtained.</p></PageHeader><section className="py-16"><Container><CertificationGrid/></Container></section></>}
