import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegacyRedirect } from '@/components/LegacyRedirect';
import { projects, getProject } from '@/data/projects';
import { locales } from '@/lib/i18n';
import { legacyRedirectMeta } from '@/lib/site';

export function generateStaticParams(){return locales.flatMap(locale=>projects.map(p=>({locale,slug:p.slug})))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 return legacyRedirectMeta(`/projects/${slug}/`);
}

export default async function LegacyProjectDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 if(!getProject(slug))notFound();
 return <LegacyRedirect to={`/projects/${slug}/`}/>;
}
