"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-neutral-800">
          Name
          <input name="name" required className="rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-800">
          Email
          <input name="email" type="email" required className="rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-neutral-800">
        Subject
        <input name="subject" required className="rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10" />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-medium text-neutral-800">
        Message
        <textarea name="message" required rows={5} className="resize-none rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10" />
      </label>
      <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark sm:w-auto">
        Send Message <Send size={18} />
      </button>
      {submitted ? (
        <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          Thank you. Your message has been noted for frontend preview. You can also email us directly at{" "}
          <a className="underline" href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      ) : (
        <p className="mt-4 text-sm text-neutral-500">
          Prefer email? Use the mailto fallback:{" "}
          <a className="font-semibold text-brand-cyan underline" href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      )}
    </form>
  );
}
