import { UserRound } from "lucide-react";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { team, values } from "@/lib/company";

export const metadata = {
  title: "About Us | Agrani Technologies & Services Limited",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="bg-neutral-950 py-20 text-white">
          <Container>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">About us</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold sm:text-5xl">A Bangladeshi technology company built on trust, professionalism, and innovation.</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
                Agrani Technologies and Services Limited (ATSL) is a dynamic and rapidly growing IT company based in Bangladesh, dedicated to providing cutting-edge technology solutions that cater to both public and private sector needs.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-neutral-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-semibold text-neutral-950">Vision</h2>
                <p className="mt-4 leading-7 text-neutral-600">
                  To be a transformative force in shaping a smarter, seamlessly connected, and digitally empowered Bangladesh by delivering innovative, scalable, and sustainable technology solutions. We aim to bridge the digital divide, enhance public and private sector capabilities, and contribute to the nation&apos;s socio-economic development through cutting-edge advancements and unwavering commitment to excellence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-lg border border-neutral-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-semibold text-neutral-950">Mission</h2>
                <ul className="mt-4 space-y-3 text-neutral-600">
                  {[
                    "Deliver high-quality, reliable, and cost-effective IT services tailored to local and national needs.",
                    "Drive digital transformation across sectors through innovative and user-focused solutions.",
                    "Build long-term partnerships through integrity, transparency, and customer satisfaction.",
                    "Foster continuous learning and technical excellence within our team.",
                    "Contribute to national development by supporting digital governance and technology access.",
                  ].map((item) => (
                    <li key={item} className="leading-7">{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-neutral-50 py-20">
          <Container>
            <SectionHeader eyebrow="Our values" title="Principles behind every engagement" align="center" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} delay={index * 0.04}>
                    <div className="h-full rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                      <Icon className="h-6 w-6 text-brand-orange" />
                      <h3 className="mt-4 font-semibold text-neutral-950">{value.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">{value.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeader eyebrow="Management team" title="Experienced leadership for sustainable growth" />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.05}>
                  <article className="h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-cyan text-white">
                      <UserRound size={44} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-neutral-950">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-orange">{member.role}</p>
                    <p className="mt-1 text-sm text-neutral-500">{member.experience}</p>
                    <p className="mt-4 text-sm leading-6 text-neutral-600">{member.bio}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <CtaBanner />
    </>
  );
}
