import type { Metadata } from 'next';
import { LegacyRedirect } from '@/components/LegacyRedirect';
import { legacyRedirectMeta } from '@/lib/site';

export const metadata: Metadata = legacyRedirectMeta('/skills/');

export default function LegacySkills(){return <LegacyRedirect to="/skills/"/>}
