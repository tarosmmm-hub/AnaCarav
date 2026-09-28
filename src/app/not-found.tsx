import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-ivory px-5 pt-24 text-center">
      <p className="eyebrow text-ink-soft">404</p>
      <h1 className="display mt-4 text-[48px] md:text-[80px]">
        Lost on the <em>sand.</em>
      </h1>
      <Link href="/" className="eyebrow group mt-10 inline-flex gap-2">
        <span className="u-link">Back to the island</span> <span className="arrow">→</span>
      </Link>
    </section>
  );
}
