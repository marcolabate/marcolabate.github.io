'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';

type YouTubeTrailerProps = {
 youtubeId: string;
 title: string;
 thumbnailSrc: string;
 thumbnailFallbackSrc?: string;
 caption?: string;
};

export function YouTubeTrailer({youtubeId,title,thumbnailSrc,thumbnailFallbackSrc,caption}:YouTubeTrailerProps) {
 const [isLoaded,setIsLoaded]=useState(false);
 const [thumbnail,setThumbnail]=useState(thumbnailSrc);

 return <>
  <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-line bg-section">
   {isLoaded?<iframe
    className="h-full w-full"
    src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
    title={title}
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
   />:<div className="relative h-full w-full">
    <img
     src={thumbnail}
     alt=""
     className="h-full w-full object-cover"
     loading="lazy"
     decoding="async"
     onError={()=>thumbnailFallbackSrc&&thumbnail!==thumbnailFallbackSrc&&setThumbnail(thumbnailFallbackSrc)}
    />
    <div className="absolute inset-0 flex items-center justify-center bg-[rgba(7,10,18,.58)] p-4">
     <button type="button" onClick={()=>setIsLoaded(true)} className="focus-ring inline-flex items-center gap-2 rounded-full bg-buttonPrimary px-5 py-3 text-sm font-semibold text-buttonPrimaryText shadow-card transition hover:bg-buttonPrimaryHover motion-safe:hover:-translate-y-0.5" aria-label={`Load ${title}`}>
      <Play className="h-4 w-4" fill="currentColor" aria-hidden="true"/>
      Load video
     </button>
    </div>
   </div>}
  </div>
  {caption&&<p className="mt-3 text-xs leading-relaxed text-muted">{caption}</p>}
  <p className={`${caption?'mt-2':'mt-3'} text-xs leading-relaxed text-muted`}>This video is hosted by YouTube. Playing it may allow YouTube/Google to process data according to their own policies.</p>
 </>;
}
