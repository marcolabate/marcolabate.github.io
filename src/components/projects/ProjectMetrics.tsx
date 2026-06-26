'use client';

import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { ProjectMetric } from '@/types/project';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/motion/Reveal';

type ProjectMetricsProps = {
 projectTitle:string;
 metrics?:ProjectMetric[];
};

const animationDuration = 1000;

function getReadableValue(value:string){
 return value
  .replace(/(\d+)M\+/g,'$1 million plus')
  .replace(/(\d+)K\+/g,'$1 thousand plus')
  .replace(/(\d+)\+/g,'$1 plus');
}

function formatAnimatedValue(metric:ProjectMetric,current:number){
 const rounded=Math.min(metric.numericValue??current,Math.round(current));
 return `${metric.prefix??''}${rounded.toLocaleString('en-US')}${metric.suffix??''}`;
}

function AnimatedMetricValue({metric,animate}:{metric:ProjectMetric;animate:boolean}){
 const [displayValue,setDisplayValue]=useState(metric.value);

 useEffect(()=>{
  if(metric.numericValue===undefined||!animate){
   setDisplayValue(metric.value);
   return;
  }

  let frameId=0;
  const startTime=performance.now();

  const tick=(now:number)=>{
   const progress=Math.min((now-startTime)/animationDuration,1);
   const eased=1-Math.pow(1-progress,3);
   const nextValue=metric.numericValue!*eased;
   setDisplayValue(progress===1?metric.value:formatAnimatedValue(metric,nextValue));
   if(progress<1)frameId=requestAnimationFrame(tick);
  };

  setDisplayValue(formatAnimatedValue(metric,0));
  frameId=requestAnimationFrame(tick);

  return ()=>cancelAnimationFrame(frameId);
 },[animate,metric]);

 return <span aria-label={`${metric.label}: ${getReadableValue(metric.value)}`} aria-live="off">{displayValue}</span>;
}

function useReducedMotion(){
 const [reducedMotion,setReducedMotion]=useState<boolean|null>(null);

 useEffect(()=>{
  if(typeof window==='undefined'||typeof window.matchMedia!=='function'){
   setReducedMotion(false);
   return;
  }

  const mediaQuery=window.matchMedia('(prefers-reduced-motion: reduce)');
  const update=()=>setReducedMotion(mediaQuery.matches);
  update();
  if(typeof mediaQuery.addEventListener==='function'){
   mediaQuery.addEventListener('change',update);
   return ()=>mediaQuery.removeEventListener('change',update);
  }
  mediaQuery.addListener(update);
  return ()=>mediaQuery.removeListener(update);
 },[]);

 return reducedMotion;
}

export function ProjectMetrics({projectTitle,metrics}:ProjectMetricsProps){
 const gridRef=useRef<HTMLDivElement>(null);
 const [hasEntered,setHasEntered]=useState(false);
 const reducedMotion=useReducedMotion();

 useEffect(()=>{
  const grid=gridRef.current;
  if(!grid||hasEntered||reducedMotion===null)return;
  if(reducedMotion||typeof IntersectionObserver==='undefined'){
   setHasEntered(true);
   return;
  }

  const observer=new IntersectionObserver(entries=>{
   for(const entry of entries){
    if(entry.isIntersecting){
     setHasEntered(true);
     observer.disconnect();
     break;
    }
   }
  },{rootMargin:'0px 0px -10% 0px',threshold:.2});

  observer.observe(grid);
  return ()=>observer.disconnect();
 },[hasEntered,reducedMotion]);

 if(!metrics?.length)return null;

 const gridColumns=metrics.length>=4?'lg:grid-cols-4':'lg:grid-cols-3';
 const animate=hasEntered&&reducedMotion===false;

 return <section className="pb-10 sm:pb-12" aria-labelledby="public-project-metrics">
  <Container>
   <Reveal>
    <div className="border-t border-line pt-8">
     <div className="max-w-3xl">
      <h2 id="public-project-metrics" className="text-xl font-bold text-primary">Public project metrics</h2>
      <p className="mt-2 text-sm leading-relaxed text-secondary">Publicly available indicators that provide context for the project's market presence and player reception.</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[.18em] text-cyan">Last checked: June 2026</p>
     </div>
     <div ref={gridRef} className={`mt-5 grid gap-3 sm:grid-cols-2 ${gridColumns}`}>
      {metrics.map(metric=><article key={`${metric.label}-${metric.sourceUrl}`} className="rounded-2xl border border-line bg-card/70 p-4 backdrop-blur transition-colors duration-200 hover:border-cyan/35 hover:bg-elevated/80">
       <p className="text-2xl font-bold tracking-normal text-primary sm:text-3xl">
        <AnimatedMetricValue metric={metric} animate={animate}/>
       </p>
       <p className="mt-1 text-xs font-semibold uppercase tracking-[.18em] text-muted">{metric.label}</p>
      </article>)}
     </div>
     <div className="mt-5 border-t border-line pt-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
       <div>
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan">Sources</p>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
         {metrics.map(metric=><li key={`source-${metric.label}-${metric.sourceUrl}`}>
          <a href={metric.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${projectTitle} metrics source for ${metric.label} on ${metric.sourceName}`} className="focus-ring group/source inline-flex items-center gap-1 rounded-sm transition hover:text-cyan">
           {metric.label}: {metric.sourceName}
           <ExternalLink className="h-3 w-3 transition-transform duration-200 motion-safe:group-hover/source:translate-x-0.5 motion-safe:group-hover/source:-translate-y-0.5 motion-safe:group-focus-visible/source:translate-x-0.5 motion-safe:group-focus-visible/source:-translate-y-0.5" aria-hidden="true"/>
           <span className="sr-only"> (opens in a new tab)</span>
          </a>
         </li>)}
        </ul>
       </div>
       <p className="max-w-sm text-xs leading-relaxed text-muted">Public metrics are based on publicly available store or press information and may change over time.</p>
      </div>
      {metrics.some(metric=>metric.sourceNote)&&<ul className="mt-3 space-y-1 text-xs leading-relaxed text-muted">
       {metrics.filter(metric=>metric.sourceNote).map(metric=><li key={`note-${metric.label}`}>{metric.sourceNote}</li>)}
      </ul>}
     </div>
    </div>
   </Reveal>
  </Container>
 </section>;
}
