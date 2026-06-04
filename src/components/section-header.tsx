import { Reveal } from "@/components/reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
