import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
export function Footer() {
 return <footer className="site-footer"><Container>
  <div className="footer-top"><p>© {new Date().getFullYear()} Marco Labate</p><div className="footer-links"><Link href="/privacy/" className="text-link">Privacy / Cookie Notice</Link><ThemeToggle/></div></div>
  <p className="footer-attribution">Game artwork, titles, logos and trademarks belong to their respective owners and are used for portfolio identification.</p>
 </Container></footer>;
}
