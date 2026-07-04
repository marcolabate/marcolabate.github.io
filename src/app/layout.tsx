import type { Metadata } from 'next';
import './globals.css';
import { siteUrl, siteName, siteTitle, metaDescription, defaultOgImage, ogImageAlt } from '@/lib/site';

export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title: { default: siteTitle, template: '%s | Marco Labate' },
 description: metaDescription,
 alternates: { canonical: '/' },
 openGraph: {
  title: siteTitle,
  description: metaDescription,
  url: '/',
  siteName,
  type: 'website',
  images: [{ url: defaultOgImage, width: 1200, height: 630, type: 'image/png', alt: ogImageAlt }]
 },
 twitter: {
  card: 'summary_large_image',
  title: siteTitle,
  description: metaDescription,
  images: [{ url: defaultOgImage, alt: ogImageAlt }]
 }
};

const themeScript=`(()=>{document.documentElement.classList.add('js');try{const saved=localStorage.getItem('theme');const theme=saved==='light'||saved==='dark'?saved:'dark';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch{document.documentElement.dataset.theme='dark'}})()`;
// Factual structured data to support rich results, entity discovery and
// recruiter/AI-sourcing filters (current engagements, credential, country).
const jsonLd={
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'WebSite','@id':`${siteUrl}/#website`,name:siteName,alternateName:siteTitle,url:siteUrl},
  {
   '@type':'Person',
   '@id':`${siteUrl}/#person`,
   name:'Marco Labate',
   jobTitle:'Senior Game QA / DevQA Analyst',
   url:siteUrl,
   sameAs:['https://www.linkedin.com/in/marco-labate/'],
   address:{'@type':'PostalAddress',addressCountry:'IT'},
   knowsLanguage:['it','en'],
   knowsAbout:['Game QA','Embedded DevQA','Regression testing','Exploratory testing','UAT','SQL data validation','Playtesting'],
   worksFor:[{'@type':'Organization',name:'DAQA'},{'@type':'Organization',name:'Kosmoy'},{'@type':'Organization',name:'TXT Group'}],
   hasCredential:{'@type':'EducationalOccupationalCredential',name:'Foundation Certificate in Game Quality'}
  }
 ]
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></head><body>{children}</body></html>}
