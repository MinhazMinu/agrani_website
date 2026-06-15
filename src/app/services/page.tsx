import { ArrowRight, CheckCircle2, Layers3, Sparkles } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { ServiceStack } from "@/components/service-stack";
import { serviceDetails } from "@/lib/company";

export const metadata = {
  title: "Services | Agrani Technologies & Services Limited",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <section className="services-hero relative overflow-hidden py-20 sm:py-24">
          <Container className="relative grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-orange/25 bg-brand-orange/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
                <Sparkles className="h-4 w-4" /> Services
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
                Comprehensive IT services for public and private sector needs
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
                Agrani Technologies and Services Limited offers a comprehensive suite of IT services, from application delivery to infrastructure, cybersecurity, and e-governance.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition hover:bg-brand-orange-dark">
                  Discuss a project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/expertise" className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:border-brand-cyan hover:text-brand-cyan">
                  View expertise
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="services-console relative overflow-hidden rounded-lg border border-white/70 bg-white/85 p-6 shadow-2xl shadow-brand-cyan/10 backdrop-blur">
                <span className="services-scan" aria-hidden="true" />
                <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-brand-cyan">Service coverage</p>
                <p className="relative mt-3 text-6xl font-semibold text-brand-orange">7</p>
                <p className="relative mt-2 text-lg font-semibold text-neutral-950">Core service lines</p>
                <div className="relative mt-6 grid gap-3">
                  {serviceDetails.map((service) => (
                    <div key={service.title} className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white/80 p-3 shadow-sm">
                      <service.icon className="h-5 w-5 text-brand-orange" />
                      <span className="text-sm font-semibold text-neutral-800">{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="services-grid-section relative overflow-hidden py-20 text-white">
          <Container className="relative z-10">
            <div className="service-portfolio-layout grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <Reveal className="service-portfolio-copy">
                <div className="rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">Service portfolio</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">Built to deliver, integrate, secure, and operate digital platforms</h2>
                  <p className="mt-4 text-base leading-7 text-neutral-300">
                    Each service line is structured for practical delivery across strategy, implementation, support, and continuous improvement.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-4">
                      <p className="text-4xl font-semibold text-brand-orange-light">7</p>
                      <p className="mt-1 text-sm text-neutral-400">Service lines</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-4">
                      <p className="text-4xl font-semibold text-brand-cyan">4</p>
                      <p className="mt-1 text-sm text-neutral-400">Delivery stages</p>
                    </div>
                  </div>
                  <div className="services-process mt-6 grid gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-3 shadow-2xl shadow-black/20 backdrop-blur sm:grid-cols-2">
                    {["Plan", "Build", "Integrate", "Operate"].map((step, index) => (
                      <div key={step} className="flex items-center gap-3 rounded-lg border border-white/10 bg-neutral-950/50 p-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange text-white">
                          {index === 0 ? <Layers3 className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange-light">Step {index + 1}</p>
                          <p className="text-sm font-semibold text-white">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <ServiceStack />
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
      <CtaBanner />
    </>
  );
}
