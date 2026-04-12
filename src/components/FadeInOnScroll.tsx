"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
}

export default function FadeInOnScroll({ children }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-scroll");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="fade-in-scroll">
      {children}
    </div>
  );
}
