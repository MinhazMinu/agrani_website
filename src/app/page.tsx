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
                <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(241,90,36,0.24),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(37,150,190,0.22),transparent_32%)] blur-3xl" />
                <div className="ai-hero-card relative overflow-hidden rounded-lg bg-white/85 p-6 shadow-2xl backdrop-blur">
                  <span className="ai-scan-line" aria-hidden="true" />
                  <span className="ai-node ai-node-one" aria-hidden="true" />
                  <span className="ai-node ai-node-two" aria-hidden="true" />
                  <span className="ai-node ai-node-three" aria-hidden="true" />
                  <div className="relative rounded-lg border border-white/70 bg-white/90 p-3 shadow-sm">
                    <Image src="/logo.jpg" alt="Agrani Technologies & Services Limited logo" width={540} height={176} className="w-full rounded bg-white" priority />
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {["Software", "Cloud", "Cybersecurity", "E-Governance"].map((item) => (
                      <div key={item} className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-lg">
                        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent opacity-0 transition group-hover:opacity-100" />
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

        <section className="serve-band relative overflow-hidden border-y border-neutral-900 bg-neutral-950 py-16 text-white">
          <Container className="relative">
            <Reveal>
              <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">
                    Who we serve
                  </p>
                  <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal sm:text-4xl">
                    Digital delivery across Bangladesh&apos;s key sectors
                  </h2>
                </div>
                <div className="serve-mini-ribbon rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 backdrop-blur">
                  Government | Private Sector | NGOs | Education
                </div>
              </div>
            </Reveal>

            <div className="serve-track grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <Reveal key={sector.label} delay={index * 0.04}>
                    <div className="serve-card group relative min-h-44 overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-brand-orange/50">
                      <span className="absolute right-4 top-3 text-xl font-semibold leading-none text-white/[0.04]">
                        0{index + 1}
                      </span>
                      <span className="serve-icon relative inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white text-brand-cyan shadow-lg shadow-brand-cyan/10 transition group-hover:scale-105 group-hover:text-brand-orange">
                        <span className="serve-icon-orbit" aria-hidden="true" />
                        <Icon className="relative h-7 w-7 transition group-hover:-rotate-6 group-hover:scale-110" />
                      </span>
                      <p className="relative mt-7 text-xl font-semibold text-white">{sector.label}</p>
                      {/* <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <span className="serve-progress block h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-cyan" />
                      </div> */}
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
