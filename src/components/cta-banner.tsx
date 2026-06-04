import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { company } from "@/lib/company";

export function CtaBanner() {
  return (
    <section className="bg-neutral-950 py-16 text-white">
      <Container>
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">Contact us</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ready to transform your organisation?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">
                Reach out to discuss software, cloud, cybersecurity, managed IT, or e-governance needs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark">
                Start a conversation <ArrowRight size={18} />
              </Link>
              <a href={`mailto:${company.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-neutral-950">
                <Mail size={18} /> Email Agrani
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
