import type { Metadata } from 'next';
import { LegacyRedirect } from '@/components/LegacyRedirect';
import { legacyRedirectMeta } from '@/lib/site';

export const metadata: Metadata = legacyRedirectMeta('/certifications/');

export default function LegacyCertifications(){return <LegacyRedirect to="/certifications/"/>}
