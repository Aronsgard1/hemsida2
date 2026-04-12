"use client";

import { useEffect } from "react";

export default function ScrollAnimationObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class to trigger the CSS animation
            entry.target.classList.add("animate");
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with fade-in-scroll class
    const elements = document.querySelectorAll(".fade-in-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
