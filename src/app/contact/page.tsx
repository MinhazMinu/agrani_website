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
    { label: "Website", value: company.website, icon: Globe2, href: `https://${company.website}` },
  ];

  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#fff7f3_0%,#ffffff_50%,#eef9fb_100%)] py-20">
        <Container>
          <SectionHeader eyebrow="Contact" title="Start a conversation with Agrani Technologies" description="Let’s discuss your ideas, challenges, and technology requirements to build the right solution for your organization." />
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
              <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm">
                <iframe
                  title="Agrani Technologies & Services Limited location map"
                  src="https://www.google.com/maps?q=23.8340264,90.366077&z=17&output=embed"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
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
