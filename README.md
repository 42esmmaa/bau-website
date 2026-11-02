# Kranich Bau – Website mit Next.js & TypeScript

Website für ein **fiktives Bauunternehmen**, gebaut als Übungsprojekt, um moderne Webentwicklung mit
Next.js (App Router), React und TypeScript zu lernen.

> Kranich Bau gibt es nicht – alle Firmen- und Projektdaten sind erfunden.

## Features

- **Startseite** mit Hero-Bereich, Leistungen und den neuesten Projekten
- **Projektübersicht** mit clientseitigem Filter nach Kategorie (React `useState`)
- **Dynamische Detailseiten** (`/projekte/[slug]`), beim Build statisch erzeugt (`generateStaticParams`)
- **Kontaktformular** mit typisierter Validierung; von einer Projektseite aus ist das Projekt vorausgewählt
- **Eigene 404-Seite**, SEO-Metadaten pro Seite
- **Responsive** mit mobilem Menü; barrierearm (`aria-*`, semantisches HTML)

## Technik

| Bereich | Umsetzung |
|---|---|
| Framework | Next.js (App Router), React |
| Sprache | TypeScript im `strict`-Modus |
| Styling | Globales CSS + CSS Modules (`ProjectCard.module.css`) |
| Daten | Typisierte Liste in `lib/projects.ts` (Union Types, Interfaces) |

**Server vs. Client Components:** Seiten werden standardmäßig auf dem Server gerendert. Nur Teile mit
Interaktion (`Header`, `ProjectFilter`, `ContactForm`) sind mit `"use client"` markiert. So bekommt der
Browser möglichst wenig JavaScript.

## Projektstruktur

```
app/
├── layout.tsx              # Rahmen für alle Seiten (Header, Footer, Metadaten)
├── page.tsx                # Startseite
├── globals.css
├── not-found.tsx           # 404-Seite
├── projekte/
│   ├── page.tsx            # Übersicht
│   ├── ProjectFilter.tsx   # Filter (Client Component)
│   └── [slug]/page.tsx     # Detailseite
└── kontakt/
    ├── page.tsx
    └── ContactForm.tsx     # Formular (Client Component)
components/                 # Header, Footer, ProjectCard
lib/
├── projects.ts             # Typen + Projektdaten
└── validation.ts           # Formularvalidierung
```

## Entstehung

Das Grundgerüst habe ich mit KI-Unterstützung aufgesetzt, um mich schneller einzuarbeiten. Alle weiteren Features und Anpassungen sind in der Commit-Historie nachvollziehbar.

## Lokal starten

Voraussetzung: [Node.js](https://nodejs.org) ab Version 20.

```bash
npm install
npm run dev
```

Dann <http://localhost:3000> öffnen.

```bash
npm run build   # Produktions-Build
npm run lint    # TypeScript-Prüfung
```

## Online stellen

Am einfachsten über [Vercel](https://vercel.com): mit GitHub anmelden, Repository importieren, fertig.
