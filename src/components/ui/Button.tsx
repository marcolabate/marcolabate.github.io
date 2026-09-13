import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
type ButtonProps = {href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'ghost'} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'download' | 'rel' | 'target'>;
export function Button({href, children, variant = 'primary', download, rel, target}: ButtonProps) {
 const className = `button button-${variant} focus-ring`;
 return download ? <a {...{href, download, rel, target, className}}>{children}</a> : <Link {...{href, rel, target, className}}>{children}</Link>;
}
