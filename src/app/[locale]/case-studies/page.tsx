import type { Metadata } from 'next';
import { LegacyRedirect } from '@/components/LegacyRedirect';
import { legacyRedirectMeta } from '@/lib/site';

export const metadata: Metadata = legacyRedirectMeta('/case-studies/');

export default function LegacyCaseStudies(){return <LegacyRedirect to="/case-studies/"/>}
