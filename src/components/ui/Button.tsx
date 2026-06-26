import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonProps = {
 href: string;
 children: React.ReactNode;
 variant?: 'primary'|'secondary'|'ghost';
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'download'|'rel'|'target'>;

export function Button({href,children,variant='primary',download,rel,target}:ButtonProps){const c=variant==='primary'?'bg-buttonPrimary text-buttonPrimaryText shadow-card hover:bg-buttonPrimaryHover':variant==='secondary'?'border border-line bg-buttonSecondary/80 text-buttonSecondaryText hover:border-cyan hover:bg-elevated':'text-primary hover:text-cyan';return <Link className={`focus-ring inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:focus-visible:-translate-y-0.5 ${c}`} href={href} download={download} rel={rel} target={target}>{children}</Link>}
