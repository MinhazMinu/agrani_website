import {
  Award,
  Binary,
  Bot,
  Boxes,
  Braces,
  ChevronRight,
  Cloud,
  Code2,
  Coffee,
  Container as ContainerIcon,
  Cpu,
  Database,
  Flame,
  GitBranch,
  Globe,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Orbit,
  Route,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { csr, infrastructure, quality, teamRoles, technologyGroups } from "@/lib/company";

export const metadata = {
  title: "Expertise | Agrani Technologies & Services Limited",
};

const techItemIcons: Record<string, LucideIcon> = {
  Java: Coffee,
  Python: Bot,
  PHP: Code2,
  JavaScript: Braces,
  ".NET": Binary,
  Laravel: Flame,
  "Spring Boot": Workflow,
  Angular: Orbit,
  Django: Route,
  MySQL: Database,
  PostgreSQL: Server,
  Oracle: Database,
  MongoDB: Layers3,
  AWS: Cloud,
  Azure: Cloud,
  GCP: Cloud,
  Docker: ContainerIcon,
  Jenkins: Terminal,
  Git: GitBranch,
  Kubernetes: Boxes,
  SSL: LockKeyhole,
  OAuth: KeyRound,
  Firewalls: Shield,
  "Pen Testing": ShieldCheck,
  "REST APIs": Globe,
  Microservices: Network,
  "AI/ML (basic)": Cpu,
};

export default function ExpertisePage() {
  return (
    <>
      <main>
        <section className="expertise-hero relative overflow-hidden bg-neutral-950 py-20 text-white sm:py-24">
          <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">
                <Sparkles className="h-4 w-4" /> Our expertise
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">
                A 100+ professional team across software, infrastructure, security, and support.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
                Agrani&apos;s greatest asset is its people. Staff members undergo continuous training and certification programs to keep pace with evolving global standards and technologies.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Software", "Infrastructure", "Security", "Support"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-200">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="expertise-console relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur">
                <span className="expertise-console-scan" aria-hidden="true" />
                <div className="relative flex items-center justify-between gap-5 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">Capability index</p>
                    <p className="mt-2 text-5xl font-semibold text-brand-orange-light">100+</p>
                  </div>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-brand-cyan shadow-xl shadow-brand-cyan/10">
                    <Users className="h-7 w-7" />
                  </span>
                </div>
                <div className="relative mt-6 grid gap-3">
                  {[
                    { label: "Technical roles", value: "7" },
                    { label: "Technology groups", value: "7" },
                    { label: "Operations coverage", value: "24/7" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-950/50 px-4 py-3">
                      <span className="text-sm font-medium text-neutral-300">{item.label}</span>
                      <span className="text-lg font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="expertise-roles relative overflow-hidden py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
              <Reveal>
                <div className="role-command relative h-full overflow-hidden rounded-lg bg-neutral-950 p-7 text-white shadow-2xl shadow-neutral-950/15 sm:p-8">
                  <span className="role-command-scan" aria-hidden="true" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">
                    Technical team
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
                    Delivery roles arranged for end-to-end execution
                  </h2>
                  <p className="mt-5 text-base leading-7 text-neutral-300">
                    Cross-functional specialists cover strategy, architecture, design, engineering, security, delivery, and support.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-4xl font-semibold text-brand-orange-light">7</p>
                      <p className="mt-1 text-sm text-neutral-400">Role groups</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-4xl font-semibold text-brand-cyan">100+</p>
                      <p className="mt-1 text-sm text-neutral-400">Professionals</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="role-lanes grid gap-3">
                {teamRoles.map((role, index) => {
                  const initials = role
                    .split(" ")
                    .filter((word) => word !== "&")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("");

                  return (
                    <Reveal key={role} delay={index * 0.03}>
                      <div className="role-lane group relative overflow-hidden rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-orange/35 hover:shadow-xl">
                        <div className="relative flex items-center gap-4">
                          <span className="role-lane-index">0{index + 1}</span>
                          <span className="role-lane-avatar">{initials}</span>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-neutral-950">{role}</p>
                            <div className="mt-3 h-1 overflow-hidden rounded-full bg-neutral-100">
                              <span className=" block h-full rounded-full bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-cyan" />
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 shrink-0 text-neutral-300 transition group-hover:translate-x-1 group-hover:text-brand-orange" />
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        <section className="expertise-stack relative overflow-hidden bg-neutral-950 py-24 text-white">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">Technology stack</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">Platforms and technologies used by Agrani</h2>
              <p className="mt-4 text-base leading-7 text-neutral-300">
                Grouped technology capabilities across application engineering, data, cloud operations, DevOps, and security.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {technologyGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <Reveal key={group.title} delay={index * 0.04}>
                    <article className="expertise-tech-card group relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-brand-cyan/50">
                      <div className="relative flex items-center justify-between gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-cyan transition group-hover:text-brand-orange">
                          <Icon className="h-6 w-6" />
                        </span>
                        <Cpu className="h-5 w-5 text-white/20" />
                      </div>
                      <h2 className="relative mt-5 text-xl font-semibold text-white">{group.title}</h2>
                      <div className="relative mt-5 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium text-neutral-200 transition group-hover:border-brand-orange/30">
                            {(() => {
                              const TechIcon = techItemIcons[item] ?? Cpu;
                              return <TechIcon className="h-3.5 w-3.5 text-brand-orange-light" />;
                            })()}
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="expertise-ops relative overflow-hidden py-24">
          <Container className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Infrastructure & facilities" title="Delivery environment for reliable operations" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {infrastructure.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 0.04}>
                      <div className="expertise-facility group h-full rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-xl">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 font-semibold text-neutral-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
            <div className="grid gap-6">
              <Reveal>
                <div className="expertise-proof-card rounded-lg border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-950/5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
                      <Award className="h-5 w-5" />
                    </span>
                    <h2 className="text-xl font-semibold text-neutral-950">Quality & Certifications</h2>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {quality.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-600">
                        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="expertise-csr-card relative overflow-hidden rounded-lg border border-neutral-900 bg-neutral-950 p-6 text-white shadow-2xl shadow-neutral-950/15">
                  <span className="expertise-csr-scan" aria-hidden="true" />
                  <div className="relative flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-brand-orange-light">
                      <Network className="h-5 w-5" />
                    </span>
                    <h2 className="text-xl font-semibold">Corporate Social Responsibility</h2>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {csr.map((item) => (
                      <li key={item} className="relative flex gap-3 text-sm leading-6 text-neutral-300">
                        <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange-light" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
      <CtaBanner />
    </>
  );
}
