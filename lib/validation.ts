export interface FormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

export function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (data.name.trim().length < 2) {
    errors.name = "Bitte geben Sie Ihren Namen ein.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  if (data.message.trim().length < 10) {
    errors.message = "Die Nachricht sollte mindestens 10 Zeichen lang sein.";
  }
  return errors;
}
