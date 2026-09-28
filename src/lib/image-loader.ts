/**
 * Serves every photograph straight from its origin CDN at the requested
 * width. Shopify's CDN and Unsplash both resize on the fly and negotiate
 * AVIF/WebP via the Accept header, so no image server is needed.
 */
export default function loader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const q = quality ?? 72;
  if (src.includes("cdn.shopify.com")) {
    const sep = src.includes("?") ? "&" : "?";
    return `${src}${sep}width=${width}`;
  }
  if (src.includes("images.unsplash.com")) {
    const base = src.split("?")[0];
    return `${base}?auto=format&fit=crop&w=${width}&q=${q}`;
  }
  return src;
}
