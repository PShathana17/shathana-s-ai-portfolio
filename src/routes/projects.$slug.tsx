import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Shathana P" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Shathana P`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="card-surface rounded-2xl p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" /> Back to portfolio
        </Link>

        <header className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li key={t}>
                <Badge variant="secondary" className="font-normal">
                  {t}
                </Badge>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild size="sm" variant="secondary">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="size-4" /> GitHub
                </a>
              ) : (
                <span aria-disabled="true" title="Link coming soon" className="opacity-60">
                  <Github className="size-4" /> GitHub — coming soon
                </span>
              )}
            </Button>
            <Button asChild size="sm" variant="secondary">
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" /> Live Demo
                </a>
              ) : (
                <span aria-disabled="true" title="Link coming soon" className="opacity-60">
                  <ExternalLink className="size-4" /> Live Demo — coming soon
                </span>
              )}
            </Button>
          </div>
        </header>

        <img
          src={project.image}
          alt={`${project.title} visual`}
          width={1280}
          height={800}
          className="mt-8 aspect-[16/9] w-full rounded-2xl border border-border object-cover"
        />

        <div className="mt-8 grid gap-5">
          <Section title="Overview">
            <p>{project.detail.overview}</p>
          </Section>
          <Section title="Problem Statement">
            <p>{project.detail.problem}</p>
          </Section>
          <Section title="Dataset">
            <p>{project.detail.dataset}</p>
          </Section>
          <Section title="Technologies Used">
            <ul className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li key={t}>
                  <Badge variant="secondary" className="font-normal">
                    {t}
                  </Badge>
                </li>
              ))}
            </ul>
          </Section>
          <Section title="My Contribution">
            <List items={project.detail.contribution} />
          </Section>
          <Section title="Approach / Methodology">
            <List items={project.detail.approach} />
          </Section>
          <Section title="Results">
            <List items={project.detail.results} />
          </Section>
          <Section title="Challenges">
            <List items={project.detail.challenges} />
          </Section>
        </div>

        <section aria-labelledby="more-projects" className="mt-14">
          <h2 id="more-projects" className="text-xl font-semibold">
            More projects
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="card-surface block h-full rounded-xl p-4 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
