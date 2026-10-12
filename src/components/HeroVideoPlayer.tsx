"use client";

import { useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";

export function HeroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Guarantee all DOM properties required for mobile & desktop autoplay
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("x5-playsinline", "");

    const playVideo = () => {
      if (!video) return;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Autoplay was blocked pending gesture; fallback listeners will handle it
        });
      }
    };

    // Attempt playback immediately
    playVideo();

    // Re-trigger as soon as media chunks load
    video.addEventListener("loadedmetadata", playVideo);
    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);

    // Fallback: If device is in Low Power Mode / battery saver, resume on first user interaction
    const triggerOnGesture = () => {
      playVideo();
    };

    window.addEventListener("touchstart", triggerOnGesture, { once: true, passive: true });
    window.addEventListener("touchend", triggerOnGesture, { once: true, passive: true });
    window.addEventListener("click", triggerOnGesture, { once: true, passive: true });
    window.addEventListener("scroll", triggerOnGesture, { once: true, passive: true });

    const handleVisibility = () => {
      if (!document.hidden) playVideo();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("loadedmetadata", playVideo);
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
      window.removeEventListener("touchstart", triggerOnGesture);
      window.removeEventListener("touchend", triggerOnGesture);
      window.removeEventListener("click", triggerOnGesture);
      window.removeEventListener("scroll", triggerOnGesture);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-[16/10] sm:aspect-[16/9] w-full max-w-lg overflow-hidden rounded-2xl border-4 border-white/25 shadow-elevated bg-brand-deep group">
      {/* Soft Ambient Depth Glow behind the player */}
      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-brand-mint/40 via-brand-purple/30 to-brand-teal/30 blur-xl opacity-80 -z-10" />

      {/* Main Looping Video */}
      <video
        id="hero-loop-video"
        ref={(el) => {
          videoRef.current = el;
          if (el) {
            el.muted = true;
            el.defaultMuted = true;
            el.playsInline = true;
            el.play().catch(() => {});
          }
        }}
        src="/videos/loop-wash.mp4"
        poster="/videos/loop-wash-poster.jpg"
        muted
        autoPlay
        playsInline
        loop
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      >
        <source src="/videos/loop-wash.webm" type="video/webm" />
        <source src="/videos/loop-wash.mp4" type="video/mp4" />
      </video>

      {/* Instant playback bootstrap script running during initial HTML parsing */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var v=document.getElementById('hero-loop-video');if(v){v.muted=true;v.defaultMuted=true;v.playsInline=true;v.setAttribute('muted','');v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline','');var p=v.play();if(p&&p.catch){p.catch(function(){});}}})();`,
        }}
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
