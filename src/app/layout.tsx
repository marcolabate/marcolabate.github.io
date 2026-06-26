import type { Metadata } from 'next';
import './globals.css';
import { siteUrl, siteName, positioning, defaultOgImage } from '@/lib/site';

export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title: { default: siteName, template: '%s · Marco Labate' },
 description: positioning,
 alternates: { canonical: '/' },
 openGraph: {
  title: siteName,
  description: positioning,
  url: '/',
  siteName,
  type: 'website',
  images: [{ url: defaultOgImage }]
 },
 twitter: {
  card: 'summary_large_image',
  title: siteName,
  description: positioning,
  images: [defaultOgImage]
 }
};

const themeScript=`(()=>{document.documentElement.classList.add('js');try{const saved=localStorage.getItem('theme');const theme=saved==='light'||saved==='dark'?saved:'dark';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch{document.documentElement.dataset.theme='dark'}})()`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body>{children}</body></html>}
