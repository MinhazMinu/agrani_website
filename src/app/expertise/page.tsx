import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { csr, infrastructure, quality, teamRoles, technologyGroups } from "@/lib/company";

export const metadata = {
  title: "Expertise | Agrani Technologies & Services Limited",
};

export default function ExpertisePage() {
  return (
    <>
      <main>
        <section className="bg-neutral-950 py-20 text-white">
          <Container>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">Our expertise</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold sm:text-5xl">A 100+ professional team across software, infrastructure, security, and support.</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
                Agrani&apos;s greatest asset is its people. Staff members undergo continuous training and certification programs to keep pace with evolving global standards and technologies.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeader eyebrow="Technical team" title="Roles that cover the full delivery lifecycle" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {teamRoles.map((role, index) => (
                <Reveal key={role} delay={index * 0.03}>
                  <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange" />
                    <p className="mt-3 font-semibold text-neutral-950">{role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-neutral-50 py-20">
          <Container>
            <SectionHeader eyebrow="Technology stack" title="Platforms and technologies used by Agrani" align="center" />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {technologyGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <Reveal key={group.title} delay={index * 0.04}>
                    <article className="h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                      <Icon className="h-6 w-6 text-brand-cyan" />
                      <h2 className="mt-4 text-lg font-semibold text-neutral-950">{group.title}</h2>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700">
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

        <section className="py-20">
          <Container className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Infrastructure & facilities" title="Delivery environment for reliable operations" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {infrastructure.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 0.04}>
                      <div className="h-full rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                        <Icon className="h-6 w-6 text-brand-orange" />
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
                <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-neutral-950">Quality & Certifications</h2>
                  <ul className="mt-5 space-y-3">
                    {quality.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-600">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-neutral-950">Corporate Social Responsibility</h2>
                  <ul className="mt-5 space-y-3">
                    {csr.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-600">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
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
