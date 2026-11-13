import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroSea from "@/assets/hero-sea.jpg";

export const Route = createFileRoute("/offerte")({
  head: () => ({
    meta: [
      { title: "Offerte e Pacchetti — Zagara Blu Hotel & Spa" },
      {
        name: "description",
        content:
          "Pacchetti stagionali e promozioni dello Zagara Blu: vacanze in famiglia, Spa, soggiorni lunghi e last minute in Sicilia.",
      },
      { property: "og:title", content: "Offerte — Zagara Blu" },
      {
        property: "og:description",
        content: "Promozioni stagionali e pacchetti wellness sul mare in Sicilia.",
      },
    ],
  }),
  component: OffertePage,
});

const offers = [
  {
    tag: "Estate",
    title: "Long Stay Mediterraneo",
    text: "Prenota 7 notti e ricevi la settima notte in omaggio. Colazione inclusa e sconto Spa 15%.",
    price: "da € 90 / notte",
  },
  {
    tag: "Wellness",
    title: "Pacchetto Spa & Relax",
    text: "3 notti con percorso Spa illimitato, 1 massaggio rilassante di coppia e prima colazione a buffet.",
    price: "da € 380 / persona",
  },
  {
    tag: "Famiglia",
    title: "Residenze Family",
    text: "Appartamento indipendente per 4, bambini fino a 12 anni gratis, area giochi e accesso Spa.",
    price: "da € 140 / notte",
  },
  {
    tag: "Coppia",
    title: "Weekend Romantico",
    text: "2 notti in Camera Vista Mare, cena a lume di candela sul mare e massaggio di coppia.",
    price: "da € 320 / coppia",
  },
];

function OffertePage() {
  return (
    <>
      <PageHero
        eyebrow="Pacchetti & promozioni"
        title="Offerte"
        description="Idee curate per vivere la Sicilia con il giusto ritmo — ogni stagione."
        image={heroSea}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {offers.map((o) => (
            <article
              key={o.title}
              className="bg-white p-8 md:p-10 border border-black/5 rounded-sm flex flex-col"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium mb-4">
                {o.tag}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">{o.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{o.text}</p>
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-black/5">
                <span className="font-serif text-lg text-sea">{o.price}</span>
                <Link
                  to="/contatti"
                  className="text-xs font-bold uppercase tracking-widest border-b-2 border-terracotta pb-1 hover:text-terracotta"
                >
                  Prenota →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
