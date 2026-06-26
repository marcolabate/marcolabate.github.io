'use client';

import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { YouTubeTrailer } from '@/components/video/YouTubeTrailer';
import type { CaseStudyReferenceMaterial as CaseStudyReferenceMaterialData } from '@/data/caseStudies';

export function CaseStudyReferenceMaterial({reference}: {reference: CaseStudyReferenceMaterialData}) {
 return <Card className="mt-6 max-w-3xl !p-5">
  <div>
   <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
    <div>
     <h2 className="text-lg font-bold text-primary">{reference.heading}</h2>
     <p className="mt-2 text-sm leading-relaxed text-secondary">{reference.body}</p>
    </div>
    <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
     {reference.links.map(link => (
      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="group/ref focus-ring inline-flex items-center gap-1.5 rounded-full border border-line bg-buttonSecondary/80 px-3.5 py-2 text-sm font-semibold text-buttonSecondaryText transition hover:border-cyan hover:bg-elevated hover:text-cyan">
       {link.label}
       <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 motion-safe:group-hover/ref:translate-x-0.5 motion-safe:group-hover/ref:-translate-y-0.5 motion-safe:group-focus-visible/ref:translate-x-0.5 motion-safe:group-focus-visible/ref:-translate-y-0.5" aria-hidden="true"/>
       <span className="sr-only"> (opens in a new tab)</span>
      </a>
     ))}
    </div>
   </div>
   {reference.youtube&&<>
    <YouTubeTrailer
     youtubeId={reference.youtube.id}
     title={reference.youtube.title}
     thumbnailSrc={reference.youtube.thumbnailSrc}
     thumbnailFallbackSrc={reference.youtube.thumbnailFallbackSrc}
     caption={reference.youtube.caption}
    />
   </>}
  </div>
 </Card>;
}
