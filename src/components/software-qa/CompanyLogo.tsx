'use client';

import { useState } from 'react';

type CompanyLogoProps = {
 companyName:string;
 logoSrc:string;
 logoAlt:string;
 fallbackInitials:string;
};

export function CompanyLogo({companyName,logoSrc,logoAlt,fallbackInitials}:CompanyLogoProps){
 const [hasImage,setHasImage]=useState(true);

 return <div className="logo-tile relative flex h-full w-full items-center justify-center rounded-xl px-6 py-4 shadow-inner">
  {hasImage?<img
   src={logoSrc}
   alt={logoAlt}
   className="max-h-14 w-full max-w-48 object-contain"
   loading="lazy"
   decoding="async"
   onError={()=>setHasImage(false)}
  />:<span className="text-3xl font-black tracking-tight text-white" aria-label={`${companyName} logo`}>{fallbackInitials}</span>}
 </div>;
}
