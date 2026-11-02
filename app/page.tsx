import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getLatestProjects } from "@/lib/projects";

const services = [
  { icon: "🏠", title: "Wohnen", text: "Mehrfamilienhäuser und Reihenhäuser für Familien, Paare und Singles." },
  { icon: "🤝", title: "Pflege", text: "Pflegeeinrichtungen und betreutes Wohnen mit durchdachten Konzepten." },
  { icon: "🏢", title: "Gewerbe", text: "Flexible Büro- und Gewerbeflächen für moderne Arbeitswelten." },
];

export default function HomePage() {
  const latest = getLatestProjects(3);

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Bauunternehmen aus Karlsruhe</p>
          <h1>Wir bauen Lebensräume.</h1>
          <p className="hero__text">
            Von der Planung bis zur Schlüsselübergabe: Wir entwickeln Wohngebäude,
            Pflegeeinrichtungen und Gewerbeflächen in der Region.
          </p>
          <div className="actions">
            <Link href="/projekte" className="btn btn--primary">Unsere Projekte</Link>
            <Link href="/kontakt" className="link-arrow">Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Unsere Leistungen</h2>
        <div className="grid grid--3">
          {services.map((service) => (
            <article key={service.title} className="service">
              <span className="service__icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <h2>Aktuelle Projekte</h2>
            <Link href="/projekte" className="link-arrow">Alle Projekte</Link>
          </div>
          <div className="grid grid--3">
            {latest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
