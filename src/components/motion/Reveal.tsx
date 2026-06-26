'use client';
import { useEffect, useRef, useState } from 'react';
// Scroll-reveal wrapper. Adds `is-visible` once the element enters the viewport,
// triggering the CSS `reveal-up` animation. Falls back to visible when JS or
// IntersectionObserver is unavailable (the `.js .reveal{opacity:0}` rule only
// hides content when JS is present), and reduced-motion is handled in CSS.
export function Reveal({children,className='',delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
 const ref=useRef<HTMLDivElement>(null);
 const [shown,setShown]=useState(false);
 useEffect(()=>{
  const el=ref.current;
  if(!el)return;
  if(typeof IntersectionObserver==='undefined'){setShown(true);return}
  const io=new IntersectionObserver(entries=>{
   for(const e of entries){if(e.isIntersecting){setShown(true);io.disconnect();break}}
  },{rootMargin:'0px 0px -8% 0px',threshold:.12});
  io.observe(el);
  return ()=>io.disconnect();
 },[]);
 const style=delay?({['--reveal-delay']:`${delay}ms`} as React.CSSProperties):undefined;
 return <div ref={ref} className={`reveal${shown?' is-visible':''}${className?' '+className:''}`} style={style}>{children}</div>;
}
