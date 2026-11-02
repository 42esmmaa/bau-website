export type Category = "Wohnen" | "Pflege" | "Gewerbe";

export type ProjectStatus = "geplant" | "im Bau" | "fertiggestellt";

export interface Project {
  slug: string;
  title: string;
  city: string;
  category: Category;
  status: ProjectStatus;
  year: number;
  units: number; // Wohnungen, Pflegeplätze oder Mieteinheiten
  summary: string;
  description: string;
  highlights: string[];
}

export const categories: Category[] = ["Wohnen", "Pflege", "Gewerbe"];

// Statische Beispieldaten – später durch eine API ersetzbar
export const projects: Project[] = [
  {
    slug: "quartier-am-park",
    title: "Quartier am Park",
    city: "Karlsruhe",
    category: "Wohnen",
    status: "im Bau",
    year: 2027,
    units: 84,
    summary: "Vier Mehrfamilienhäuser mit begrünten Innenhöfen und Tiefgarage.",
    description:
      "Im Quartier am Park entstehen vier Mehrfamilienhäuser mit 2- bis 5-Zimmer-Wohnungen. " +
      "Ein gemeinsamer, begrünter Innenhof verbindet die Gebäude. Die Energie liefert eine Wärmepumpe " +
      "in Kombination mit Photovoltaik auf den Dächern.",
    highlights: ["KfW-Effizienzhaus 40", "Photovoltaik auf allen Dächern", "Tiefgarage mit Ladepunkten"],
  },
  {
    slug: "reihenhaeuser-lindenweg",
    title: "Reihenhäuser Lindenweg",
    city: "Ettlingen",
    category: "Wohnen",
    status: "fertiggestellt",
    year: 2025,
    units: 18,
    summary: "Familienfreundliche Reihenhäuser mit eigenem Garten.",
    description:
      "18 Reihenhäuser in ruhiger Lage, jeweils mit eigenem Garten und Carport. " +
      "Die Grundrisse lassen sich an wachsende Familien anpassen.",
    highlights: ["Eigener Garten", "Flexible Grundrisse", "Nähe zu Schulen und Kitas"],
  },
  {
    slug: "pflegezentrum-rheinblick",
    title: "Pflegezentrum Rheinblick",
    city: "Rastatt",
    category: "Pflege",
    status: "fertiggestellt",
    year: 2024,
    units: 120,
    summary: "Pflegeeinrichtung mit Wohngruppen und betreutem Wohnen.",
    description:
      "Das Pflegezentrum bietet 120 Pflegeplätze in kleinen Wohngruppen sowie Wohnungen für betreutes Wohnen. " +
      "Helle Gemeinschaftsräume und ein Sinnesgarten schaffen Aufenthaltsqualität.",
    highlights: ["Wohngruppen-Konzept", "Sinnesgarten", "Barrierefrei nach DIN 18040"],
  },
  {
    slug: "seniorenwohnen-muehlbach",
    title: "Seniorenwohnen Mühlbach",
    city: "Bruchsal",
    category: "Pflege",
    status: "geplant",
    year: 2028,
    units: 46,
    summary: "Barrierefreie Wohnungen mit Servicebüro und Café.",
    description:
      "Barrierefreie Wohnungen für Seniorinnen und Senioren mit einem Servicebüro im Erdgeschoss. " +
      "Ein öffentliches Café öffnet das Gebäude zur Nachbarschaft.",
    highlights: ["Servicebüro vor Ort", "Café im Erdgeschoss", "Gute ÖPNV-Anbindung"],
  },
  {
    slug: "buero-campus-sued",
    title: "Büro-Campus Süd",
    city: "Karlsruhe",
    category: "Gewerbe",
    status: "im Bau",
    year: 2027,
    units: 12,
    summary: "Flexible Büroflächen mit Dachterrasse und Fahrradgarage.",
    description:
      "Der Büro-Campus bietet zwölf flexibel teilbare Mieteinheiten. Eine Dachterrasse, " +
      "eine Fahrradgarage mit Duschen und eine Kantine machen den Standort attraktiv für Mitarbeitende.",
    highlights: ["Flexibel teilbare Flächen", "Dachterrasse", "Fahrradgarage mit Duschen"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getLatestProjects(count: number): Project[] {
  return [...projects].sort((a, b) => b.year - a.year).slice(0, count);
}
