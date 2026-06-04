import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { sectors, services, stats } from "@/lib/company";

export default function Home() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(241,90,36,0.14),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f7fbfc_52%,#fff5f1_100%)]">
          <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-orange shadow-sm">
                <Sparkles size={16} /> Since 2013
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
                Powering Bangladesh&apos;s Digital Transformation
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Agrani Technologies delivers cutting-edge software, cloud, and e-governance solutions to public and private sectors across Bangladesh - since 2013.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition hover:bg-brand-orange-dark">
                  Explore Our Services <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:border-brand-cyan hover:text-brand-cyan">
                  Get in Touch
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-brand-orange/10 blur-3xl" />
                <div className="relative rounded-lg border border-white/70 bg-white/80 p-6 shadow-2xl backdrop-blur">
                  <Image src="/logo.jpg" alt="Agrani Technologies & Services Limited logo" width={540} height={176} className="w-full rounded bg-white" priority />
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {["Software", "Cloud", "Cybersecurity", "E-Governance"].map((item) => (
                      <div key={item} className="rounded-lg border border-neutral-200 bg-white p-4">
                        <CheckCircle2 className="h-5 w-5 text-brand-orange" />
                        <p className="mt-3 text-sm font-semibold text-neutral-900">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
          <Container className="pb-10">
            <Reveal>
              <div className="grid overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 text-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-white/10 p-6 sm:border-r">
                    <p className="text-3xl font-semibold text-brand-orange-light">{stat.value}</p>
                    <p className="mt-1 text-sm text-neutral-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeader eyebrow="Products and services" title="End-to-end technology services for modern institutions" description="Agrani builds, integrates, protects, and supports mission-critical digital platforms for Bangladesh." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service, index) => (
                <ServiceCard key={service.title} service={service} delay={index * 0.04} />
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-50 py-12">
          <Container>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <Reveal key={sector.label} delay={index * 0.04}>
                    <div className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
                        <Icon size={22} />
                      </span>
                      <p className="font-semibold text-neutral-950">{sector.label}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader eyebrow="Why choose Agrani" title="Trusted technology partner for real digital impact" />
            <Reveal delay={0.08}>
              <p className="text-lg leading-8 text-neutral-600">
                With over a decade long experience, Agrani Technologies has been a trusted technology partner to government agencies, private enterprises, and development organisations across Bangladesh. Our 100+ professionals deliver end-to-end solutions, from software development to cybersecurity, with quality and integrity at every step. We don&apos;t just build technology; we build long-term partnerships that drive real impact.
              </p>
            </Reveal>
          </Container>
        </section>
      </main>
      <CtaBanner />
    </>
  );
}
