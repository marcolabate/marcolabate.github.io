'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Header(){
 const [open,setOpen]=useState(false);
 const pathname=usePathname();
 const home='/';
 const nav=[
  {href:home,label:'Home'},
  {href:'/projects/',label:'Projects'},
  {href:'/case-studies/',label:'Case Studies'},
  {href:'/beyond-game-qa/',label:'Software QA'},
  {href:'/about/',label:'About'},
  {href:'/contact/',label:'Contact'}
 ];
 const isActive=(href:string)=>href===home?pathname===home:(pathname===href||pathname.startsWith(href));
 return <header className="sticky top-0 z-50 border-b border-line bg-nav/90 text-primary backdrop-blur">
  <Container className="flex items-center justify-between py-4">
   <Link href={home} className="focus-ring rounded-sm font-bold tracking-tight">Marco Labate<span className="text-cyan"> QA</span></Link>
   <div className="flex items-center gap-3">
    <nav aria-label="Primary" className="hidden items-center gap-5 text-sm text-secondary lg:flex">
     {nav.map(item=>{const active=isActive(item.href);return <Link key={item.href} href={item.href} aria-current={active?'page':undefined} className={`link-underline focus-ring rounded-sm transition hover:text-primary ${active?'font-semibold text-primary':''}`}>{item.label}</Link>})}
    </nav>
    <ThemeToggle/>
    <button className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full text-primary lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button>
   </div>
  </Container>
  {open&&<div className="border-t border-line bg-nav lg:hidden">
   <Container className="py-4">
    <nav aria-label="Primary">
     {nav.map(item=>{const active=isActive(item.href);return <Link onClick={()=>setOpen(false)} aria-current={active?'page':undefined} className={`focus-ring block rounded-sm py-3 hover:text-primary ${active?'font-semibold text-primary':'text-secondary'}`} key={item.href} href={item.href}>{item.label}</Link>})}
    </nav>
   </Container>
  </div>}
 </header>;
}
