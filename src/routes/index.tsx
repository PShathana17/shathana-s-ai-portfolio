import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Database,
  FileDown,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Award,
  Send,
  Globe,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, categories, type Category } from "@/data/projects";
import {
  profile,
  skillGroups,
  experience,
  certifications,
  RESUME_PATH,
  PROFILE_IMAGE,
} from "@/data/profile";
import { cn } from "@/lib/utils";

const TITLE = "Shathana P — Aspiring Data Analyst & Data Engineer | AI/ML";
const DESCRIPTION =
  "Portfolio of Shathana P, B.Sc. AI & ML student building data-driven solutions with Python, SQL, Power BI and Machine Learning.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 id={`${id}-heading`} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

const skillIcons: Record<string, typeof Brain> = {
  Programming: Database,
  "Data Analysis": BarChart3,
  "Data Visualization": BarChart3,
  "AI / Machine Learning": Brain,
  Tools: Globe,
};

function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden">
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <div>
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground">Hi, I&apos;m</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-gradient-brand">{profile.name}</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 font-display text-lg text-foreground sm:text-xl">{profile.degree}</p>
          <p className="mt-1 text-base text-primary sm:text-lg">{profile.title}</p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={RESUME_PATH} download target="_blank" rel="noreferrer noopener">
                <FileDown className="size-4" /> Download Resume
              </a>
            </Button>
            <div className="flex items-center gap-1">
              <Button asChild variant="ghost" size="icon">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                >
                  <Github className="size-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
        </div>

        <Reveal delay={150} className="order-first justify-self-center lg:order-none lg:justify-self-end">
          <div className="card-surface relative overflow-hidden rounded-full p-1.5">
            <img
              src={PROFILE_IMAGE}
              alt="Shathana P profile photo"
              width={640}
              height={640}
              decoding="async"
              fetchPriority="high"
              sizes="(min-width: 1024px) 320px, 220px"
              className="aspect-square w-[220px] rounded-full object-cover object-top sm:w-[260px] lg:w-[320px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "B.Sc. Artificial Intelligence & Machine Learning student at RVS College of Arts and Science.",
    "Focused on Data Analytics and Data Engineering, with a strong interest in AI/ML.",
    "Comfortable working with Python and SQL for querying, cleaning and transforming data.",
    "Interested in data cleaning, exploratory analysis and visualization.",
    "Experienced with building interactive Power BI dashboards.",
    "Experienced with machine learning and deep learning projects, including CNN-based image classification.",
  ];
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        id="about"
        eyebrow="About"
        title="About Me"
        subtitle="A short, recruiter-friendly summary of what I work on and where I want to grow."
      />
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="card-surface rounded-2xl p-6 sm:p-8">
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="card-surface rounded-2xl p-6 sm:p-8">
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="text-muted-foreground">Degree</dt>
              <dd className="mt-1 font-medium">{profile.degree}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">College</dt>
              <dd className="mt-1 font-medium">{profile.college}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">CGPA</dt>
              <dd className="mt-1 font-medium">{profile.cgpa}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Looking for</dt>
              <dd className="mt-1 font-medium">
                Internships & entry-level roles in Data Analytics, Data Engineering and AI/ML
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        id="skills"
        eyebrow="Skills"
        title="Technical Skills"
        subtitle="Tools and technologies I use across data analysis, visualization and machine learning."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = skillIcons[group.title] ?? Database;
          return (
            <Reveal as="li" key={group.title} delay={i * 80}>
              <div className="card-surface h-full rounded-2xl p-6 transition-colors hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-secondary text-primary">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge variant="secondary" className="font-normal">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(filter as Category)),
    [filter],
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading
        id="projects"
        eyebrow="Projects"
        title="Featured Projects"
        subtitle="Deep learning, machine learning, SQL analysis and Power BI dashboard work. Each project has a detail page with the full approach."
      />
      <div role="tablist" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="grid gap-6 md:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={Math.min(i, 3) * 80} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </ul>
      <p className="mt-6 text-xs text-muted-foreground">
        Repository links are shown where available. Remaining GitHub and live demo links are being
        finalised.
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading
        id="experience"
        eyebrow="Experience"
        title="Academic & Project Experience"
        subtitle="Hands-on practice built through coursework and self-driven projects."
      />
      <ul className="grid gap-5 sm:grid-cols-2">
        {experience.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 80}>
            <div className="card-surface h-full rounded-2xl p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading id="education" eyebrow="Education" title="Education" />
      <Reveal className="card-surface rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
            <GraduationCap className="size-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold">{profile.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{profile.college}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="secondary" className="font-normal">
                2024 – Present
              </Badge>
              <Badge variant="secondary" className="font-normal">
                CGPA: {profile.cgpa}
              </Badge>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading
        id="certifications"
        eyebrow="Certifications"
        title="Certifications & Courses"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.name} delay={i * 80}>
            <div className="card-surface h-full rounded-2xl p-6">
              <span className="grid size-9 place-items-center rounded-lg bg-secondary text-primary">
                <Award className="size-4" />
              </span>
              <h3 className="mt-4 font-semibold leading-snug">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function ResumeCta() {
  return (
    <section aria-labelledby="resume-heading" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Reveal className="card-surface rounded-3xl p-8 text-center sm:p-12">
        <h2 id="resume-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
          Want to know more about me?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          My resume covers my coursework, projects and technical skills in detail.
        </p>
        <Button asChild size="lg" className="mt-6">
          <a href={RESUME_PATH} download target="_blank" rel="noreferrer noopener">
            <FileDown className="size-4" /> Download Resume
          </a>
        </Button>
      </Reveal>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading
        id="contact"
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Open to internships, campus placements and entry-level roles in Data Analytics, Data Engineering and AI/ML."
      />
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="card-surface rounded-2xl p-6 sm:p-8">
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="text-muted-foreground">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="block truncate font-medium hover:text-primary"
                >
                  {profile.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Github className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="text-muted-foreground">GitHub</p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block truncate font-medium hover:text-primary"
                >
                  PShathana17
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Linkedin className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="text-muted-foreground">LinkedIn</p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block truncate font-medium hover:text-primary"
                >
                  Shathana Palani
                </a>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="card-surface rounded-2xl p-6 sm:p-8">
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              setSending(true);
              const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
              const body = encodeURIComponent(
                `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`,
              );
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              toast.success("Opening your email app to send the message.");
              setSending(false);
              form.reset();
            }}
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Your message" />
            </div>
            <Button type="submit" disabled={sending} className="justify-center">
              <Send className="size-4" /> Send Message
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <ResumeCta />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
