import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveals children on scroll. Renders visible during SSR / before hydration so
 * content is never hidden if JS is slow or unavailable.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"ssr" | "hidden" | "shown">("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setState("shown");
      return;
    }
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.9;
    if (inView) {
      setState("shown");
      return;
    }
    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = As as "div";

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        state === "hidden" ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
