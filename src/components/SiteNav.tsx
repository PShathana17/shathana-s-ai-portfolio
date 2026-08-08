import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RESUME_PATH } from "@/data/profile";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function useTheme() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);
  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };
  return { light, toggle };
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { light, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (window.scrollY < 120) setActive("home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome || typeof IntersectionObserver === "undefined") return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "glass" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6"
      >
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-2 font-display text-sm font-bold tracking-tight"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            SP
          </span>
          <span className="truncate">Shathana P</span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={onHome ? `#${s.id}` : `/#${s.id}`}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                  onHome && active === s.id && "bg-secondary text-foreground",
                )}
                aria-current={onHome && active === s.id ? "true" : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
          >
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>
          <Button asChild size="sm" className="hidden shadow-none sm:inline-flex">
            <a href={RESUME_PATH} download>
              <FileDown className="size-4" /> Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={onHome ? `#${s.id}` : `/#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild size="sm" className="mt-2 w-full">
                <a href={RESUME_PATH} download>
                  <FileDown className="size-4" /> Download Resume
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
