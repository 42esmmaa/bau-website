"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { categories, type Category, type Project } from "@/lib/projects";

interface ProjectFilterProps {
  projects: Project[];
}

type Filter = Category | "Alle";

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [filter, setFilter] = useState<Filter>("Alle");

  const visible = filter === "Alle" ? projects : projects.filter((p) => p.category === filter);

  const options: Filter[] = ["Alle", ...categories];

  return (
    <>
      <div className="filter" role="group" aria-label="Nach Kategorie filtern">
        {options.map((option) => (
          <button
            key={option}
            className={option === filter ? "chip chip--active" : "chip"}
            aria-pressed={option === filter}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <p className="result-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "Projekt" : "Projekte"}
      </p>

      <div className="grid grid--3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
