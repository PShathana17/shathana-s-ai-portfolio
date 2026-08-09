import { Link } from "@tanstack/react-router";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 motion-reduce:hover:translate-y-0">
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="block overflow-hidden"
        aria-label={`View details for ${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          width={1280}
          height={800}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-snug">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="transition-colors hover:text-primary"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
          {project.result && (
            <p className="text-sm font-medium text-primary">Result: {project.result}</p>
          )}
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge variant="secondary" className="font-normal">
                {t}
              </Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <Button asChild size="sm" variant="secondary" disabled={!project.github}>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" /> GitHub
              </a>
            ) : (
              <span aria-disabled="true" title="Link coming soon" className="opacity-60">
                <Github className="size-4" /> GitHub
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
                <ExternalLink className="size-4" /> Live Demo
              </span>
            )}
          </Button>
          <Button asChild size="sm">
            <Link to="/projects/$slug" params={{ slug: project.slug }}>
              View Details <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
