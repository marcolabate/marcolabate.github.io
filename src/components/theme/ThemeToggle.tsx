'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

function applyTheme(theme:Theme){
 document.documentElement.dataset.theme=theme;
 document.documentElement.style.colorScheme=theme;
}

export function ThemeToggle(){
 const [theme,setTheme]=useState<Theme>('dark');
 useEffect(()=>{
  const current=document.documentElement.dataset.theme==='light'?'light':'dark';
  setTheme(current);
 },[]);
 const toggle=()=>{
  const next:Theme=theme==='dark'?'light':'dark';
  try{localStorage.setItem('theme',next)}catch{}
  applyTheme(next);
  setTheme(next);
 };
 const nextTheme=theme==='dark'?'light':'dark';
 return <button type="button" onClick={toggle} className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-buttonSecondary/80 text-buttonSecondaryText transition hover:border-cyan hover:bg-elevated" aria-label={`Switch to ${nextTheme} theme`} aria-pressed={theme==='light'} title={`${theme==='dark'?'Dark':'Light'} theme active. Switch to ${nextTheme}.`}>
  {theme==='dark'?<Moon aria-hidden="true" size={17}/>:<Sun aria-hidden="true" size={17}/>}
  <span className="sr-only">{theme==='dark'?'Dark':'Light'} theme active</span>
 </button>;
}
