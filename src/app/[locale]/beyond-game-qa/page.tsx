import type { Metadata } from 'next';
import { LegacyRedirect } from '@/components/LegacyRedirect';
import { legacyRedirectMeta } from '@/lib/site';

export const metadata: Metadata = legacyRedirectMeta('/beyond-game-qa/');

export default function LegacyBeyondGameQa(){return <LegacyRedirect to="/beyond-game-qa/"/>}
