"use client";

import { useState, useCallback } from "react";

interface BubbleConfig {
  id: number;
  size: number;
  left: string;
  bottom: string;
  animationName: "bubbleFloat1" | "bubbleFloat2" | "bubbleFloat3";
  duration: number; // in seconds
  delay: number; // in seconds
}

const BUBBLES: BubbleConfig[] = [
  {
    id: 1,
    size: 64,
    left: "6%",
    bottom: "12%",
    animationName: "bubbleFloat1",
    duration: 9.5,
    delay: -3.5,
  },
  {
    id: 2,
    size: 32,
    left: "14%",
    bottom: "22%",
    animationName: "bubbleFloat2",
    duration: 7.8,
    delay: -1.2,
  },
  {
    id: 3,
    size: 96,
    left: "22%",
    bottom: "8%",
    animationName: "bubbleFloat3",
    duration: 11.2,
    delay: -6.4,
  },
  {
    id: 4,
    size: 42,
    left: "34%",
    bottom: "28%",
    animationName: "bubbleFloat1",
    duration: 8.4,
    delay: -2.1,
  },
  {
    id: 5,
    size: 26,
    left: "48%",
    bottom: "18%",
    animationName: "bubbleFloat2",
    duration: 7.2,
    delay: -4.8,
  },
  {
    id: 6,
    size: 84,
    left: "60%",
    bottom: "10%",
    animationName: "bubbleFloat3",
    duration: 10.5,
    delay: -5.2,
  },
  {
    id: 7,
    size: 38,
    left: "72%",
    bottom: "26%",
    animationName: "bubbleFloat1",
    duration: 8.8,
    delay: -1.8,
  },
  {
    id: 8,
    size: 108,
    left: "82%",
    bottom: "6%",
    animationName: "bubbleFloat2",
    duration: 12.0,
    delay: -7.5,
  },
  {
    id: 9,
    size: 48,
    left: "92%",
    bottom: "20%",
    animationName: "bubbleFloat3",
    duration: 9.0,
    delay: -3.0,
  },
  {
    id: 10,
    size: 28,
    left: "54%",
    bottom: "32%",
    animationName: "bubbleFloat1",
    duration: 7.5,
    delay: -0.5,
  },
];

export function HeroBubbles() {
  const [poppedIds, setPoppedIds] = useState<Set<number>>(new Set());

  const handlePop = useCallback((id: number) => {
    setPoppedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    // Respawn bubble after pop animation concludes
    setTimeout(() => {
      setPoppedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 1800);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden select-none"
      aria-hidden="true"
    >
      {BUBBLES.map((bubble) => {
        const isPopped = poppedIds.has(bubble.id);

        return (
          <div
            key={bubble.id}
            onClick={() => handlePop(bubble.id)}
            onMouseEnter={() => handlePop(bubble.id)}
            className={`laundry-bubble pointer-events-none md:pointer-events-auto transition-transform opacity-30 sm:opacity-85 ${
              bubble.id === 3 ? "hidden sm:block" : ""
            } ${
              isPopped ? "laundry-bubble-pop" : ""
            }`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              bottom: bubble.bottom,
              animationName: isPopped ? "bubbleManualPop" : bubble.animationName,
              animationDuration: isPopped ? "0.32s" : `${bubble.duration}s`,
              animationTimingFunction: isPopped ? "cubic-bezier(0.16, 1, 0.3, 1)" : "ease-in-out",
              animationIterationCount: isPopped ? 1 : "infinite",
              animationDelay: isPopped ? "0s" : `${bubble.delay}s`,
            }}
            title="Pop!"
          />
        );
      })}
    </div>
  );
}
