import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { company } from "@/lib/company";

export const metadata = {
  title: "Contact | Agrani Technologies & Services Limited",
};

export default function ContactPage() {
  const contacts = [
    { label: "Address", value: company.address, icon: MapPin, href: null },
    { label: "Phone", value: company.phone, icon: Phone, href: `tel:${company.phone}` },
    { label: "Email", value: company.email, icon: Mail, href: `mailto:${company.email}` },
    { label: "Website", value: company.website, icon: Globe2, href: "https://www.agranitech.net" },
  ];

  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#fff7f3_0%,#ffffff_50%,#eef9fb_100%)] py-20">
        <Container>
          <SectionHeader eyebrow="Contact" title="Start a conversation with Agrani Technologies" description="Use the frontend-only contact form for now, or reach the team directly by phone or email." />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="grid gap-4">
              {contacts.map((item, index) => {
                const Icon = item.icon;
                const body = (
                  <div className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-brand-orange/30 hover:shadow-lg">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-500">{item.label}</p>
                      <p className="mt-1 font-semibold text-neutral-950">{item.value}</p>
                    </div>
                  </div>
                );

                return (
                  <Reveal key={item.label} delay={index * 0.04}>
                    {item.href ? <a href={item.href}>{body}</a> : body}
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={0.14}>
              <div className="mt-6 flex min-h-72 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-6 text-center">
                <div>
                  <MapPin className="mx-auto h-8 w-8 text-brand-cyan" />
                  <h2 className="mt-4 text-lg font-semibold text-neutral-950">Map placeholder</h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
                    House 99, Block C, Road 11, Banani, Dhaka-1213
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
