import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  tone?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  position?: string;
};

/**
 * Every photograph on the site. Fills its (relatively positioned) parent,
 * holds a tone swatch while loading so layout never shifts, and lazy-loads
 * unless `priority` is set.
 */
export function Photo({ src, alt, sizes, tone = "#d8c4a2", priority, className = "", imgClassName = "", position = "center" }: Props) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ backgroundColor: tone }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        className={`object-cover text-transparent ${imgClassName}`}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
