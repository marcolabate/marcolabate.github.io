'use client';

import { useEffect, useRef } from 'react';

const poster = '/videos/portfolio-trailer-poster.webp';

function shouldReduceMotion() {
 return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function HeroVideo() {
 const videoRef = useRef<HTMLVideoElement>(null);

 useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  if (shouldReduceMotion()) {
   video.pause();
   return;
  }

  let attempts = 0;
  const maxAttempts = 4;

  const playVideo = () => {
   if (attempts >= maxAttempts || shouldReduceMotion()) return;
   attempts += 1;

   video.muted = true;
   video.defaultMuted = true;
   video.playsInline = true;

   const playAttempt = video.play();
   if (playAttempt) {
    playAttempt.catch((error) => {
     if (process.env.NODE_ENV === 'development') {
      console.debug('Hero video autoplay was deferred by the browser.', error);
     }
    });
   }
  };

  const retryIfPaused = () => {
   if (video.paused) playVideo();
  };

  const handleVisibilityChange = () => {
   if (document.visibilityState === 'visible' && video.paused) playVideo();
  };

  playVideo();
  video.addEventListener('loadeddata', retryIfPaused, { once: true });
  video.addEventListener('canplay', retryIfPaused, { once: true });
  document.addEventListener('visibilitychange', handleVisibilityChange);

  return () => {
   video.removeEventListener('loadeddata', retryIfPaused);
   video.removeEventListener('canplay', retryIfPaused);
   document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
 }, []);

 return (
  <video
   ref={videoRef}
   autoPlay
   loop
   muted
   playsInline
   controls={false}
   preload="auto"
   poster={poster}
   className="hero-media absolute inset-0 h-full w-full object-cover object-[58%_center] motion-reduce:hidden"
  >
   <source src="/videos/portfolio-trailer.mp4" type="video/mp4" />
   <source src="/videos/portfolio-trailer.webm" type="video/webm" />
  </video>
 );
}
