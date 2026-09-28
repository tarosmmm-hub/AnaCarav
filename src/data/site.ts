import type { Category, CategoryHandle } from "./types";

/**
 * Brand, navigation and editorial content. Kept apart from product data so
 * copy can move to a CMS later. Rule for this file: no invented facts.
 * Everything factual here comes from the brief (brand name, Holbox store,
 * Chilean presence) or from caravana.cl product copy.
 */
export const brand = {
  name: "ANA CARAV",
  place: "Holbox, Mexico",
  region: "Isla Holbox · Quintana Roo · México",
  tagline: "A fashion world born in Holbox.",
  instagram: "https://www.instagram.com/ana_carav/",
  instagramHandle: "@ana_carav",
  chileStore: "https://caravana.cl/",
  // Exact street address not yet published by the brand: fill in when confirmed.
  address: null as string | null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Isla+Holbox+Quintana+Roo+Mexico",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=-87.4200%2C21.5050%2C-87.3500%2C21.5400&layer=mapnik&marker=21.5230%2C-87.3790",
  shippingNote: "Envío gratis en Chile por compras sobre $130.000.",
};

export const categories: Category[] = [
  { handle: "dresses", label: "Dresses", note: "Vestidos" },
  { handle: "tops", label: "Tops", note: "Tops & túnicas" },
  { handle: "kimonos", label: "Kimonos", note: "Kimonos, mantas & tapados" },
  { handle: "bottoms", label: "Bottoms", note: "Faldas & pantalones" },
  { handle: "sets", label: "Sets", note: "Conjuntos" },
  { handle: "accessories", label: "Accessories", note: "Joyas & carteras" },
];

export const categoryLabel = (h: CategoryHandle) =>
  categories.find((c) => c.handle === h)?.label ?? h;

/** Mega-menu structure. `href` targets live routes in /app. */
export const shopMenu = {
  shop: [
    { label: "New Arrivals", href: "/shop?sort=new" },
    { label: "All Clothing", href: "/shop" },
    { label: "Dresses", href: "/shop/dresses" },
    { label: "Tops", href: "/shop/tops" },
    { label: "Bottoms", href: "/shop/bottoms" },
    { label: "Kimonos", href: "/shop/kimonos" },
    { label: "Sets", href: "/shop/sets" },
    { label: "Accessories", href: "/shop/accessories" },
  ],
  collections: [
    { label: "Current Collection", href: "/collections" },
    { label: "The Royal Edit", href: "/shop?sort=royal" },
    { label: "Sale", href: "/shop?sort=sale" },
  ],
};

/**
 * Location photography of Holbox, used until ANA CARAV's own shoot replaces it.
 * All images: Unsplash License (free commercial use), credited in the footer.
 */
export const holboxImages = {
  aerial: {
    src: "https://images.unsplash.com/photo-1677698324089-7023943edad1",
    alt: "Aerial view of Holbox's shoreline and shallow Caribbean water",
    credit: "Luca Dimola",
  },
  boat: {
    src: "https://images.unsplash.com/photo-1591313995633-7c2fbda937f9",
    alt: "A blue boat resting on calm turquoise water off Holbox",
    credit: "Maria Perez",
  },
  swings: {
    src: "https://images.unsplash.com/photo-1646703186183-f367d1b070e5",
    alt: "Two swings hanging over the water in Holbox",
    credit: "Alejandro Pérez",
  },
  bicycle: {
    src: "https://images.unsplash.com/photo-1613096108994-eeaa920dc1bf",
    alt: "A bicycle parked by a palm and a wooden house on a sand street",
    credit: "The Free Birds",
  },
  mural: {
    src: "https://images.unsplash.com/photo-1726440292325-baf4c5d60e40",
    alt: "A painted mural on a blue wall in Holbox village",
    credit: "Juan Bacab",
  },
  flamingos: {
    src: "https://images.unsplash.com/photo-1725825858745-5c48621df388",
    alt: "Flamingos standing in the lagoon near a boat",
    credit: "Juan Bacab",
  },
  beachHouse: {
    src: "https://images.unsplash.com/photo-1617135562198-7bea191573fd",
    alt: "A wooden beach house on white sand",
    credit: "marco boldrin",
  },
  heron: {
    src: "https://images.unsplash.com/photo-1722290427924-ab6390e0c53e",
    alt: "A white heron standing in the shallows at the beach",
    credit: "Oscar Páramo",
  },
} as const;

export const unsplash = (src: string, w = 1600) =>
  `${src}?auto=format&fit=crop&w=${w}&q=75`;

/**
 * The journey. Only places that can be verified are shown.
 * India appears in the creative brief; publish it here once the brand
 * confirms where its textiles are sourced.
 */
export const journey = [
  {
    place: "Chile",
    line: "Where the story began, as Caravana.",
    detail: "caravana.cl",
  },
  {
    place: "Holbox",
    line: "An island of sand streets. Our home, our boutique.",
    detail: "Quintana Roo, México",
  },
  {
    place: "The World",
    line: "Pieces made to travel, in a suitcase or on a sunburnt shoulder.",
    detail: "Shipping from the collection",
  },
];

/** Craft facts, quoted from the product copy on caravana.cl. */
export const craftNotes = [
  {
    k: "Block print",
    v: "Hecho a mano, con pigmentos metálicos.",
    src: "conjunto-block-cobre",
  },
  {
    k: "Fibre",
    v: "100% viscosa natural.",
    src: "kimono-royal-bordo-gold",
  },
  {
    k: "Crochet",
    v: "Tejido en crochet, en un tono dorado suave.",
    src: "cartera-crochet-gold",
  },
  {
    k: "Cut",
    v: "Manga 3/4 con textura, se usa abierto y centrado al busto.",
    src: "kimono-royal-blue-circle",
  },
];
