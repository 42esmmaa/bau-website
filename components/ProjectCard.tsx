import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projekte/${project.slug}`} className={styles.card}>
      <div className={`${styles.image} ${styles[project.category]}`}>
        <span className={styles.status}>{project.status}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          {project.category} · {project.city} · {project.year}
        </p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
      </div>
    </Link>
  );
}
