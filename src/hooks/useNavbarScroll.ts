import { useEffect, useState } from "react";

export function useNavbarScroll(maxScroll = 1000) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const p = Math.min(scrollY / maxScroll, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        setProgress(ease);
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxScroll]);

  return progress;
}
