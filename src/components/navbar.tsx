"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/company";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Agrani Technologies home">
          <Image src="/logo.jpg" alt="Agrani Technologies & Services Limited" width={178} height={58} priority className="h-11 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active ? "bg-brand-orange text-white shadow-sm" : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-cyan lg:inline-flex"
        >
          Get in Touch
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-neutral-200 bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                    pathname === item.href ? "bg-brand-orange text-white" : "text-neutral-800 hover:bg-neutral-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
