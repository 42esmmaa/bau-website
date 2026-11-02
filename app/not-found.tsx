import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container">
      <h1>Seite nicht gefunden</h1>
      <p className="lead">Diese Seite gibt es leider nicht (mehr).</p>
      <Link href="/" className="btn btn--primary">Zur Startseite</Link>
    </section>
  );
}
