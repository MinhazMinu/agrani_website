import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { serviceDetails } from "@/lib/company";

export const metadata = {
  title: "Services | Agrani Technologies & Services Limited",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <section className="bg-[linear-gradient(135deg,#fff7f3_0%,#ffffff_48%,#eef9fb_100%)] py-20">
          <Container>
            <SectionHeader eyebrow="Services" title="Comprehensive IT services for public and private sector needs" description="Agrani Technologies and Services Limited offers a comprehensive suite of IT services, from application delivery to infrastructure, cybersecurity, and e-governance." />
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              {serviceDetails.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={index * 0.04}>
                    <article className="h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-xl">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                          <Icon size={24} />
                        </span>
                        <h2 className="text-xl font-semibold text-neutral-950">{service.title}</h2>
                      </div>
                      <ul className="mt-6 grid gap-3">
                        {service.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-600">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      </main>
      <CtaBanner />
    </>
  );
}
