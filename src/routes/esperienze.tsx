import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Gallery } from "@/components/gallery";
import experiencesImg from "@/assets/experiences.jpg";
import coastalTown from "@/assets/coastal-town.jpg";
import hillVillage from "@/assets/hill-village.jpg";

export const Route = createFileRoute("/esperienze")({
  head: () => ({
    meta: [
      { title: "Esperienze e Territorio — Zagara Blu Hotel & Spa" },
      {
        name: "description",
        content:
          "Attività ed escursioni nei dintorni dello Zagara Blu: mare cristallino, trekking nel parco, visite ai borghi normanni della costa.",
      },
      { property: "og:title", content: "Esperienze in Sicilia — Zagara Blu" },
      {
        property: "og:description",
        content: "Mare, trekking e borghi medievali a due passi da Marina di Serralba.",
      },
    ],
  }),
  component: EsperienzePage,
});

const experiences = [
  {
    title: "Il borgo normanno",
    subtitle: "30 minuti in auto",
    text: "Borgo medievale sul mare con la cattedrale normanna, spiaggia dorata e vicoli pieni di vita: perfetto per una passeggiata al tramonto.",
    img: coastalTown,
  },
  {
    title: "Borghi & parco dell'entroterra",
    subtitle: "45 minuti in auto",
    text: "Trekking tra faggeti e cime del parco regionale, borghi medievali arroccati e la migliore pasticceria siciliana.",
    img: hillVillage,
  },
  {
    title: "Mare & Snorkeling",
    subtitle: "A due passi dall'hotel",
    text: "Fondali cristallini per snorkeling, kayak e giornate in barca lungo la costa tirrenica.",
    img: experiencesImg,
  },
];

function EsperienzePage() {
  return (
    <>
      <PageHero
        eyebrow="Il territorio"
        title="Esperienze in Sicilia"
        description="Dalla costa alle montagne: un territorio da vivere lentamente, con tutti i sensi."
        image={experiencesImg}
      />

      <section className="container-page py-16 md:py-24 space-y-16 md:space-y-24">
        {experiences.map((exp, i) => (
          <article
            key={exp.title}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={exp.img}
                alt={exp.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium">
                {exp.subtitle}
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl mb-5">{exp.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{exp.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-white/50 py-16 md:py-24">
        <div className="container-page">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Galleria</h2>
          <Gallery
            columns={3}
            images={[
              { src: coastalTown, alt: "Borgo sul mare al tramonto", caption: "Il borgo normanno" },
              { src: hillVillage, alt: "Borgo dell'entroterra", caption: "Borghi dell'entroterra" },
              { src: experiencesImg, alt: "Sentiero sulla costa", caption: "Trekking sulla costa" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
