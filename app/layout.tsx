import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kranich Bau – Wir bauen Lebensräume",
    template: "%s | Kranich Bau",
  },
  description: "Fiktives Bauunternehmen aus Karlsruhe – Übungsprojekt mit Next.js und TypeScript.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
