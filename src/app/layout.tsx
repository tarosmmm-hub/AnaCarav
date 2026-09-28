import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/providers/StoreProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/layout/Cursor";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { QuickView } from "@/components/commerce/QuickView";
import { SearchOverlay } from "@/components/commerce/SearchOverlay";
import { brand } from "@/data/site";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-bodoni",
  display: "swap",
});
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-manrope", display: "swap" });

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anacarav.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "ANA CARAV · Holbox, Mexico",
    template: "%s · ANA CARAV",
  },
  description:
    "ANA CARAV is a fashion house born on the island of Holbox, Mexico: kimonos in natural viscose, hand block prints, velvet and colour for island days and nights.",
  keywords: ["ANA CARAV", "Ana Carav Holbox", "Holbox fashion", "Holbox Mexico boutique", "bohemian fashion", "artisanal clothing", "kimonos"],
  openGraph: {
    type: "website",
    siteName: "ANA CARAV",
    locale: "en_US",
    alternateLocale: ["es_MX", "es_CL"],
    title: "ANA CARAV · A fashion world born in Holbox",
    description: "Kimonos, sets and dresses from a boutique on the island of Holbox, Mexico.",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f5efe4",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: brand.name,
  url: SITE,
  sameAs: [brand.instagram, brand.chileStore],
  address: { "@type": "PostalAddress", addressLocality: "Holbox", addressRegion: "Quintana Roo", addressCountry: "MX" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="eyebrow sr-only z-[100] bg-ink px-4 py-3 text-ivory focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          Skip to content
        </a>
        <StoreProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <QuickView />
          <CartDrawer />
          <SearchOverlay />
          <Cursor />
        </StoreProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
