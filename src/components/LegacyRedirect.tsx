import Link from 'next/link';

export function LegacyRedirect({to}:{to:string}){
 return <main className="flex min-h-screen items-center justify-center p-8 text-center"><div><meta httpEquiv="refresh" content={`0;url=${to}`}/><script dangerouslySetInnerHTML={{__html:`window.location.replace(${JSON.stringify(to)});`}}/><h1 className="text-2xl font-bold text-primary">Redirecting</h1><p className="mt-4 text-muted">This page has moved.</p><Link className="focus-ring mt-6 inline-block rounded-sm font-semibold text-cyan hover:text-cyanHover" href={to}>Continue to the new URL</Link></div></main>
}
