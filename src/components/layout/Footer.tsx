import Link from "next/link";
import { brand, holboxImages } from "@/data/site";

const cols = [
  {
    title: "Shop",
    links: [
      { l: "New arrivals", h: "/shop?sort=new" },
      { l: "Collections", h: "/collections" },
      { l: "Kimonos", h: "/shop/kimonos" },
      { l: "Accessories", h: "/shop/accessories" },
    ],
  },
  {
    title: "House",
    links: [
      { l: "About", h: "/about" },
      { l: "Store", h: "/#visit" },
      { l: "Contact", h: "/about#contact" },
    ],
  },
  {
    title: "Care",
    links: [
      { l: "Shipping", h: "/help#shipping" },
      { l: "Returns", h: "/help#returns" },
    ],
  },
  {
    title: "Social",
    links: [
      { l: "Instagram", h: brand.instagram, ext: true },
      { l: "Chile · caravana.cl", h: brand.chileStore, ext: true },
    ],
  },
];

export function Footer() {
  const credits = Array.from(new Set(Object.values(holboxImages).map((i) => i.credit))).join(", ");
  return (
    <footer className="grain relative overflow-hidden bg-ink text-ivory">
      <div className="mx-auto max-w-[1680px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <p className="eyebrow text-sand">{brand.region}</p>
            <p className="display mt-5 max-w-[16ch] text-[34px] italic md:text-[42px]">{brand.tagline}</p>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title} className="md:col-span-2">
              <p className="eyebrow mb-4 text-sand">{c.title}</p>
              <ul className="space-y-2 text-[14px]">
                {c.links.map((k) => (
                  <li key={k.l}>
                    {"ext" in k ? (
                      <a href={k.h} target="_blank" rel="noreferrer" className="u-link">
                        {k.l}
                      </a>
                    ) : (
                      <Link href={k.h} className="u-link">
                        {k.l}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <p aria-hidden className="display mt-16 w-full text-center text-[15vw] leading-[0.8] font-medium tracking-[0.02em] whitespace-nowrap text-ivory/95 md:mt-24">
        ANA CARAV
      </p>
      <div className="mx-auto flex max-w-[1680px] flex-col gap-2 px-5 py-6 text-[11px] text-ivory/55 md:flex-row md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} ANA CARAV · Holbox, México</span>
        <span>Holbox location photography via Unsplash: {credits}.</span>
      </div>
    </footer>
  );
}
