import type { Product } from "./types";

/**
 * Real catalog from https://caravana.cl (Shopify `products.json`), verified
 * product by product on 2026-09-28. Names, prices, sizes, availability, copy
 * and photographs are the store's own; nothing here is invented.
 * Prices are CLP. `compareAtPrice` is the store's own crossed-out price.
 *
 * To go live, replace `getProducts()` in src/lib/catalog.ts with a Storefront
 * API query that returns this same `Product` shape.
 */
export const products: Product[] = [
  {
    handle: "kimono-royal-blue-circle",
    title: "Kimono Royal Blue Circle",
    category: "kimonos",
    description: "Kimono manga 3/4 con textura. Se usa abierto y centrado al busto, con detalles dorados.",
    material: "100% viscosa natural",
    measurements: "Talla única · largo 130 cm · contorno 82 cm",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/873F5F6D-F213-4B56-A650-C055D7FFA41F.png?v=1779574029", alt: "Kimono Royal Blue Circle" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/E1F82944-32A2-4FF1-9C93-F4A61EF0E821.png?v=1779574029", alt: "Kimono Royal Blue Circle — vista 2" },
    ],
    variants: [
      { id: "kimono-royal-blue-circle::Talla única", title: "Talla única", price: { amount: 79200, currencyCode: "CLP" }, compareAtPrice: { amount: 198000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 18,
    tone: "#2f5d86",
    sourceUrl: "https://caravana.cl/products/kimono-royal-blue-circle",
  },
  {
    handle: "conjunto-royal-orange",
    title: "Conjunto Royal Orange",
    category: "sets",
    description: "Top con breteles adaptables, falda envolvente ajustable al cuerpo.",
    material: "100% viscosa natural",
    measurements: "Top: largo 36 cm, cintura adaptable · Falda: largo 103 cm, cintura 60–90 cm, cadera hasta 100 cm",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-3950.png?v=1779573950", alt: "Conjunto Royal Orange" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-3952.png?v=1779573951", alt: "Conjunto Royal Orange — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-3951.png?v=1779573950", alt: "Conjunto Royal Orange — vista 3" },
    ],
    variants: [
      { id: "conjunto-royal-orange::Talla única", title: "Talla única", price: { amount: 99200, currencyCode: "CLP" }, compareAtPrice: { amount: 248000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 19,
    tone: "#c96a2b",
    sourceUrl: "https://caravana.cl/products/conjunto-royal-orange",
  },
  {
    handle: "vestido-toscano-green-shine",
    title: "Vestido Toscano Green Shine",
    category: "dresses",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/7DF22F6E-C965-43BA-9EA7-5CCA6757EEE7.png?v=1779573881", alt: "Vestido Toscano Green Shine" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/090310F9-DA30-4442-AD54-53C9C75C635C.png?v=1779573880", alt: "Vestido Toscano Green Shine — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/FD44BC24-E04A-42CC-9044-2034C4FA9A09.png?v=1779573880", alt: "Vestido Toscano Green Shine — vista 3" },
    ],
    variants: [
      { id: "vestido-toscano-green-shine::Talla única", title: "Talla única", price: { amount: 67200, currencyCode: "CLP" }, compareAtPrice: { amount: 168000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 20,
    tone: "#4f6b45",
    sourceUrl: "https://caravana.cl/products/vestido-toscano-green-shine",
  },
  {
    handle: "kimono-royal-green-gold",
    title: "Kimono Royal Green & Gold",
    category: "kimonos",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6432.png?v=1790340867", alt: "Kimono Royal Green & Gold" },
    ],
    variants: [
      { id: "kimono-royal-green-gold::Talla única", title: "Talla única", price: { amount: 79200, currencyCode: "CLP" }, compareAtPrice: { amount: 198000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 5,
    tone: "#3e5a3a",
    sourceUrl: "https://caravana.cl/products/kimono-royal-green-gold",
  },
  {
    handle: "pantalon-chita-print",
    title: "Pantalón Chita Print",
    category: "bottoms",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/564058C7-179A-45E2-94C2-BDD4EC26E6B2.png?v=1790538190", alt: "Pantalón Chita Print" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/5EFFE4DA-E1B4-4879-88D9-B04CDED95422.png?v=1790538190", alt: "Pantalón Chita Print — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/352EB9CB-304A-45DF-8762-D8FD420D0639.png?v=1790538190", alt: "Pantalón Chita Print — vista 3" },
    ],
    variants: [
      { id: "pantalon-chita-print::S", title: "S", price: { amount: 63200, currencyCode: "CLP" }, compareAtPrice: { amount: 158000, currencyCode: "CLP" }, availableForSale: true },
      { id: "pantalon-chita-print::M", title: "M", price: { amount: 63200, currencyCode: "CLP" }, compareAtPrice: { amount: 158000, currencyCode: "CLP" }, availableForSale: true },
      { id: "pantalon-chita-print::L", title: "L", price: { amount: 63200, currencyCode: "CLP" }, compareAtPrice: { amount: 158000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 8,
    tone: "#a8814f",
    sourceUrl: "https://caravana.cl/products/pantalon-chita-print",
  },
  {
    handle: "vestido-mini-cuello-v-orange-paisley",
    title: "Vestido Mini Cuello V Orange Paisley",
    category: "dresses",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/6C240AC2-C0F0-467F-83A2-A8492BB5ADFD.png?v=1783806938", alt: "Vestido Mini Cuello V Orange Paisley" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/74841130-00D2-4A7E-B72F-08A87C6E1C4C.png?v=1783806938", alt: "Vestido Mini Cuello V Orange Paisley — vista 2" },
    ],
    variants: [
      { id: "vestido-mini-cuello-v-orange-paisley::Talla única", title: "Talla única", price: { amount: 39200, currencyCode: "CLP" }, compareAtPrice: { amount: 98000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 13,
    tone: "#d27a3a",
    sourceUrl: "https://caravana.cl/products/vestido-mini-cuello-v-orange-paisley",
  },
  {
    handle: "tapado-terciopelo-camel",
    title: "Tapado Terciopelo Camel",
    category: "kimonos",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/E250F978-2D5F-4F5E-908C-E88926EE5FC3.png?v=1790302252", alt: "Tapado Terciopelo Camel" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/37CFD5B0-05A4-4CC3-B674-798311AFB77E.png?v=1790302252", alt: "Tapado Terciopelo Camel — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/33D32F87-DA39-41E6-AE68-9E78931B9E11.png?v=1790302252", alt: "Tapado Terciopelo Camel — vista 3" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/2B562786-2C3A-435E-BD27-F050808814CF.png?v=1790302252", alt: "Tapado Terciopelo Camel — vista 4" },
    ],
    variants: [
      { id: "tapado-terciopelo-camel::Talla única", title: "Talla única", price: { amount: 79200, currencyCode: "CLP" }, compareAtPrice: { amount: 198000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 7,
    tone: "#b08658",
    sourceUrl: "https://caravana.cl/products/tapado-terciopelo-camel",
  },
  {
    handle: "kimono-royal-bordo-gold",
    title: "Kimono Royal Bordo Gold",
    category: "kimonos",
    description: "Kimono manga 3/4 con textura. Se usa abierto y centrado al busto, color bordó con detalles dorados.",
    material: "100% viscosa natural",
    measurements: "Talla única · largo 130 cm · contorno 82 cm",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/0B6543E6-94BD-4A8D-8F70-0AF17D9E179A.png?v=1779570117", alt: "Kimono Royal Bordo Gold" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/F3B9D4D0-5ECA-4D48-9CC6-E78634B68C7A.png?v=1779570117", alt: "Kimono Royal Bordo Gold — vista 2" },
    ],
    variants: [
      { id: "kimono-royal-bordo-gold::Talla única", title: "Talla única", price: { amount: 79200, currencyCode: "CLP" }, compareAtPrice: { amount: 198000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 23,
    tone: "#6e2630",
    sourceUrl: "https://caravana.cl/products/kimono-royal-bordo-gold",
  },
  {
    handle: "kimono-royal-blue-circle-silver",
    title: "Kimono Royal Blue Circle Silver",
    category: "kimonos",
    description: "Kimono manga 3/4 con textura. Se usa abierto y centrado al busto, con detalles silver.",
    material: "100% viscosa natural",
    measurements: "Talla única · largo 130 cm · contorno 82 cm",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/94D58BCF-A1B8-43F2-A6BA-AF4FD1BBE4AB.png?v=1779570275", alt: "Kimono Royal Blue Circle Silver" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/7C32BAB5-6399-4990-A41B-40EC5C25FA23.png?v=1779570275", alt: "Kimono Royal Blue Circle Silver — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/4E00568A-EB55-47E7-9CFB-71A9615D22C1.png?v=1779570275", alt: "Kimono Royal Blue Circle Silver — vista 3" },
    ],
    variants: [
      { id: "kimono-royal-blue-circle-silver::Talla única", title: "Talla única", price: { amount: 79200, currencyCode: "CLP" }, compareAtPrice: { amount: 198000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 22,
    tone: "#35557a",
    sourceUrl: "https://caravana.cl/products/kimono-royal-blue-circle-silver",
  },
  {
    handle: "vestido-toscano-blue-shine",
    title: "Vestido Toscano Blue Shine",
    category: "dresses",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/BFB307B8-F1AB-44AB-BD65-C8D6434AFC9B.png?v=1779573817", alt: "Vestido Toscano Blue Shine" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/12C01D09-ED15-45D6-9866-3417509B83E5.png?v=1779573817", alt: "Vestido Toscano Blue Shine — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/07B84A6F-7F49-458A-948E-58BF5BAB01E5.png?v=1779573817", alt: "Vestido Toscano Blue Shine — vista 3" },
    ],
    variants: [
      { id: "vestido-toscano-blue-shine::Talla única", title: "Talla única", price: { amount: 67200, currencyCode: "CLP" }, compareAtPrice: { amount: 168000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 21,
    tone: "#3d6f93",
    sourceUrl: "https://caravana.cl/products/vestido-toscano-blue-shine",
  },
  {
    handle: "vestido-mini-cuello-v-forest-paisley",
    title: "Vestido Mini Cuello V Forest Paisley",
    category: "dresses",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/445BC240-B4DB-47AF-8806-9906C3EEF6EA.png?v=1783806876", alt: "Vestido Mini Cuello V Forest Paisley" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/35110306-C8DE-451B-9587-2168BA820DB9.png?v=1783806876", alt: "Vestido Mini Cuello V Forest Paisley — vista 2" },
    ],
    variants: [
      { id: "vestido-mini-cuello-v-forest-paisley::Talla única", title: "Talla única", price: { amount: 39200, currencyCode: "CLP" }, compareAtPrice: { amount: 98000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 14,
    tone: "#566b44",
    sourceUrl: "https://caravana.cl/products/vestido-mini-cuello-v-forest-paisley",
  },
  {
    handle: "vestido-barcelona-woodstock",
    title: "Vestido Barcelona Woodstock",
    category: "dresses",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/F30777D6-D860-443F-9AE1-27A567A1F230.png?v=1783806416", alt: "Vestido Barcelona Woodstock" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/390AFD1D-4310-48B9-A5F1-CB0E00327B0B.png?v=1783806416", alt: "Vestido Barcelona Woodstock — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/37429C8B-BB40-4489-A95E-2DEA62053AC2.png?v=1783806416", alt: "Vestido Barcelona Woodstock — vista 3" },
    ],
    variants: [
      { id: "vestido-barcelona-woodstock::Talla única", title: "Talla única", price: { amount: 55200, currencyCode: "CLP" }, compareAtPrice: { amount: 138000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 17,
    tone: "#b9674a",
    sourceUrl: "https://caravana.cl/products/vestido-barcelona-woodstock",
  },
  {
    handle: "vestido-dreams-black-flower",
    title: "Vestido Dreams Black Flower",
    category: "dresses",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/33DE1B5E-8777-44A6-916A-1D462BDDA46E.png?v=1783806540", alt: "Vestido Dreams Black Flower" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/8FB706E1-7E03-4F45-BE3E-318987184CB2.png?v=1783806540", alt: "Vestido Dreams Black Flower — vista 2" },
    ],
    variants: [
      { id: "vestido-dreams-black-flower::Talla única", title: "Talla única", price: { amount: 55200, currencyCode: "CLP" }, compareAtPrice: { amount: 138000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 16,
    tone: "#2a2622",
    sourceUrl: "https://caravana.cl/products/vestido-dreams-black-flower",
  },
  {
    handle: "tunica-new-coni-fucsia-tribal",
    title: "Túnica New Coni Fucsia Tribal",
    category: "tops",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/3C37FE6F-E8AA-4A91-97BB-9A0903B1B905.png?v=1784006497", alt: "Túnica New Coni Fucsia Tribal" },
    ],
    variants: [
      { id: "tunica-new-coni-fucsia-tribal::S/M", title: "S/M", price: { amount: 51200, currencyCode: "CLP" }, compareAtPrice: { amount: 128000, currencyCode: "CLP" }, availableForSale: true },
      { id: "tunica-new-coni-fucsia-tribal::M/L", title: "M/L", price: { amount: 51200, currencyCode: "CLP" }, compareAtPrice: { amount: 128000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 12,
    tone: "#b8406e",
    sourceUrl: "https://caravana.cl/products/tunica-new-coni-fucsia-tribal",
  },
  {
    handle: "falda-envolvente-block-red",
    title: "Falda Envolvente Block Red",
    category: "bottoms",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/440B577F-F597-494F-BE0E-F423EE03C5E1.png?v=1790551393", alt: "Falda Envolvente Block Red" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/294B75DD-9738-45A8-8B9B-24CDF3FCDC0C.png?v=1790551393", alt: "Falda Envolvente Block Red — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/767011F4-CE45-4D48-B1BF-41686155E84B.png?v=1790551393", alt: "Falda Envolvente Block Red — vista 3" },
    ],
    variants: [
      { id: "falda-envolvente-block-red::Talla única", title: "Talla única", price: { amount: 67200, currencyCode: "CLP" }, compareAtPrice: { amount: 168000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 1,
    tone: "#a83a2e",
    sourceUrl: "https://caravana.cl/products/falda-envolvente-block-red",
  },
  {
    handle: "manta-hilo-gold",
    title: "Manta Hilo Gold",
    category: "kimonos",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/70D39ED3-19A0-4F9A-AAE3-C6727171376A.png?v=1790551872", alt: "Manta Hilo Gold" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/145CD98C-1DF5-4E4E-8B77-2D8C112ABCB5.png?v=1790551872", alt: "Manta Hilo Gold — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/4363444A-646A-4B6E-873E-B17D95E57009.png?v=1790551872", alt: "Manta Hilo Gold — vista 3" },
    ],
    variants: [
      { id: "manta-hilo-gold::Talla única", title: "Talla única", price: { amount: 59200, currencyCode: "CLP" }, compareAtPrice: { amount: 148000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 0,
    tone: "#c9a45a",
    sourceUrl: "https://caravana.cl/products/manta-hilo-gold",
  },
  {
    handle: "kimono-hl-bat-beige",
    title: "Kimono HL Bat Beige",
    category: "kimonos",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/58D91CB2-6E4A-4637-8EE4-93F39B958517.png?v=1784038995", alt: "Kimono HL Bat Beige" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/AB95C1FC-EA27-420D-ACC4-8A6298790AA9.png?v=1784038995", alt: "Kimono HL Bat Beige — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/EE1B621D-EBA9-4BE7-AC00-BC557558A9A1.png?v=1784038995", alt: "Kimono HL Bat Beige — vista 3" },
    ],
    variants: [
      { id: "kimono-hl-bat-beige::Talla única", title: "Talla única", price: { amount: 59200, currencyCode: "CLP" }, compareAtPrice: { amount: 148000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 9,
    tone: "#cdb793",
    sourceUrl: "https://caravana.cl/products/kimono-hl-bat-beige",
  },
  {
    handle: "tapado-terciopelo-malva",
    title: "Tapado Terciopelo Malva",
    category: "kimonos",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6429.png?v=1790340542", alt: "Tapado Terciopelo Malva" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6431.png?v=1790340542", alt: "Tapado Terciopelo Malva — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6430.png?v=1790340542", alt: "Tapado Terciopelo Malva — vista 3" },
    ],
    variants: [
      { id: "tapado-terciopelo-malva::Talla única", title: "Talla única", price: { amount: 79200, currencyCode: "CLP" }, compareAtPrice: { amount: 198000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 6,
    tone: "#8c6477",
    sourceUrl: "https://caravana.cl/products/tapado-terciopelo-malva",
  },
  {
    handle: "falda-envolvente-shine",
    title: "Falda Envolvente Shine",
    category: "bottoms",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6434.png?v=1790349512", alt: "Falda Envolvente Shine" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6433.png?v=1790349512", alt: "Falda Envolvente Shine — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6436.png?v=1790349512", alt: "Falda Envolvente Shine — vista 3" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6435.png?v=1790349512", alt: "Falda Envolvente Shine — vista 4" },
    ],
    variants: [
      { id: "falda-envolvente-shine::Talla única", title: "Talla única", price: { amount: 67200, currencyCode: "CLP" }, compareAtPrice: { amount: 168000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 4,
    tone: "#b89b6a",
    sourceUrl: "https://caravana.cl/products/falda-envolvente-shine",
  },
  {
    handle: "vestido-mini-cuello-v-pink-flower",
    title: "Vestido Mini Cuello V Pink Flower",
    category: "dresses",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/A71F5DE6-28B6-470A-9FBE-C1D64466F631.png?v=1783806795", alt: "Vestido Mini Cuello V Pink Flower" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/B9B14607-EE7D-4520-9D18-B8D9DDD3F98C.png?v=1783806795", alt: "Vestido Mini Cuello V Pink Flower — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/68C2C1FD-3F98-4DD0-B417-69BE3F532DF3.png?v=1783806795", alt: "Vestido Mini Cuello V Pink Flower — vista 3" },
    ],
    variants: [
      { id: "vestido-mini-cuello-v-pink-flower::Talla única", title: "Talla única", price: { amount: 39200, currencyCode: "CLP" }, compareAtPrice: { amount: 98000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 15,
    tone: "#d68a9a",
    sourceUrl: "https://caravana.cl/products/vestido-mini-cuello-v-pink-flower",
  },
  {
    handle: "sin-titulo-23may_16-43-22",
    title: "Kimono Royal Silver Square",
    category: "kimonos",
    description: "Kimono manga 3/4 con textura. Se usa abierto y centrado al busto, color negro con detalles silver.",
    material: "100% viscosa natural",
    measurements: "Talla única · largo 130 cm · contorno 82 cm",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/4514E095-A9CD-4231-A63E-16CACC684369.png?v=1779569975", alt: "Kimono Royal Silver Square" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/D7244FCD-5531-42BE-8B10-D03F122EBB3A.png?v=1779569975", alt: "Kimono Royal Silver Square — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/81444F57-D4AB-4C7C-A3B7-702A89CD6B9F.png?v=1779569975", alt: "Kimono Royal Silver Square — vista 3" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/B817CD5A-EB8E-4B08-AA18-B9FFE99CEA37.png?v=1779569975", alt: "Kimono Royal Silver Square — vista 4" },
    ],
    variants: [
      { id: "sin-titulo-23may_16-43-22::Talla única", title: "Talla única", price: { amount: 79200, currencyCode: "CLP" }, compareAtPrice: { amount: 198000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 24,
    tone: "#2b2a2c",
    sourceUrl: "https://caravana.cl/products/sin-titulo-23may_16-43-22",
  },
  {
    handle: "top-v-shine",
    title: "Top V Shine",
    category: "tops",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6434.png?v=1790349512", alt: "Top V Shine" },
    ],
    variants: [
      { id: "top-v-shine::Talla única", title: "Talla única", price: { amount: 39200, currencyCode: "CLP" }, compareAtPrice: { amount: 98000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 2,
    tone: "#b89b6a",
    sourceUrl: "https://caravana.cl/products/top-v-shine",
  },
  {
    handle: "peto-strap-shine",
    title: "Peto Strap Shine",
    category: "tops",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6438.png?v=1790350744", alt: "Peto Strap Shine" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-6440.png?v=1790350744", alt: "Peto Strap Shine — vista 2" },
    ],
    variants: [
      { id: "peto-strap-shine::Talla única", title: "Talla única", price: { amount: 31200, currencyCode: "CLP" }, compareAtPrice: { amount: 78000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 3,
    tone: "#a88f66",
    sourceUrl: "https://caravana.cl/products/peto-strap-shine",
  },
  {
    handle: "top-mini-color-gold",
    title: "Top Mini Color Gold",
    category: "tops",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/18FC9617-1FAA-4969-896A-FCA62AA923EC.png?v=1784016099", alt: "Top Mini Color Gold" },
    ],
    variants: [
      { id: "top-mini-color-gold::Talla única", title: "Talla única", price: { amount: 31200, currencyCode: "CLP" }, compareAtPrice: { amount: 78000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 10,
    tone: "#c9a14a",
    sourceUrl: "https://caravana.cl/products/top-mini-color-gold",
  },
  {
    handle: "top-mini-color-mustard",
    title: "Top Mini Color Mustard",
    category: "tops",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/BC2646F6-298C-4789-9BFB-5D8C8AE9EBAC.png?v=1784016053", alt: "Top Mini Color Mustard" },
    ],
    variants: [
      { id: "top-mini-color-mustard::Talla única", title: "Talla única", price: { amount: 31200, currencyCode: "CLP" }, compareAtPrice: { amount: 78000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 11,
    tone: "#c2952f",
    sourceUrl: "https://caravana.cl/products/top-mini-color-mustard",
  },
  {
    handle: "conjunto-royal-animal",
    title: "Conjunto Royal Animal",
    category: "sets",
    description: "Top con breteles adaptables, falda envolvente ajustable al cuerpo.",
    material: "100% viscosa natural",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-3419.png?v=1777578568", alt: "Conjunto Royal Animal" },
    ],
    variants: [
      { id: "conjunto-royal-animal::Talla única", title: "Talla única", price: { amount: 99200, currencyCode: "CLP" }, compareAtPrice: { amount: 248000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 25,
    tone: "#a37b4f",
    sourceUrl: "https://caravana.cl/products/conjunto-royal-animal",
  },
  {
    handle: "conjunto-block-cobre",
    title: "Conjunto Block Cobre",
    category: "sets",
    description: "Top y falda adaptables al cuerpo, con detalle block print, hecho a mano, con pigmentos metálicos.",
    material: "100% viscosa natural",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/20.jpg?v=1770841341", alt: "Conjunto Block Cobre" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/21.jpg?v=1770841357", alt: "Conjunto Block Cobre — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/22.jpg?v=1770841373", alt: "Conjunto Block Cobre — vista 3" },
    ],
    variants: [
      { id: "conjunto-block-cobre::Talla única", title: "Talla única", price: { amount: 99200, currencyCode: "CLP" }, compareAtPrice: { amount: 248000, currencyCode: "CLP" }, availableForSale: false },
    ],
    rank: 26,
    tone: "#9a5a36",
    sourceUrl: "https://caravana.cl/products/conjunto-block-cobre",
  },
  {
    handle: "conjunto-royal-aqua-print",
    title: "Conjunto Royal Aqua Print",
    category: "sets",
    description: "Top y falda adaptables al cuerpo, con block print realizada a mano.",
    material: "100% viscosa natural",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/CONJUNTOROYALAQUAPRINTADELANTE.jpg?v=1770839803", alt: "Conjunto Royal Aqua Print" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/CONJUNTO_ROYAL_AQUA_PRINT_ATRAS.jpg?v=1770839817", alt: "Conjunto Royal Aqua Print — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/CONJUNTO_ROYAL_AQUA_PRINT_DETALLE.jpg?v=1770839821", alt: "Conjunto Royal Aqua Print — vista 3" },
    ],
    variants: [
      { id: "conjunto-royal-aqua-print::Talla única", title: "Talla única", price: { amount: 99200, currencyCode: "CLP" }, compareAtPrice: { amount: 248000, currencyCode: "CLP" }, availableForSale: false },
    ],
    rank: 27,
    tone: "#4f9a9a",
    sourceUrl: "https://caravana.cl/products/conjunto-royal-aqua-print",
  },
  {
    handle: "set-tropical-black-paint",
    title: "Set Tropical Black Paint",
    category: "sets",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/SETTROPICALBLACKPAINT.jpg?v=1746830986", alt: "Set Tropical Black Paint" },
    ],
    variants: [
      { id: "set-tropical-black-paint::S/M", title: "S/M", price: { amount: 63200, currencyCode: "CLP" }, compareAtPrice: { amount: 158000, currencyCode: "CLP" }, availableForSale: true },
      { id: "set-tropical-black-paint::M/L", title: "M/L", price: { amount: 63200, currencyCode: "CLP" }, compareAtPrice: { amount: 158000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 28,
    tone: "#2c2a26",
    sourceUrl: "https://caravana.cl/products/set-tropical-black-paint",
  },
  {
    handle: "cartera-crochet-gold",
    title: "Cartera Crochet Gold",
    category: "accessories",
    description: "Tejido en crochet, en un tono dorado suave, aporta textura y un brillo sutil.",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/9484AD83-45E4-4F08-A935-F4AE8FDD7E11.png?v=1772387724", alt: "Cartera Crochet Gold" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/15409785-4F57-49E5-9DEE-9C3AF164372B.png?v=1772387724", alt: "Cartera Crochet Gold — vista 2" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/E3011D45-517A-4ED3-ABDC-191F0238092C.png?v=1772387724", alt: "Cartera Crochet Gold — vista 3" },
    ],
    variants: [
      { id: "cartera-crochet-gold::Talla única", title: "Talla única", price: { amount: 27200, currencyCode: "CLP" }, compareAtPrice: { amount: 68000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 129,
    tone: "#c8a86a",
    sourceUrl: "https://caravana.cl/products/cartera-crochet-gold",
  },
  {
    handle: "collar-spiral-silver",
    title: "Collar Spiral Silver",
    category: "accessories",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-2249.png?v=1772383711", alt: "Collar Spiral Silver" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-2251.png?v=1772383710", alt: "Collar Spiral Silver — vista 2" },
    ],
    variants: [
      { id: "collar-spiral-silver::Talla única", title: "Talla única", price: { amount: 27200, currencyCode: "CLP" }, compareAtPrice: { amount: 68000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 130,
    tone: "#b9b6ae",
    sourceUrl: "https://caravana.cl/products/collar-spiral-silver",
  },
  {
    handle: "sin-nombre-1mar_14-04",
    title: "Brazalete Cuff Gold",
    category: "accessories",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-2284.png?v=1772385848", alt: "Brazalete Cuff Gold" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-2285.png?v=1772385847", alt: "Brazalete Cuff Gold — vista 2" },
    ],
    variants: [
      { id: "sin-nombre-1mar_14-04::Talla única", title: "Talla única", price: { amount: 19200, currencyCode: "CLP" }, compareAtPrice: { amount: 48000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 131,
    tone: "#c9a14a",
    sourceUrl: "https://caravana.cl/products/sin-nombre-1mar_14-04",
  },
  {
    handle: "anillo-red-gold",
    title: "Anillo Red Gold",
    category: "accessories",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/B36A02E1-1262-46B7-8F34-AA2F8DFF5EE7.png?v=1772386743", alt: "Anillo Red Gold" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/2C1B372E-518E-494D-98F1-289C59AB0A32.png?v=1774647195", alt: "Anillo Red Gold — vista 2" },
    ],
    variants: [
      { id: "anillo-red-gold::Talla única", title: "Talla única", price: { amount: 15200, currencyCode: "CLP" }, compareAtPrice: { amount: 38000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 132,
    tone: "#a8433a",
    sourceUrl: "https://caravana.cl/products/anillo-red-gold",
  },
  {
    handle: "collar-mini-cross-gold",
    title: "Collar Mini Cross Gold",
    category: "accessories",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/65085854-91D5-441F-8363-9FCE5E02993D.png?v=1772387354", alt: "Collar Mini Cross Gold" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/44CF1B26-B351-438E-8448-E3EF0DA829E3.png?v=1772387354", alt: "Collar Mini Cross Gold — vista 2" },
    ],
    variants: [
      { id: "collar-mini-cross-gold::Talla única", title: "Talla única", price: { amount: 27200, currencyCode: "CLP" }, compareAtPrice: { amount: 68000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 133,
    tone: "#c9a14a",
    sourceUrl: "https://caravana.cl/products/collar-mini-cross-gold",
  },
  {
    handle: "aros-flakes-silver",
    title: "Aros Flakes Silver",
    category: "accessories",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-2287.png?v=1772407137", alt: "Aros Flakes Silver" },
    ],
    variants: [
      { id: "aros-flakes-silver::Talla única", title: "Talla única", price: { amount: 19200, currencyCode: "CLP" }, compareAtPrice: { amount: 48000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 134,
    tone: "#b9b6ae",
    sourceUrl: "https://caravana.cl/products/aros-flakes-silver",
  },
  {
    handle: "collar-cow-white",
    title: "Collar Cow White",
    category: "accessories",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/1D9A72D2-7A3C-43D7-B4E1-B83BE6E2031E.png?v=1772388038", alt: "Collar Cow White" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/D980D8B7-F6B0-492D-BE28-14A54A63E7EF.png?v=1774648793", alt: "Collar Cow White — vista 2" },
    ],
    variants: [
      { id: "collar-cow-white::Talla única", title: "Talla única", price: { amount: 19200, currencyCode: "CLP" }, compareAtPrice: { amount: 48000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 135,
    tone: "#e6dfd2",
    sourceUrl: "https://caravana.cl/products/collar-cow-white",
  },
  {
    handle: "brazalete-seven-cuff",
    title: "Brazalete Seven Cuff",
    category: "accessories",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-2283.png?v=1772384635", alt: "Brazalete Seven Cuff" },
      { src: "https://cdn.shopify.com/s/files/1/0669/6242/4006/files/IMG-2257.png?v=1772384635", alt: "Brazalete Seven Cuff — vista 2" },
    ],
    variants: [
      { id: "brazalete-seven-cuff::Talla única", title: "Talla única", price: { amount: 19200, currencyCode: "CLP" }, compareAtPrice: { amount: 48000, currencyCode: "CLP" }, availableForSale: true },
    ],
    rank: 136,
    tone: "#c9a14a",
    sourceUrl: "https://caravana.cl/products/brazalete-seven-cuff",
  },
];
