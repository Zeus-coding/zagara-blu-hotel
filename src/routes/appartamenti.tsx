import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Gallery } from "@/components/gallery";
import { BookingWidget } from "@/components/booking-widget";
import { Home, Users, ChefHat, Waves } from "lucide-react";
import apartmentImg from "@/assets/apartment.jpg";
import apartment2 from "@/assets/apartment-2.jpg";

export const Route = createFileRoute("/appartamenti")({
  head: () => ({
    meta: [
      { title: "Residenze Zagara — Appartamenti | Zagara Blu Hotel & Spa" },
      {
        name: "description",
        content:
          "Residenze Zagara: 8 appartamenti indipendenti a Marina di Serralba, ideali per famiglie e soggiorni lunghi con accesso a Spa e colazione.",
      },
      { property: "og:title", content: "Residenze Zagara — Zagara Blu" },
      {
        property: "og:description",
        content:
          "8 appartamenti indipendenti in Sicilia, con tutti i servizi di un hotel 4 stelle.",
      },
    ],
  }),
  component: AppartamentiPage,
});

const perks = [
  { icon: Home, label: "8 residenze indipendenti" },
  { icon: Users, label: "Ideali per famiglie" },
  { icon: ChefHat, label: "Cucina attrezzata" },
  { icon: Waves, label: "Accesso Spa & colazione" },
];

function AppartamentiPage() {
  return (
    <>
      <PageHero
        eyebrow="Residenze Zagara · Appartamenti"
        title={
          <>
            Vivi la Sicilia
            <br />
            <em className="italic">come a casa</em>
          </>
        }
        description="Otto appartamenti indipendenti con la libertà di una casa e i servizi di un hotel 4 stelle."
        image={apartmentImg}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium">
              Residenze Zagara
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight mb-6">
              La formula perfetta per famiglie e soggiorni lunghi
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Le Residenze Zagara sono 8 appartamenti indipendenti, alcuni al piano terra, pensate
              per chi desidera l'autonomia di una casa vacanza senza rinunciare ai comfort
              dell'hotel.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Gli ospiti hanno pieno accesso a colazione, centro benessere Spa e a tutti i servizi
              dello Zagara Blu — a pochi passi dal mare di Marina di Serralba.
            </p>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="border border-black/10 p-6 rounded-sm bg-white/60">
                <Icon size={22} className="text-sea mb-3" />
                <p className="text-sm font-medium leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sea text-cream py-16 md:py-24">
        <div className="container-page">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Le unità</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5">
                <img
                  src={apartmentImg}
                  alt="Appartamento Terrazza Mare"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">Appartamento Terrazza Mare</h3>
              <p className="text-cream/80 text-sm">
                Fino a 4 persone · Piano terra · Cucina attrezzata · Wi-Fi
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5">
                <img
                  src={apartment2}
                  alt="Family Suite Gelsomino"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">Family Suite Gelsomino</h3>
              <p className="text-cream/80 text-sm">
                Fino a 6 persone · Area bimbi · Terrazza · Accesso Spa
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl mb-10">Galleria appartamenti</h2>
        <Gallery
          columns={3}
          images={[
            { src: apartmentImg, alt: "Soggiorno con cucina", caption: "Zona living" },
            { src: apartment2, alt: "Camera da letto", caption: "Camera" },
            { src: apartmentImg, alt: "Terrazza", caption: "Terrazza vista mare" },
            { src: apartment2, alt: "Dettaglio arredamento", caption: "Dettagli" },
            { src: apartmentImg, alt: "Cucina attrezzata", caption: "Cucina" },
            { src: apartment2, alt: "Camera doppia", caption: "Camera doppia" },
          ]}
        />
      </section>

      <section className="container-page pb-16 md:pb-20">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">
          Prenota il tuo appartamento
        </h2>
        <div className="max-w-4xl mx-auto">
          <BookingWidget />
        </div>
      </section>
    </>
  );
}
