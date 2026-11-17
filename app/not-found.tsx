import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid-swiss min-h-[70dvh] content-center">
      <h1 className="col-span-full text-display font-semibold">
        Not <span className="font-serif font-normal italic">here</span>
      </h1>
      <Link href="/" className="col-span-full mt-8 font-mono text-label uppercase hover:text-accent">
        ← Back home
      </Link>
    </section>
  );
}
