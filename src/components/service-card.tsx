import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { IconItem } from "@/lib/company";
import { Reveal } from "@/components/reveal";

export function ServiceCard({ service, delay = 0 }: { service: IconItem; delay?: number }) {
  const Icon = service.icon;

  return (
    <Reveal delay={delay}>
      <Link
        href="/services"
        className="group block h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-xl"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
          <Icon size={24} />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-neutral-950">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{service.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan">
          Explore service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}
