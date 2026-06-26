import type { Metadata } from 'next';
import './globals.css';
import { siteUrl, siteName, siteTitle, positioning, defaultOgImage } from '@/lib/site';

export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title: { default: siteTitle, template: '%s | Marco Labate' },
 description: positioning,
 alternates: { canonical: '/' },
 openGraph: {
  title: siteTitle,
  description: positioning,
  url: '/',
  siteName,
  type: 'website',
  images: [{ url: defaultOgImage }]
 },
 twitter: {
  card: 'summary_large_image',
  title: siteTitle,
  description: positioning,
  images: [defaultOgImage]
 }
};

const themeScript=`(()=>{document.documentElement.classList.add('js');try{const saved=localStorage.getItem('theme');const theme=saved==='light'||saved==='dark'?saved:'dark';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch{document.documentElement.dataset.theme='dark'}})()`;
// Minimal, factual structured data to support rich results and entity discovery.
const jsonLd={
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'WebSite',name:siteTitle,url:siteUrl},
  {'@type':'Person',name:'Marco Labate',jobTitle:'Senior Game QA / DevQA Analyst',url:siteUrl,sameAs:['https://www.linkedin.com/in/marco-labate/']}
 ]
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></head><body>{children}</body></html>}
