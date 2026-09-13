'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { publicCvPath, publicCvDownloadName } from '@/lib/site';

const navigation = [
 { href: '/selected-work/', label: 'Work' },
 { href: '/beyond-game-qa/', label: 'Software QA' },
 { href: '/about/', label: 'About' },
 { href: '/contact/', label: 'Contact' }
];
export function Header() {
 const pathname = usePathname();
 const active = (href: string) => href === '/selected-work/'
  ? ['/selected-work', '/projects', '/case-studies'].some(path => pathname.startsWith(path))
  : href === '/about/'
   ? ['/about', '/skills', '/certifications'].some(path => pathname.startsWith(path))
   : pathname.startsWith(href.replace(/\/$/, ''));
 return <header className="site-header"><Container className="header-inner">
  <Link href="/" className="brand focus-ring" aria-label="Marco Labate, home">Marco Labate<span className="brand-qa">QA</span></Link>
  <nav aria-label="Primary" className="primary-nav">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={active(item.href) ? 'page' : undefined} className="focus-ring">{item.label}</Link>)}</nav>
  <a href={publicCvPath} download={publicCvDownloadName} className="cv-link focus-ring"><Download size={16} aria-hidden="true"/>Download CV</a>
 </Container></header>;
}
