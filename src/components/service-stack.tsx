"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { serviceDetails } from "@/lib/company";

const AUTO_ADVANCE_MS = 3600;

export function ServiceStack() {
  const [autoIndex, setAutoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = hoveredIndex ?? autoIndex;

  useEffect(() => {
    if (hoveredIndex !== null) {
      return;
    }

    const timer = window.setInterval(() => {
      setAutoIndex((current) => (current + 1) % serviceDetails.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [hoveredIndex]);

  return (
    <div className="service-stack-list" onMouseLeave={() => setHoveredIndex(null)}>
      {serviceDetails.map((service, index) => {
        const Icon = service.icon;
        const isActive = activeIndex === index;

        return (
          <motion.article
            key={service.title}
            aria-expanded={isActive}
            className={`service-stack-card group ${isActive ? "is-active" : ""}`}
            onFocus={() => setHoveredIndex(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            style={{ zIndex: isActive ? serviceDetails.length + 1 : serviceDetails.length - index }}
            tabIndex={0}
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-brand-cyan shadow-lg shadow-brand-cyan/10 transition group-[.is-active]:bg-brand-orange group-[.is-active]:text-white">
                <Icon size={26} />
              </span>
              <div>
                <h2 className="service-card-title text-lg font-semibold text-white">{service.title}</h2>
                <motion.p
                  animate={{ opacity: isActive ? 1 : 0 }}
                  aria-hidden={!isActive}
                  className="service-stack-kicker mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange-light"
                  initial={false}
                  transition={{ duration: 0.16 }}
                >
                  Service line
                </motion.p>
              </div>
            </div>

            <motion.div
              animate={{ height: isActive ? "auto" : 0, marginTop: isActive ? 24 : 0, opacity: isActive ? 1 : 0 }}
              className="service-stack-card-content"
              initial={false}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="grid gap-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.article>
        );
      })}
    </div>
  );
}
