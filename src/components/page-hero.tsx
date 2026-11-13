import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative h-[55vh] md:h-[65vh] min-h-[420px] flex items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
      <div className="relative container-page pb-12 md:pb-20 text-cream">
        {eyebrow && (
          <span className="block text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4 text-cream/80">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-3xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 md:mt-6 text-base md:text-lg max-w-2xl text-cream/90 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
