import type { Metadata } from "next";
import ProjectFilter from "./ProjectFilter";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekte",
};

export default function ProjectsPage() {
  return (
    <section className="section container">
      <h1>Unsere Projekte</h1>
      <p className="lead">Ein Überblick über geplante, laufende und fertiggestellte Bauvorhaben.</p>
      <ProjectFilter projects={projects} />
    </section>
  );
}
