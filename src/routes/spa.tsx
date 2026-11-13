import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Gallery } from "@/components/gallery";
import spaImg from "@/assets/spa.jpg";
import spa2 from "@/assets/spa-2.jpg";

export const Route = createFileRoute("/spa")({
  head: () => ({
    meta: [
      { title: "Centro Benessere & Spa — Zagara Blu Hotel & Spa" },
      {
        name: "description",
        content:
          "La Spa dello Zagara Blu a Marina di Serralba: sauna, bagno turco, idromassaggio e trattamenti personalizzati con essenze mediterranee.",
      },
      { property: "og:title", content: "Spa & Benessere — Zagara Blu" },
      {
        property: "og:description",
        content: "Trattamenti wellness e percorsi sensoriali nel cuore della Sicilia.",
      },
    ],
  }),
  component: SpaPage,
});

const treatments = [
  { name: "Massaggio Rilassante", duration: "50 min", price: "€ 70" },
  { name: "Massaggio Sportivo Decontratturante", duration: "50 min", price: "€ 80" },
  { name: "Rituale Mediterraneo", duration: "80 min", price: "€ 120" },
  { name: "Percorso Sensoriale Spa", duration: "2 ore", price: "€ 45" },
  { name: "Trattamento Viso Idratante", duration: "50 min", price: "€ 75" },
  { name: "Massaggio di Coppia", duration: "50 min", price: "€ 140" },
];

function SpaPage() {
  return (
    <>
      <PageHero
        eyebrow="Centro Benessere"
        title="Spa & Wellness"
        description="Un'oasi di silenzio dove ritrovare l'equilibrio, tra vapori profumati e luce calda."
        image={spaImg}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium">
              Il percorso
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight mb-6">
              Rigenerati con i profumi della Sicilia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La nostra Spa offre un percorso completo tra sauna finlandese, bagno turco, docce
              emozionali e idromassaggio. Ogni trattamento è personalizzato dai nostri terapisti con
              oli essenziali di agrumi, gelsomino e mandorla dolce.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il centro è accessibile sia agli ospiti dell'hotel che a quelli delle Residenze
              Zagara, su prenotazione anche per esterni.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={spa2}
              alt="Sala massaggi Spa"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-sea text-cream py-16 md:py-24">
        <div className="container-page">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">Trattamenti & Listino</h2>
          <p className="text-cream/70 mb-10 max-w-xl">
            Prenota il tuo trattamento in reception o via email. Sconto 15% per gli ospiti
            dell'hotel.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
            {treatments.map((t) => (
              <div key={t.name} className="flex items-baseline gap-4 py-5 border-b border-cream/15">
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-lg md:text-xl">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-cream/60 mt-1">
                    {t.duration}
                  </p>
                </div>
                <span className="font-serif text-xl text-terracotta shrink-0">{t.price}</span>
              </div>
            ))}
          </div>
          <a
            href="mailto:spa@zagarablu.example"
            className="inline-flex mt-10 items-center bg-terracotta text-cream px-7 py-3.5 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Prenota un trattamento
          </a>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl mb-10">Galleria Spa</h2>
        <Gallery
          columns={3}
          images={[
            { src: spaImg, alt: "Piscina Spa", caption: "Piscina interna" },
            { src: spa2, alt: "Sala massaggi", caption: "Sala massaggi" },
            { src: spaImg, alt: "Idromassaggio", caption: "Idromassaggio" },
          ]}
        />
      </section>
    </>
  );
}
