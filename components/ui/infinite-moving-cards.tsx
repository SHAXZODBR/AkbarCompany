"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    image: string;
    alt: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item, idx) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("data-duplicate-key", `dup-${idx}`);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "10s" : speed === "normal" ? "20s" : "40s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full h-[80vh] overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-full h-[80vh] min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li key={item.id} className="relative w-[30vw] h-[80vh] shrink-0">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
