import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Erzeugt alle Detailseiten beim Build als statisches HTML
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? project.title : "Projekt nicht gefunden" };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const unitLabel =
    project.category === "Wohnen" ? "Wohneinheiten" :
    project.category === "Pflege" ? "Plätze / Wohnungen" :
    "Mieteinheiten";

  return (
    <article className="section container detail">
      <Link href="/projekte" className="back-link">← Alle Projekte</Link>

      <p className="eyebrow">{project.category} · {project.city}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.summary}</p>

      <dl className="facts">
        <div><dt>Status</dt><dd>{project.status}</dd></div>
        <div><dt>Fertigstellung</dt><dd>{project.year}</dd></div>
        <div><dt>{unitLabel}</dt><dd>{project.units}</dd></div>
        <div><dt>Standort</dt><dd>{project.city}</dd></div>
      </dl>

      <div className="detail__content">
        <section>
          <h2>Über das Projekt</h2>
          <p>{project.description}</p>
        </section>
        <section>
          <h2>Highlights</h2>
          <ul className="checklist">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="cta">
        <p>Interesse an diesem Projekt?</p>
        <Link href={`/kontakt?projekt=${project.slug}`} className="btn btn--primary">
          Anfrage senden
        </Link>
      </div>
    </article>
  );
}
