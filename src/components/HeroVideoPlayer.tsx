"use client";

import { useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";

export function HeroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const whiteOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const overlay = whiteOverlayRef.current;
    if (!video || !overlay) return;

    // Enforce mute properties for Safari and Chrome autoplay policies
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const tryPlay = () => {
      video.play().catch(() => {
        // If the browser still blocks auto-play, trigger on first touch/scroll/click
        const resumeOnInteraction = () => {
          video.play().catch(() => {});
        };
        window.addEventListener("click", resumeOnInteraction, { once: true, passive: true });
        window.addEventListener("touchstart", resumeOnInteraction, { once: true, passive: true });
        window.addEventListener("scroll", resumeOnInteraction, { once: true, passive: true });
      });
    };

    tryPlay();

    // High-performance animation frame loop for silky smooth white dissolve transition
    let animId: number | null = null;
    let isFadingIn = false;
    let isVisible = true;

    const checkTime = () => {
      if (!isVisible) return;

      if (video.duration && !video.paused) {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const timeUntilEnd = duration - currentTime;

        // In the final 0.85s of the video, fade to pure white
        if (timeUntilEnd <= 0.85 && timeUntilEnd > 0) {
          if (!isFadingIn) {
            isFadingIn = true;
            overlay.style.transition = "opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1)";
            overlay.style.opacity = "1";
          }
        } 
        // When video loops back to start (first 0.75s), fade out from white
        else if (currentTime < 0.75) {
          if (isFadingIn) {
            isFadingIn = false;
            // Short delay after loop point before fading out
            setTimeout(() => {
              if (overlay) {
                overlay.style.transition = "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)";
                overlay.style.opacity = "0";
              }
            }, 80);
          }
        } else {
          // Mid-play state: ensure overlay is fully invisible
          if (overlay.style.opacity !== "0" && !isFadingIn) {
            overlay.style.opacity = "0";
          }
        }
      }
      animId = requestAnimationFrame(checkTime);
    };

    animId = requestAnimationFrame(checkTime);

    // Pause video and cancel animation loop when scrolled out of viewport (saves mobile battery & CPU)
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            isVisible = true;
            video.play().catch(() => {});
            if (!animId) {
              animId = requestAnimationFrame(checkTime);
            }
          } else {
            isVisible = false;
            video.pause();
            if (animId) {
              cancelAnimationFrame(animId);
              animId = null;
            }
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(video);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-[16/10] sm:aspect-[16/9] w-full max-w-lg overflow-hidden rounded-2xl border-4 border-white/25 shadow-elevated bg-brand-deep group">
      {/* Soft Ambient Depth Glow behind the player */}
      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-brand-mint/40 via-brand-purple/30 to-brand-teal/30 blur-xl opacity-80 -z-10" />

      {/* Main Looping Video */}
      <video
        ref={videoRef}
        src="/videos/loop-wash.mp4"
        poster="/videos/loop-wash-poster.jpg"
        muted
        autoPlay
        playsInline
        loop
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />

      {/* Elegant White Dissolve Overlay */}
      <div
        ref={whiteOverlayRef}
        className="pointer-events-none absolute inset-0 bg-white z-20 opacity-0 will-change-[opacity]"
        aria-hidden="true"
      />

      {/* Subtle Vignette Protection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-black/15 z-10" />

      {/* Live Badge */}
      <div className="absolute top-4 left-4 z-30 flex items-center gap-2 rounded-full bg-brand-deep/80 px-3.5 py-1.5 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mint opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mint" />
        </span>
        <span className="tracking-wide">Laundro-Hub Care</span>
      </div>

      {/* Quality Indicator */}
      <div className="absolute bottom-4 right-4 z-30 hidden sm:flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-brand-deep shadow-md backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5 text-brand-teal" />
        <span>Fresh Gentle Wash</span>
      </div>
    </div>
  );
}
