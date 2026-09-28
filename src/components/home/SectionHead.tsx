import { LineReveal, Reveal } from "@/components/ui/Motion";

export function SectionHead({
  index,
  kicker,
  lines,
  aside,
  className = "",
  light,
  id,
}: {
  id?: string;
  index: string;
  kicker: string;
  lines: React.ReactNode[];
  aside?: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`grid gap-6 md:grid-cols-12 md:items-end ${className}`}>
      <div className="md:col-span-8">
        <Reveal>
          <p className={`eyebrow flex gap-4 ${light ? "text-sand" : "text-ink-soft"}`}>
            <span>{index}</span>
            <span>{kicker}</span>
          </p>
        </Reveal>
        <LineReveal id={id} lines={lines} className="display mt-5 text-[46px] md:text-[88px]" />
      </div>
      {aside && (
        <Reveal delay={0.15} className={`text-[14px] leading-relaxed md:col-span-3 md:col-start-10 ${light ? "text-ivory/75" : "text-ink-soft"}`}>
          {aside}
        </Reveal>
      )}
    </div>
  );
}
