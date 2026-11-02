import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { getProjectBySlug, projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Kontakt",
};

interface PageProps {
  searchParams: Promise<{ projekt?: string }>;
}

export default async function ContactPage({ searchParams }: PageProps) {
  const { projekt } = await searchParams;
  const preselected = projekt && getProjectBySlug(projekt) ? projekt : "";

  const projectOptions = projects.map((p) => ({ slug: p.slug, title: p.title }));

  return (
    <section className="section container contact">
      <div>
        <h1>Kontakt</h1>
        <p className="lead">
          Sie interessieren sich für eines unserer Projekte oder haben Fragen?
          Schreiben Sie uns – wir melden uns innerhalb von zwei Werktagen.
        </p>
        <address className="address">
          Kranich Bau (fiktiv)<br />
          Musterstraße 1<br />
          76131 Karlsruhe
        </address>
      </div>
      <ContactForm projects={projectOptions} preselected={preselected} />
    </section>
  );
}
