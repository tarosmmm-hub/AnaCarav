import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { HolboxSection } from "@/components/home/HolboxSection";
import { EditorialCollection } from "@/components/home/EditorialCollection";
import { NewArrivals } from "@/components/home/NewArrivals";
import { FullBleed } from "@/components/home/FullBleed";
import { Story } from "@/components/home/Story";
import { Craft } from "@/components/home/Craft";
import { Journey } from "@/components/home/Journey";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { FollowSection } from "@/components/home/FollowSection";
import { VisitStore } from "@/components/home/VisitStore";
import { Newsletter } from "@/components/home/Newsletter";
import { getNewArrivals, pick } from "@/lib/catalog";
import { categories, holboxImages } from "@/data/site";

export default async function Home() {
  const arrivals = await getNewArrivals(8);
  const [
    heroLook,
    holboxLook,
    colA,
    colB,
    colC,
    storyLook,
    blockCobre,
    bordo,
    crochet,
    blueCircle,
    manta,
  ] = pick([
    "kimono-royal-blue-circle",
    "kimono-hl-bat-beige",
    "kimono-royal-bordo-gold",
    "conjunto-block-cobre",
    "vestido-toscano-blue-shine",
    "kimono-royal-blue-circle-silver",
    "conjunto-block-cobre",
    "kimono-royal-bordo-gold",
    "cartera-crochet-gold",
    "kimono-royal-blue-circle",
    "manta-hilo-gold",
  ]);
  const catPicks = pick(["vestido-toscano-green-shine", "tunica-new-coni-fucsia-tribal", "kimono-royal-green-gold", "falda-envolvente-block-red", "conjunto-royal-orange", "cartera-crochet-gold"]);
  const follow = pick(["vestido-mini-cuello-v-orange-paisley", "tapado-terciopelo-camel", "vestido-barcelona-woodstock"]);

  return (
    <>
      <Hero look={heroLook} />
      <Marquee />
      <HolboxSection look={holboxLook} />
      <EditorialCollection
        tiles={[
          { product: colA, kicker: "01 · Royal kimonos", note: "Viscosa natural, bordó and gold. Worn open, centred at the bust." },
          { product: colB, img: 2, kicker: "02 · Block print", note: "Printed by hand with metallic pigments." },
          { product: colC, kicker: "03 · Shine", note: "Caribbean blue with a liquid sheen, for the long evenings." },
        ]}
      />
      <NewArrivals products={arrivals} />
      <FullBleed
        src={holboxImages.boat.src}
        alt={holboxImages.boat.alt}
        tone="#7fb7b5"
        kicker="Holbox · Quintana Roo"
        lines={["From an island", "to everywhere."]}
      />
      <Story look={storyLook} />
      <Craft
        items={[
          { product: blockCobre, img: 2, zoom: "50% 50%" },
          { product: bordo, img: 1, zoom: "50% 40%" },
          { product: crochet, img: 1, zoom: "50% 50%" },
          { product: blueCircle, img: 1, zoom: "50% 45%" },
        ]}
      />
      <Journey
        images={[
          { src: colC.images[1].src, alt: colC.images[1].alt, tone: colC.tone },
          { src: holboxImages.flamingos.src, alt: holboxImages.flamingos.alt, tone: "#e9b7a6" },
          { src: manta.images[0].src, alt: manta.images[0].alt, tone: manta.tone },
        ]}
      />
      <Marquee tone="dark" />
      <ShopByCategory items={categories.map((c, i) => ({ category: c, product: catPicks[i] }))} />
      <FollowSection looks={follow} />
      <VisitStore />
      <Newsletter />
    </>
  );
}
