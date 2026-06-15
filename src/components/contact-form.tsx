"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

type CaptchaChallenge = {
  left: number;
  right: number;
};

function createCaptchaChallenge(): CaptchaChallenge {
  return {
    left: Math.floor(Math.random() * 9) + 1,
    right: Math.floor(Math.random() * 9) + 1,
  };
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState<CaptchaChallenge>({ left: 4, right: 7 });
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const expectedAnswer = captcha.left + captcha.right;
    const providedAnswer = Number(captchaAnswer.trim());

    if (providedAnswer !== expectedAnswer) {
      setSubmitted(false);
      setSendError("");
      setCaptchaError("The CAPTCHA answer is incorrect. Please try the new question.");
      setCaptchaAnswer("");
      setCaptcha(createCaptchaChallenge());
      return;
    }

    const formData = new FormData(form);

    setCaptchaError("");
    setSendError("");
    setSubmitted(false);
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });
      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "Could not send your message. Please try again later.");
      }

      setSubmitted(true);
      form.reset();
      setCaptchaAnswer("");
      setCaptcha(createCaptchaChallenge());
    } catch (error) {
      setSendError(error instanceof Error ? error.message : "Could not send your message. Please try again later.");
      setCaptchaAnswer("");
      setCaptcha(createCaptchaChallenge());
    } finally {
      setIsSending(false);
    }
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
      <label className="mt-4 grid gap-2 text-sm font-medium text-neutral-800">
        CAPTCHA: What is {captcha.left} + {captcha.right}?
        <input
          name="captcha"
          type="number"
          inputMode="numeric"
          required
          value={captchaAnswer}
          onChange={(event) => setCaptchaAnswer(event.target.value)}
          className="rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10"
        />
      </label>
      <button type="submit" disabled={isSending} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {isSending ? "Sending..." : "Send Message"} <Send size={18} />
      </button>
      {captchaError ? (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {captchaError}
        </p>
      ) : sendError ? (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {sendError} You can also email us directly at{" "}
          <a className="underline" href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      ) : submitted ? (
        <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          Thank you. Your message has been sent. We will get back to you soon.
        </p>
      ) : (
        <p className="mt-4 text-sm text-neutral-500">
          {/* Prefer email? Use the mailto fallback:{" "} */}
          {/* <a className="font-semibold text-brand-cyan underline" href={`mailto:${company.email}`}>{company.email}</a>. */}
        </p>
      )}
    </form>
  );
}
