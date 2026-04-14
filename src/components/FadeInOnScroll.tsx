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
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);

      // Check if element is already in viewport on mount
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        ref.current.classList.add("animate");
        observer.unobserve(ref.current);
      }
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
