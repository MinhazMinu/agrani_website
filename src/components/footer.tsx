import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { company, navItems } from "@/lib/company";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Image src="/logo.jpg" alt={company.name} width={220} height={72} className="h-14 w-auto rounded bg-white p-1" />
            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-300">
              Cutting-edge software, cloud, and e-governance solutions for public and private sectors across Bangladesh.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">Pages</h2>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-neutral-300 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-light">Contact</h2>
            <div className="mt-5 space-y-4 text-sm text-neutral-300">
              <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-orange" />{company.address}</p>
              <a href={`tel:${company.phone}`} className="flex gap-3 transition hover:text-white"><Phone className="mt-0.5 h-4 w-4 text-brand-orange" />{company.phone}</a>
              <a href={`mailto:${company.email}`} className="flex gap-3 transition hover:text-white"><Mail className="mt-0.5 h-4 w-4 text-brand-orange" />{company.email}</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-neutral-400">
          © {new Date().getFullYear()} Agrani Technologies & Services Limited. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
