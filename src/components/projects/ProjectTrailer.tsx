'use client';

import type { ProjectTrailer as ProjectTrailerData } from '@/types/project';
import { YouTubeTrailer } from '@/components/video/YouTubeTrailer';

export function ProjectTrailer({ trailer }: { trailer?: ProjectTrailerData }) {
 if (!trailer) return null;

 return <div className="mt-8 border-t border-line pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
  <p className="text-xs font-semibold uppercase tracking-[.25em] text-cyan">Trailer</p>
  <h2 className="mt-3 text-2xl font-bold text-primary">Official trailer</h2>
  <p className="mt-3 text-secondary">Watch the official trailer for a quick look at the project’s tone, gameplay, and presentation.</p>
  <YouTubeTrailer youtubeId={trailer.youtubeId} title={trailer.title} thumbnailSrc={trailer.thumbnailSrc}/>
 </div>;
}
