'use client'

import { useEffect, useState } from "react";

export const useScrollPosition = (initialPosition = 0) => {
  const [scrollPosition, setScrollPosition] = useState(initialPosition);

  useEffect(() => {
    const updatePosition = () => {
      requestAnimationFrame(() => {
        setScrollPosition(window.pageYOffset);
      });
    };
    
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    
    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return scrollPosition;
};