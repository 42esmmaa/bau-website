"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { validate, type FormData, type FormErrors } from "@/lib/validation";

interface ContactFormProps {
  projects: { slug: string; title: string }[];
  preselected: string;
}

export default function ContactForm({ projects, preselected }: ContactFormProps) {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    project: preselected,
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newErrors = validate(data);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: Versand über API-Route
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <h2>Vielen Dank, {data.name.trim()}!</h2>
        <p>Ihre Anfrage wurde geprüft. (Demo – es wurde nichts verschickt.)</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" value={data.name} onChange={handleChange}
          aria-invalid={!!errors.name} aria-describedby="name-error" />
        {errors.name && <p id="name-error" className="field__error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">E-Mail *</label>
        <input id="email" name="email" type="email" value={data.email} onChange={handleChange}
          aria-invalid={!!errors.email} aria-describedby="email-error" />
        {errors.email && <p id="email-error" className="field__error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="project">Projekt (optional)</label>
        <select id="project" name="project" value={data.project} onChange={handleChange}>
          <option value="">Allgemeine Anfrage</option>
          {projects.map((p) => (
            <option key={p.slug} value={p.slug}>{p.title}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Nachricht *</label>
        <textarea id="message" name="message" rows={5} value={data.message} onChange={handleChange}
          aria-invalid={!!errors.message} aria-describedby="message-error" />
        {errors.message && <p id="message-error" className="field__error">{errors.message}</p>}
      </div>

      <button type="submit" className="btn btn--primary">Anfrage senden</button>
    </form>
  );
}
