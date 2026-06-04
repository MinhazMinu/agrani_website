import { ArrowRight, CheckCircle2, Eye, Gem, Target, UserRound } from "lucide-react";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { team, values, stats } from "@/lib/company";

export const metadata = {
  title: "About Us | Agrani Technologies & Services Limited",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="about-hero relative overflow-hidden py-20 sm:py-24">
          <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-orange/25 bg-brand-orange/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
                <Gem className="h-4 w-4" /> About us
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
                A Bangladeshi technology company built on trust, professionalism, and innovation.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
                Agrani Technologies and Services Limited (ATSL) is a dynamic and rapidly growing IT company based in Bangladesh, dedicated to providing cutting-edge technology solutions that cater to both public and private sector needs.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="about-hero-card relative overflow-hidden rounded-lg border border-white/70 bg-white/85 p-6 shadow-2xl shadow-brand-cyan/10 backdrop-blur">
                <span className="about-scan" aria-hidden="true" />
                <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-brand-cyan">Established foundation</p>
                <p className="relative mt-3 text-6xl font-semibold text-brand-orange">2013</p>
                <p className="relative mt-4 text-base leading-7 text-neutral-600">
                  Built a strong foundation of trust, professionalism, and innovation, establishing itself as a leading force in the country&apos;s digital transformation landscape.
                </p>
                <div className="relative mt-6 grid grid-cols-2 gap-3">
                  {stats.slice(0, 4).map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-neutral-200 bg-white/80 p-4 shadow-sm">
                      <p className="text-2xl font-semibold text-neutral-950">{stat.value}</p>
                      <p className="mt-1 text-xs font-medium text-neutral-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="about-vision relative overflow-hidden py-20">
          <Container className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="about-statement about-statement-primary h-full rounded-lg border border-neutral-200 bg-white p-7 shadow-xl shadow-neutral-950/5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-white">
                  <Eye className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-3xl font-semibold text-neutral-950">Vision</h2>
                <p className="mt-4 leading-7 text-neutral-600">
                  To be a transformative force in shaping a smarter, seamlessly connected, and digitally empowered Bangladesh by delivering innovative, scalable, and sustainable technology solutions. We aim to bridge the digital divide, enhance public and private sector capabilities, and contribute to the nation&apos;s socio-economic development through cutting-edge advancements and unwavering commitment to excellence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="about-statement h-full rounded-lg border border-neutral-200 bg-white p-7 shadow-xl shadow-neutral-950/5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-cyan text-white">
                  <Target className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-3xl font-semibold text-neutral-950">Mission</h2>
                <ul className="mt-4 space-y-3 text-neutral-600">
                  {[
                    "Deliver high-quality, reliable, and cost-effective IT services tailored to local and national needs.",
                    "Drive digital transformation across sectors through innovative and user-focused solutions.",
                    "Build long-term partnerships through integrity, transparency, and customer satisfaction.",
                    "Foster continuous learning and technical excellence within our team.",
                    "Contribute to national development by supporting digital governance and technology access.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="about-values relative overflow-hidden py-20">
          <Container className="relative">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">Our values</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">Principles behind every engagement</h2>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                The operating principles that guide how Agrani designs, delivers, supports, and sustains digital platforms.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} delay={index * 0.04}>
                    <div className="about-value-card group h-full rounded-lg border border-neutral-200 bg-white/85 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-brand-orange/35 hover:shadow-xl">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan transition group-hover:bg-brand-orange group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 font-semibold text-neutral-950">{value.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">{value.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="about-team relative overflow-hidden py-20">
          <Container className="relative">
            <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">Management team</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">Experienced leadership for sustainable growth</h2>
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.05}>
                  <article className="about-team-card group h-full overflow-hidden rounded-lg border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-950/5 transition hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-orange to-brand-cyan text-white shadow-lg shadow-brand-orange/15">
                        <UserRound size={38} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-950">{member.name}</h3>
                        <p className="mt-1 text-sm font-semibold text-brand-orange">{member.role}</p>
                        <p className="mt-1 text-sm text-neutral-500">{member.experience}</p>
                      </div>
                    </div>
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
