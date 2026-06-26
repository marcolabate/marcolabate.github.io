import type { Metadata } from 'next';
import { LegacyRedirect } from '@/components/LegacyRedirect';
import { legacyRedirectMeta } from '@/lib/site';

export const metadata: Metadata = legacyRedirectMeta('/contact/');

export default function LegacyContact(){return <LegacyRedirect to="/contact/"/>}
