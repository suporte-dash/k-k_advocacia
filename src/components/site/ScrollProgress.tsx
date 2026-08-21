import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
